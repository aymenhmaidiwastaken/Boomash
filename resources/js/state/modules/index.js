import camelCase from 'lodash/camelCase'

const modulesCache = {}
const storeData = { modules: {} }

async function updateModules() {
  const requireModule = require.context(
    '.',
    true,
    /^((?!index|\.unit\.).)*\.js$/
  )

  // For every Vuex module...
  for (const fileName of requireModule.keys()) {
    const moduleDefinition = await requireModule(fileName)

    if (modulesCache[fileName] === moduleDefinition) continue

    modulesCache[fileName] = moduleDefinition

    const modulePath = fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split(/\//)
      .map(camelCase)

    const { modules } = getNamespace(storeData, modulePath)

    modules[modulePath.pop()] = {
      namespaced: true,
      ...moduleDefinition.default || moduleDefinition,
    }
  }

  if (module.hot) {
    module.hot.accept(requireModule.id, async () => {
      await updateModules()
      require('../store').default.hotUpdate({ modules: storeData.modules })
    })
  }
}

// Recursively get the namespace of a Vuex module, even if nested.
function getNamespace(subtree, path) {
  if (path.length === 1) return subtree

  const namespace = path.shift()
  subtree.modules[namespace] = {
    modules: {},
    namespaced: true,
    ...subtree.modules[namespace],
  }
  return getNamespace(subtree.modules[namespace], path)
}

export default storeData.modules

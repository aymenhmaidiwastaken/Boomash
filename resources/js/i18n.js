import {createI18n} from 'vue-i18n'

import ar from './lang/ar.json'
import ch from './lang/ch.json'
import en from './lang/en.json'
import fr from './lang/fr.json'
import gr from './lang/gr.json'
import it from './lang/it.json'
import ru from './lang/ru.json'
import sp from './lang/sp.json'

const messages = {
  ar,
  ch,
  en,
  fr,
  gr,
  it,
  ru,
  sp
}

const locale = sessionStorage.getItem("locale");

const i18n = createI18n({
  locale:  locale || "en",
  fallbackLocale: "en",
  messages: messages
});
export default i18n;

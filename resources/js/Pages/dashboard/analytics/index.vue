<script>
import { Link, Head } from '@inertiajs/vue3';
import { AlertTriangleIcon } from '@zhuowenli/vue-feather-icons';

import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import Widget from "./widget.vue";
import AudiencesMetrics from "./audiences-metrics.vue";
import AudiencesSessions from "./audiences-sessions.vue";
import Country from "./country.vue";
import Referrals from "./referrals.vue";
import SessionsCounties from "./sessions-countries.vue";
import TopPages from "./top-pages.vue";
import Users from "./users.vue";

export default {
  components: {
    AlertTriangleIcon,
    Layout,
    PageHeader,
    Widget,
    AudiencesSessions,
    AudiencesMetrics,
    Country,
    Referrals,
    SessionsCounties,
    TopPages,
    Users,
    Link,Head
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Analytics" pageTitle="Dashboards" />

    <BRow>
      <BCol xxl="5">
        <BRow>
          <BCol cols="12">
            <BCard no-body>
              <BCardBody class="p-0">
                <BAlert :model-value="true" variant="warning" class="border-0 rounded-0 m-0 d-flex align-items-center">
                  <AlertTriangleIcon class="text-warning me-2 icon-sm"></AlertTriangleIcon>
                  <div class="flex-grow-1 text-truncate">
                    Your free trial expired in <b>17</b> days.
                  </div>
                  <div class="flex-shrink-0">
                    <Link href="/pages/pricing" class="text-reset text-decoration-underline"><b>Upgrade</b>
                    </Link>
                  </div>
                </BAlert>
                <BRow class="align-items-end">
                  <BCol sm="8">
                    <div class="p-3">
                      <p class="fs-16 lh-base">Upgrade your plan from a <span class="fw-semibold">Free
                          trial</span>, to ‘Premium Plan’ <i class="mdi mdi-arrow-right"></i></p>
                      <div class="mt-3">
                        <Link href="/pages/pricing" class="btn btn-success">Upgrade Account!</Link>
                      </div>
                    </div>
                  </BCol>
                  <BCol sm="4">
                    <div class="px-3">
                      <img src="@assets/images/user-illustarator-2.png" class="img-fluid" alt="">
                    </div>
                  </BCol>
                </BRow>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
        <Widget />
      </BCol>
      <BCol xxl="7">
        <BRow class="h-100">
          <BCol xl="6">
            <Country />
          </BCol>
          <BCol xl="6">
            <SessionsCounties />
          </BCol>
        </BRow>
      </BCol>
    </BRow>

    <BRow class="h-100">
      <BCol xl="6">
        <AudiencesMetrics />
      </BCol>
      <BCol xl="6">
        <AudiencesSessions />
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="4">
        <Users />
      </BCol>
      <BCol xl="4" md="6">
        <Referrals />
      </BCol>
      <BCol xl="4" md="6">
        <TopPages />
      </BCol>
    </BRow>
  </Layout>
</template>

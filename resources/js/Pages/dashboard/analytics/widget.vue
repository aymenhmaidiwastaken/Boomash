<script>
  import {
    CountTo
  } from "vue3-count-to";

  import {
    UsersIcon,
    ActivityIcon,
    ClockIcon,
    ExternalLinkIcon,
  } from '@zhuowenli/vue-feather-icons'

  export default {
    components: {
      CountTo,
      UsersIcon,
      ActivityIcon,
      ClockIcon,
      ExternalLinkIcon
    }
  };
</script>

<template>
  <BRow>
    <BCol md="6">
      <BCard no-body class="card-animate">
        <BCardBody>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Users</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :startVal='0' :endVal='28.05' :duration='5000'></count-to>k
              </h2>
              <p class="mb-0 text-muted">
                <BBadge class="bg-light text-success mb-0">
                  <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                </BBadge>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                  <users-icon class="text-info icon-md"></users-icon>
                </span>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <BCol md="6">
      <BCard no-body class="card-animate">
        <BCardBody>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Sessions</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :startVal='0' :endVal='97' :duration='5000'></count-to>k
              </h2>
              <p class="mb-0 text-muted">
                <BBadge class="bg-light text-danger mb-0">
                  <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                </BBadge>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                  <activity-icon name="activity" class="text-info icon-md"></activity-icon>
                </span>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol md="6">
      <BCard no-body class="card-animate">
        <BCardBody>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Avg. Visit Duration</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :startVal='0' :endVal='3' :duration='5000'></count-to>m
                <count-to :startVal='0' :endVal='40' :duration='5000'></count-to>sec
              </h2>
              <p class="mb-0 text-muted">
                <BBadge class="bg-light text-danger mb-0">
                  <i class="ri-arrow-down-line align-middle"></i> 0.24 %
                </BBadge>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                  <clock-icon name="clock" class="text-info icon-md"></clock-icon>
                </span>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <BCol md="6">
      <BCard no-body class="card-animate">
        <BCardBody>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Bounce Rate</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :startVal='0' :endVal='33' :duration='5000'></count-to>%
              </h2>
              <p class="mb-0 text-muted">
                <BBadge class="bg-light text-success mb-0">
                  <i class="ri-arrow-up-line align-middle"></i> 7.05 %
                </BBadge>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                  <external-link-icon class="text-info icon-md"></external-link-icon>
                </span>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
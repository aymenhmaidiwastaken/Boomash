<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex">
            <BCardTitle class="mb-0 flex-grow-1">Top Referrals Pages</BCardTitle>
            <div class="flex-shrink-0">
                <BButton type="button" variant="soft-primary" size="sm">
                    Export Report
                </BButton>
            </div>
        </BCardHeader>

        <BCardBody>

            <BRow class="align-items-center">
                <BCol cols="6">
                    <h6 class="text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3">Total Referrals Page</h6>
                    <h4 class="fs- mb-0">725,800</h4>
                    <p class="mb-0 mt-2 text-muted"><BBadge variant="success-subtle" class="bg-success-subtle text-success mb-0">
                            <i class="ri-arrow-up-line align-middle"></i> 15.72 %
                        </BBadge> vs. previous month</p>
                </BCol>
                <BCol cols="6">
                    <div class="text-center">
                        <img src="@assets/images/illustrator-1.png" class="img-fluid" alt="">
                    </div>
                </BCol>
            </BRow>
            <div class="mt-3 pt-2">

                <BProgress  class="progress-lg rounded-pill">
                    <BProgressBar  :value="25" variant="primary" class="rounded-0" />
                    <BProgressBar :value="18" variant="info" class="rounded-0" />
                    <BProgressBar :value="22" variant="success" class="rounded-0" />
                    <BProgressBar :value="16" variant="warning" class="rounded-0" />
                    <BProgressBar :value="19" variant="danger" class="rounded-0" />
                  </BProgress>
            </div>

            <div class="mt-3 pt-2">
                <div class="d-flex mb-2">
                    <div class="flex-grow-1">
                        <p class="text-truncate text-muted fs-14 mb-0"><i
                                class="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com</p>
                    </div>
                    <div class="flex-shrink-0">
                        <p class="mb-0">24.58%</p>
                    </div>
                </div>
                <div class="d-flex mb-2">
                    <div class="flex-grow-1">
                        <p class="text-truncate text-muted fs-14 mb-0"><i
                                class="mdi mdi-circle align-middle text-info me-2"></i>www.youtube.com</p>
                    </div>
                    <div class="flex-shrink-0">
                        <p class="mb-0">17.51%</p>
                    </div>
                </div>
                <div class="d-flex mb-2">
                    <div class="flex-grow-1">
                        <p class="text-truncate text-muted fs-14 mb-0"><i
                                class="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com</p>
                    </div>
                    <div class="flex-shrink-0">
                        <p class="mb-0">23.05%</p>
                    </div>
                </div>
                <div class="d-flex mb-2">
                    <div class="flex-grow-1">
                        <p class="text-truncate text-muted fs-14 mb-0"><i
                                class="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com</p>
                    </div>
                    <div class="flex-shrink-0">
                        <p class="mb-0">12.22%</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-truncate text-muted fs-14 mb-0"><i
                                class="mdi mdi-circle align-middle text-danger me-2"></i>Other</p>
                    </div>
                    <div class="flex-shrink-0">
                        <p class="mb-0">17.58%</p>
                    </div>
                </div>
            </div>

            <div class="mt-2 text-center">
                <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">Show All</BLink>
            </div>

        </BCardBody>
    </BCard>
</template>

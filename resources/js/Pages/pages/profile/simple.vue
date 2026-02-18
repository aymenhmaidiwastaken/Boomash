<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

export default {
  data() {
    return {
      Autoplay, Navigation
    };
  },
  components: {
    Layout,
    Swiper,
    SwiperSlide,
    Head, Link
  },
};
</script>

<template>
  <Layout>
    <Head title="Simple Profile" />
    <div class="profile-foreground position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg">
        <img src="@assets/images/profile-bg.jpg" alt="" class="profile-wid-img" />
      </div>
    </div>
    <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
      <BRow class="g-4">
        <BCol cols="auto">
          <div class="avatar-lg">
            <img src="@assets/images/users/avatar-1.jpg" alt="user-img" class="img-thumbnail rounded-circle" />
          </div>
        </BCol>
        <BCol>
          <div class="p-2">
            <h3 class="text-white mb-1">Anna Adame</h3>
            <p class="text-white text-opacity-75">Owner & Founder</p>
            <div class="hstack text-white-50 gap-1">
              <div class="me-2">
                <i class="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>California, United
                States
              </div>
              <div>
                <i class="ri-building-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>Boomash
              </div>
            </div>
          </div>
        </BCol>
        <BCol cols="12" lg="auto" order-lg="0" class="order-last">
          <BRow class="text text-white-50 text-center">
            <BCol lg="6" cols="4">
              <div class="p-2">
                <h4 class="text-white mb-1">24.3K</h4>
                <p class="fs-14 mb-0">Followers</p>
              </div>
            </BCol>
            <BCol lg="6" cols="4">
              <div class="p-2">
                <h4 class="text-white mb-1">1.3K</h4>
                <p class="fs-14 mb-0">Following</p>
              </div>
            </BCol>
          </BRow>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol lg="12">
        <div>
          <div class="d-flex profile-wrapper" style="position: absolute; right: 13px; top: 26px; ">
            <div class="d-flex justify-content-end">
              <Link href="/pages/profile-setting" class="btn btn-success"><i
                  class="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
            </div>
          </div>
          <BTabs nav-class=" animation-nav profile-nav gap-2 gap-lg-3  pt-4 text-muted" pills>
            <BTab title="Overview" class="nav-item pt-4">
              <template #title>
                <i class="ri-airplay-fill d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Overview</span>
              </template>
              <BRow >
                <BCol xxl="3">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-5">Complete Your Profile</h5>
                      <BProgress class="animated-progress custom-progress progress-label">
                        <BProgressBar :value="30" variant="danger">
                          <div class="label">30%</div>
                        </BProgressBar>
                      </BProgress>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Info</h5>
                      <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th class="ps-0" scope="row">Full Name :</th>
                              <td class="text-muted">Anna Adame</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Mobile :</th>
                              <td class="text-muted">+(1) 987 6543</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">E-mail :</th>
                              <td class="text-muted">daveadame@boomash.com</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Location :</th>
                              <td class="text-muted">
                                California, United States
                              </td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Joining Date</th>
                              <td class="text-muted">24 Nov 2021</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-4">Portfolio</h5>
                      <div class="d-flex flex-wrap gap-2">
                        <div>
                          <BLink href="javascript:void(0);" class="avatar-xs d-block">
                            <span class="avatar-title rounded-circle fs-16 bg-body text-body">
                              <i class="ri-github-fill"></i>
                            </span>
                          </BLink>
                        </div>
                        <div>
                          <BLink href="javascript:void(0);" class="avatar-xs d-block">
                            <span class="avatar-title rounded-circle fs-16 bg-primary">
                              <i class="ri-global-fill"></i>
                            </span>
                          </BLink>
                        </div>
                        <div>
                          <BLink href="javascript:void(0);" class="avatar-xs d-block">
                            <span class="avatar-title rounded-circle fs-16 bg-success">
                              <i class="ri-dribbble-fill"></i>
                            </span>
                          </BLink>
                        </div>
                        <div>
                          <BLink href="javascript:void(0);" class="avatar-xs d-block">
                            <span class="avatar-title rounded-circle fs-16 bg-danger">
                              <i class="ri-pinterest-fill"></i>
                            </span>
                          </BLink>
                        </div>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-4">Skills</h5>
                      <div class="d-flex flex-wrap gap-2 fs-15">
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">Photoshop</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">illustrator</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">HTML</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">CSS</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">Javascript</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">Php</BLink>
                        <BLink href="javascript:void(0);" class="badge bg-primary-subtle text-primary">Python</BLink>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                          <h5 class="card-title mb-0">Suggestions</h5>
                        </div>
                        <div class="flex-shrink-0">
                          <BDropdown variant="link" right toggle-class="arrow-none p-0" no-caret>
                            <template #button-content><i class="ri-more-2-fill fs-14"></i>
                            </template>
                            <BDropdownItem href="#">
                              View
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              Download
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              Delete
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">Esther James</h5>
                              <p class="fs-13 text-muted mb-0">
                                Frontend Developer
                              </p>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <BButton type="button" variant="outline-success" size="sm">
                              <i class="ri-user-add-line align-middle"></i>
                            </BButton>
                          </div>
                        </div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">Jacqueline Steve</h5>
                              <p class="fs-13 text-muted mb-0">
                                UI/UX Designer
                              </p>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <BButton type="button" variant="outline-success" size="sm">
                              <i class="ri-user-add-line align-middle"></i>
                            </BButton>
                          </div>
                        </div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">George Whalen</h5>
                              <p class="fs-13 text-muted mb-0">
                                Backend Developer
                              </p>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <BButton type="button" variant="outline-success" size="sm">
                              <i class="ri-user-add-line align-middle"></i>
                            </BButton>
                          </div>
                        </div>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                          <h5 class="card-title mb-0">Popular Posts</h5>
                        </div>
                        <div class="flex-shrink-0">
                          <BDropdown variant="link" right toggle-class="arrow-none p-0" no-caret>
                            <template #button-content><i class="ri-more-2-fill fs-14"></i>
                            </template>
                            <BDropdownItem href="#">
                              View
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              Download
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              Delete
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <div class="d-flex mb-4">
                        <div class="flex-shrink-0">
                          <img src="@assets/images/small/img-4.jpg" alt="" height="50" class="rounded" />
                        </div>
                        <div class="flex-grow-1 ms-3 overflow-hidden">
                          <BLink href="javascript:void(0);">
                            <h6 class="text-truncate fs-14">
                              Design your apps in your own way
                            </h6>
                          </BLink>
                          <p class="text-muted mb-0">15 Dec 2021</p>
                        </div>
                      </div>
                      <div class="d-flex mb-4">
                        <div class="flex-shrink-0">
                          <img src="@assets/images/small/img-5.jpg" alt="" height="50" class="rounded" />
                        </div>
                        <div class="flex-grow-1 ms-3 overflow-hidden">
                          <BLink href="javascript:void(0);">
                            <h6 class="text-truncate fs-14">
                              Smartest Applications for Business
                            </h6>
                          </BLink>
                          <p class="text-muted mb-0">28 Nov 2021</p>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img src="@assets/images/small/img-6.jpg" alt="" height="50" class="rounded" />
                        </div>
                        <div class="flex-grow-1 ms-3 overflow-hidden">
                          <BLink href="javascript:void(0);">
                            <h6 class="text-truncate fs-14">
                              How to get creative in your work
                            </h6>
                          </BLink>
                          <p class="text-muted mb-0">21 Nov 2021</p>
                        </div>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol xxl="9">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">About</h5>
                      <p>
                        Hi I'm Anna Adame, It will be as simple as Occidental;
                        in fact, it will be Occidental. To an English person, it
                        will seem like simplified English, as a skeptical
                        Cambridge friend of mine told me what Occidental is
                        European languages are members of the same family.
                      </p>
                      <p>
                        You always want to make sure that your fonts work well
                        together and try to limit the number of fonts you use to
                        three or less. Experiment and play around with the fonts
                        that you already have in the software you’re working
                        with reputable font websites. This may be the most
                        commonly encountered tip I received from the designers I
                        spoke with. They highly encourage that you use different
                        fonts in one design, but do not over-exaggerate and go
                        overboard.
                      </p>
                      <BRow>
                        <BCol cols="6" md="4">
                          <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                              <div class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                <i class="ri-user-2-fill"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="mb-1">Designation :</p>
                              <h6 class="text-truncate mb-0">
                                Lead Designer / Developer
                              </h6>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="6" md="4">
                          <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                              <div class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                <i class="ri-global-line"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="mb-1">Website :</p>
                              <BLink href="#" class="fw-semibold">www.boomash.com</BLink>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </BCardBody>
                  </BCard>

                  <BRow>
                    <BCol lg="12">
                      <BCard no-body >
                        <BCardHeader class="align-items-center d-flex">
                          <BCardTitle class="mb-0 me-2">Recent Activity</BCardTitle>
                          <div class="flex-shrink-0 ms-auto">
                            <!-- <ul class="nav justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
                              role="tablist">
                              <li class="nav-item">
                                <BLink class="nav-link active" data-bs-toggle="tab" href="#today" role="tab">
                                  Today
                                </BLink>
                              </li>
                              <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#weekly" role="tab">
                                  Weekly
                                </BLink>
                              </li>
                              <li class="nav-item">
                                <BLink class="nav-link" data-bs-toggle="tab" href="#monthly" role="tab">
                                  Monthly
                                </BLink>
                              </li>
                            </ul> -->
                          </div>
                        </BCardHeader>
                        <BCardBody>
                          <BTabs nav-class="text-muted nav-tabs-custom rounded card-header-tabs border-bottom-0 tamp">
                            <BTab title="Today">
                              <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="todayExample">
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingOne">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseOne>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-2.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Jacqueline Steve
                                            </h6>
                                            <small class="text-muted">We has changed 2 attributes on
                                              05:16PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapseOne" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        In an awareness campaign, it is vital
                                        for people to begin put 2 and 2 together
                                        and begin to recognize your cause. Too
                                        much or too little spacing, as in the
                                        example below, can make things
                                        unpleasant for the reader. The goal is
                                        to make your text as comfortable to read
                                        as possible. A wonderful serenity has
                                        taken possession of my entire soul, like
                                        these sweet mornings of spring which I
                                        enjoy with my whole heart.
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingTwo">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseTwo>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-success rounded-circle">
                                              M
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Megan Elmore
                                            </h6>
                                            <small class="text-muted">Adding a new event with
                                              attachments - 04:45PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapseTwo" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <BRow class="g-2">
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-image-2-line fs-17 text-danger"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6 class="mb-0">
                                                  <BLink href="javascript:void(0);" class="stretched-link">Business
                                                    Template
                                                    - UI/UX
                                                    design</BLink>
                                                </h6>
                                                <small>685 KB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-file-zip-line fs-17 text-info"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6>
                                                  <BLink href="javascript:void(0);" class="stretched-link">Bank
                                                    Management
                                                    System -
                                                    PSD</BLink>
                                                </h6>
                                                <small>8.78 MB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                        </BRow>
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingThree">
                                      <BLink class="accordion-button p-2 shadow-none" data-bs-toggle="collapse"
                                        href="#collapsethree" aria-expanded="false">
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-5.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              New ticket received
                                            </h6>
                                            <small class="text-muted mb-2">User
                                              <span class="text-secondary">Erica245</span>
                                              submitted a ticket -
                                              02:33PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingFour">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseFour>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-muted rounded-circle">
                                              <i class="ri-user-3-fill"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Nancy Martino
                                            </h6>
                                            <small class="text-muted">Commented on 12:57PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapseFour" visible>
                                      <div class="accordion-body ms-2 ps-5 fst-italic">
                                        " A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. Each design is a
                                        new, unique piece of art birthed into
                                        this world, and while you have the
                                        opportunity to be creative and make your
                                        own style choices. "
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingFive">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseFive>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-7.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Lewis Arnold
                                            </h6>
                                            <small class="text-muted">Create new project Building
                                              product - 10:05AM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapseFive" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <p class="text-muted mb-2">
                                          Every team project can have a boomash.
                                          Use the boomash to share information
                                          with your team to understand and
                                          contribute to your project.
                                        </p>
                                        <div class="avatar-group">
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Christi">
                                            <img src="@assets/images/users/avatar-4.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Frank Hook">
                                            <img src="@assets/images/users/avatar-3.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Ruby">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                R
                                              </div>
                                            </div>
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="more">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle">
                                                2+
                                              </div>
                                            </div>
                                          </BLink>
                                        </div>
                                      </div>
                                    </BCollapse>
                                  </div>
                                </div>
                              </div>
                            </BTab>
                            <BTab title="Weekly">
                              <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="weeklyExample">
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading6">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse6>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-3.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Joseph Parker
                                            </h6>
                                            <small class="text-muted">New people joined with our
                                              company - Yesterday</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapse6" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        It makes a statement, it’s impressive
                                        graphic design. Increase or decrease the
                                        letter spacing depending on the
                                        situation and try, try again until it
                                        looks right, and each letter has the
                                        perfect spot of its own.
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading7">
                                      <BLink class="accordion-button p-2 shadow-none" data-bs-toggle="collapse"
                                        href="#collapse7" aria-expanded="false">
                                        <div class="d-flex">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-danger">
                                              <i class="ri-shopping-bag-line"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Your order is placed
                                              <BBadge variant="success-subtle"
                                                class="bg-success-subtle text-success align-middle">Completed</BBadge>
                                            </h6>
                                            <small class="text-muted">These customers can rest assured
                                              their order has been placed - 1
                                              week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading8">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse8>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-success rounded-circle">
                                              <i class="ri-home-3-line"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Boomash admin dashboard templates
                                              layout upload
                                            </h6>
                                            <small class="text-muted">We talked about a project on
                                              linkedin - 1 week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse8" visible>
                                      <div class="accordion-body ms-2 ps-5 fst-italic">
                                        Powerful, clean & modern responsive
                                        bootstrap 5 admin template. The maximum
                                        file size for uploads in this demo :
                                        <BRow class="mt-2">
                                          <BCol xxl="6">
                                            <BRow class="border border-dashed gx-2 p-2">
                                              <BCol cols="3">
                                                <img src="@assets/images/small/img-3.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@assets/images/small/img-5.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@assets/images/small/img-7.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@assets/images/small/img-9.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                            </BRow>
                                          </BCol>
                                        </BRow>
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading9">
                                      <BLink class="accordion-button p-2 shadow-none">
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-6.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              New ticket created
                                              <BBadge class="bg-info-subtle text-info align-middle">Inprogress</BBadge>
                                            </h6>
                                            <small class="text-muted mb-2">User
                                              <span class="text-secondary">Jack365</span>
                                              submitted a ticket - 2 week
                                              Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading10">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse10>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-5.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Jennifer Carter
                                            </h6>
                                            <small class="text-muted">Commented - 4 week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapse10" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <p class="text-muted fst-italic mb-2">
                                          " This is an awesome admin dashboard
                                          template. It is extremely well
                                          structured and uses state of the art
                                          components (e.g. one of the only
                                          templates using bootstrap 5.1.3 so
                                          far). I integrated it into a Rails 6
                                          project. Needs manual integration work
                                          of course but the template structure
                                          made it easy. "
                                        </p>
                                      </div>
                                    </BCollapse>
                                  </div>
                                </div>
                              </div>
                            </BTab>
                            <BTab title="Monthly">
                              <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="monthlyExample">
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading11">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse11>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-success rounded-circle">
                                              M
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Megan Elmore
                                            </h6>
                                            <small class="text-muted">Adding a new event with
                                              attachments - 1 month Ago.</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse11" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <BRow class="g-2">
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-image-2-line fs-17 text-danger"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6 class="mb-0">
                                                  <BLink href="javascript:void(0);" class="stretched-link">Business
                                                    Template
                                                    - UI/UX
                                                    design</BLink>
                                                </h6>
                                                <small>685 KB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-file-zip-line fs-17 text-info"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6 class="mb-0">
                                                  <BLink href="javascript:void(0);" class="stretched-link">Bank
                                                    Management
                                                    System -
                                                    PSD</BLink>
                                                </h6>
                                                <small>8.78 MB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-file-zip-line fs-17 text-info"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6 class="mb-0">
                                                  <BLink href="javascript:void(0);" class="stretched-link">Bank
                                                    Management
                                                    System -
                                                    PSD</BLink>
                                                </h6>
                                                <small>8.78 MB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                        </BRow>
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading12">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse12>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-2.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Jacqueline Steve
                                            </h6>
                                            <small class="text-muted">We has changed 2 attributes on 3
                                              month Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse12" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        In an awareness campaign, it is vital
                                        for people to begin put 2 and 2 together
                                        and begin to recognize your cause. Too
                                        much or too little spacing, as in the
                                        example below, can make things
                                        unpleasant for the reader. The goal is
                                        to make your text as comfortable to read
                                        as possible. A wonderful serenity has
                                        taken possession of my entire soul, like
                                        these sweet mornings of spring which I
                                        enjoy with my whole heart.
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading13">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse14>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-5.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              New ticket received
                                            </h6>
                                            <small class="text-muted mb-2">User
                                              <span class="text-secondary">Erica245</span>
                                              submitted a ticket - 5 month
                                              Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading14">
                                      <BLink class="accordion-button p-2 shadow-none" data-bs-toggle="collapse"
                                        href="#collapse14" aria-expanded="true">
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-muted rounded-circle">
                                              <i class="ri-user-3-fill"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Nancy Martino
                                            </h6>
                                            <small class="text-muted">Commented on 24 Nov, 2021.</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse14" visible>
                                      <div class="accordion-body ms-2 ps-5 fst-italic">
                                        " A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. Each design is a
                                        new, unique piece of art birthed into
                                        this world, and while you have the
                                        opportunity to be creative and make your
                                        own style choices. "
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading15">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse15>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-7.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Lewis Arnold
                                            </h6>
                                            <small class="text-muted">Create new project Building
                                              product - 8 month Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse15" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <p class="text-muted mb-2">
                                          Every team project can have a boomash.
                                          Use the boomash to share information
                                          with your team to understand and
                                          contribute to your project.
                                        </p>
                                        <div class="avatar-group">
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Christi">
                                            <img src="@assets/images/users/avatar-4.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Frank Hook">
                                            <img src="@assets/images/users/avatar-3.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title=" Ruby">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                R
                                              </div>
                                            </div>
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="more">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle">
                                                2+
                                              </div>
                                            </div>
                                          </BLink>
                                        </div>
                                      </div>
                                    </BCollapse>
                                  </div>
                                </div>
                              </div>
                            </BTab>
                          </BTabs>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Projects</h5>
                      <div class="swiper project-swiper">
                        <swiper :slides-per-view="3" :space-between="50">
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-success mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">ABC Project Customization</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Last Update :
                                        <span class="fw-semibold text-body">4 hr Ago</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                        Inprogress
                                      </BBadge>
                                    </div>
                                  </div>
                                  <div class="d-flex mt-4">
                                    <div class="flex-grow-1">
                                      <div class="d-flex align-items-center gap-2">
                                        <div>
                                          <h5 class="fs-12 text-muted mb-0">
                                            Members :
                                          </h5>
                                        </div>
                                        <div class="avatar-group">
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-4.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-5.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                A
                                              </div>
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-2.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-danger mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">Client - John</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Last Update :
                                        <span class="fw-semibold text-body">1 hr Ago</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                        Completed
                                      </BBadge>
                                    </div>
                                  </div>
                                  <div class="d-flex mt-4">
                                    <div class="flex-grow-1">
                                      <div class="d-flex align-items-center gap-2">
                                        <div>
                                          <h5 class="fs-12 text-muted mb-0">
                                            Members :
                                          </h5>
                                        </div>
                                        <div class="avatar-group">
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-2.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                C
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-info mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">Brand logo Design</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Last Update :
                                        <span class="fw-semibold text-body">2 hr Ago</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                        Inprogress
                                      </BBadge>
                                    </div>
                                  </div>
                                  <div class="d-flex mt-4">
                                    <div class="flex-grow-1">
                                      <div class="d-flex align-items-center gap-2">
                                        <div>
                                          <h5 class="fs-12 text-muted mb-0">
                                            Members :
                                          </h5>
                                        </div>
                                        <div class="avatar-group">
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-5.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>

                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-danger mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">Project update</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Last Update :
                                        <span class="fw-semibold text-body">4 hr Ago</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                        Completed
                                      </BBadge>
                                    </div>
                                  </div>

                                  <div class="d-flex mt-4">
                                    <div class="flex-grow-1">
                                      <div class="d-flex align-items-center gap-2">
                                        <div>
                                          <h5 class="fs-12 text-muted mb-0">
                                            Members :
                                          </h5>
                                        </div>
                                        <div class="avatar-group">
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-4.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-5.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-warning mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">Chat App</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Last Update :
                                        <span class="fw-semibold text-body">1 hr Ago</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                        Inprogress
                                      </BBadge>
                                    </div>
                                  </div>

                                  <div class="d-flex mt-4">
                                    <div class="flex-grow-1">
                                      <div class="d-flex align-items-center gap-2">
                                        <div>
                                          <h5 class="fs-12 text-muted mb-0">
                                            Members :
                                          </h5>
                                        </div>
                                        <div class="avatar-group">
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-4.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <img src="@assets/images/users/avatar-5.jpg" alt=""
                                                class="rounded-circle img-fluid" />
                                            </div>
                                          </div>
                                          <div class="avatar-group-item">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                A
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                        </swiper>

                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-list-unordered d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Activities</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <h5 class="card-title mb-3">Activities</h5>
                  <div class="acitivity-timeline">
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@assets/images/users/avatar-1.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Oliver Phillips
                          <BBadge variant="primary-subtle" class="text-primary align-middle">New</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          We talked about a project on linkedin.
                        </p>
                        <small class="mb-0 text-muted">Today</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                        <div class="avatar-title bg-success-subtle text-success rounded-circle">
                          N
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Nancy Martino
                          <BBadge variant="secondary-subtle" class="text-secondary align-middle">In Progress</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          <i class="ri-file-text-line align-middle ms-2"></i>
                          Create new project Building product
                        </p>
                        <div class="avatar-group mb-2">
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Christi">
                            <img src="@assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                            <img src="@assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle bg-light text-primary">
                                R
                              </div>
                            </div>
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="more">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle">2+</div>
                            </div>
                          </BLink>
                        </div>
                        <small class="mb-0 text-muted">Yesterday</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@assets/images/users/avatar-2.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Natasha Carey
                          <BBadge variant="success-subtle" class="text-success align-middle">Completed</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          Adding a new event with attachments
                        </p>
                        <BRow>
                          <BCol xxl="4">
                            <BRow class="border border-dashed gx-2 p-2 mb-2">
                              <BCol cols="4">
                                <img src="@assets/images/small/img-2.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                              <BCol cols="4">
                                <img src="@assets/images/small/img-3.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                              <BCol cols="4">
                                <img src="@assets/images/small/img-4.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                            </BRow>
                          </BCol>
                        </BRow>
                        <small class="mb-0 text-muted">25 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@assets/images/users/avatar-6.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Bethany Johnson</h6>
                        <p class="text-muted mb-2">
                          added a new member to boomash dashboard
                        </p>
                        <small class="mb-0 text-muted">19 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                            <i class="ri-shopping-bag-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Your order is placed
                          <BBadge variant="danger-subtle" class="text-danger align-middle ms-1">Out of Delivery</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          These customers can rest assured their order has been
                          placed.
                        </p>
                        <small class="mb-0 text-muted">16 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@assets/images/users/avatar-7.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Lewis Pratt</h6>
                        <p class="text-muted mb-2">
                          They all have something to say beyond the words on the
                          page. They can come across as casual or neutral,
                          exotic or graphic.
                        </p>
                        <small class="mb-0 text-muted">22 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-info-subtle text-info">
                            <i class="ri-line-chart-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Monthly sales report</h6>
                        <p class="text-muted mb-2">
                          <span class="text-danger">2 days left</span>
                          notification to submit the monthly sales report.
                          <BLink href="javascript:void(0);" class="link-warning text-decoration-underline">Reports
                            Builder</BLink>
                        </p>
                        <small class="mb-0 text-muted">15 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@assets/images/users/avatar-8.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          New ticket received
                          <BBadge variant="success-subtle" class="text-success align-middle">Completed</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          User
                          <span class="text-secondary">Erica245</span> submitted
                          a ticket.
                        </p>
                        <small class="mb-0 text-muted">26 Aug</small>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-price-tag-line d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Projects</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <BRow>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-warning">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Chat App Update</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">2 year Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-1.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        J
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">ABC Project Customization</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">2 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary fs-10">
                                Progress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-8.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-info">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Client - Frank Hook</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">1 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        M
                                      </div>
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Boomash Project</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">11 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-danger">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Brand Logo Design</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">10 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        E
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Chat App</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">8 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        R
                                      </div>
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-8.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-warning">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Project Update</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">48 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Client - Jennifer</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">30 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary fs-10">
                                Process
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-1.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-xxl-0 profile-project-info">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Business Template - UI/UX design</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">7 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-2.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-xxl-0 profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Update Project</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">1 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        A
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-sm-0 profile-project-danger">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Bank Management System</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">10 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-0 profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">PSD to HTML Convert</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">29 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol lg="12">
                      <div class="mt-4">
                        <ul class="pagination pagination-separated justify-content-center mb-0">
                          <li class="page-item disabled">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-left"></i>
                            </BLink>
                          </li>
                          <li class="page-item active">
                            <BLink href="javascript:void(0);" class="page-link">1</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">2</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">3</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">4</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">5</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-right"></i>
                            </BLink>
                          </li>
                        </ul>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-folder-4-line d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Documents</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <div class="d-flex align-items-center mb-4">
                    <h5 class="card-title flex-grow-1 mb-0">Documents</h5>
                    <div class="flex-shrink-0">
                      <input class="form-control d-none" type="file" id="formFile" />
                      <label for="formFile" class="btn btn-danger"><i class="ri-upload-2-fill me-1 align-bottom"></i>
                        Upload File</label>
                    </div>
                  </div>
                  <BRow>
                    <BCol lg="12">
                      <div class="table-responsive">
                        <table class="table table-borderless align-middle mb-0">
                          <thead class="table-light">
                            <tr>
                              <th scope="col">File Name</th>
                              <th scope="col">Type</th>
                              <th scope="col">Size</th>
                              <th scope="col">Upload Date</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-primary-subtle text-primary rounded fs-20">
                                      <i class="ri-file-zip-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0)">Artboard-documents.zip</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Zip File</td>
                              <td>4.57 MB</td>
                              <td>12 Dec 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                      <i class="ri-file-pdf-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Bank Management System</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>PDF File</td>
                              <td>8.89 MB</td>
                              <td>24 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-secondary-subtle text-secondary rounded fs-20">
                                      <i class="ri-video-line"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Tour-video.mp4</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>MP4 File</td>
                              <td>14.62 MB</td>
                              <td>19 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-success-subtle text-success rounded fs-20">
                                      <i class="ri-file-excel-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Account-statement.xsl</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>XSL File</td>
                              <td>2.38 KB</td>
                              <td>14 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-info-subtle text-info rounded fs-20">
                                      <i class="ri-folder-line"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Project Screenshots Collection</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Folder File</td>
                              <td>87.24 MB</td>
                              <td>08 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                      <i class="ri-image-2-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Boomash-logo.png</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>PNG File</td>
                              <td>879 KB</td>
                              <td>02 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-center mt-3">
                        <BLink href="javascript:void(0);" class="text-success"><i
                            class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                          Load more
                        </BLink>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BTab>
          </BTabs>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
.tamp{
  position: absolute;
  top: 17px;
  right: 16px;
}
</style>

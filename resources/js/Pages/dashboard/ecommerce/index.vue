<script>
import { Link, Head } from '@inertiajs/vue3';
import getChartColorsArray from "@/common/getChartColorsArray";

import { CountTo } from "vue3-count-to";
import  SimpleBar  from "simplebar-vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/Layouts/main.vue";
import Revenue from "./revenue.vue";
import SalesLocation from "./sales-location.vue";

export default {
  components: {
    CountTo,
    Layout,
    Swiper,
    SwiperSlide,
    flatPickr,
    Revenue,
    SalesLocation,
    SimpleBar,
    Link,Head
  },
  data() {
    return {
      date: "2022-01-01 to 2022-01-31",
      config: {
        mode: "range",
      },
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: {
          height: 333,
          type: "donut",
        },
        legend: {
          position: "bottom",
        },
        stroke: {
          show: false,
        },
        dataLabels: {
          dropShadow: {
            enabled: false,
          },
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'),
      },
      Autoplay, Mousewheel
    };
  },
  methods: {
    rightcolumn() {
      if (document.querySelector('.layout-rightside-col').classList.contains('d-block')) {
        document.querySelector('.layout-rightside-col').classList.remove('d-block');
        document.querySelector('.layout-rightside-col').classList.add('d-none');
      } else {
        document.querySelector('.layout-rightside-col').classList.remove('d-none');
        document.querySelector('.layout-rightside-col').classList.add('d-block');
      }
    },

    resizerightcolumn() {
      const element = document.querySelector('.layout-rightside-col');

      if (element) {
        if (window.outerWidth < 1699) {
          element.classList.remove("d-block");
          element.classList.add("d-none");
        } else {
          element.classList.add("d-block");
          element.classList.remove("d-none");
        }
      }

      if (document.documentElement.getAttribute("data-layout") === "semibox") {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
    },

    hiderightcolumn() {
      const element = document.querySelector('.layout-rightside-col');
      if (element.classList.contains('d-block')) {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizerightcolumn);
  }

};
</script>

<template>
  <Layout>
    <BRow>
      <BCol>
        <div class="h-100">
          <BRow class="mb-3 pb-1">
            <BCol cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1">Welcome back!</h4>
                  <p class="text-muted mb-0">
                    Here's what's happening with your store today.
                  </p>
                </div>
                <div class="mt-3 mt-lg-0">
                  <for action="javascript:void(0);">
                    <BRow class="g-3 mb-0 align-items-center">
                      <BCol sm="auto">
                        <div class="input-group">
                          <flat-pickr v-model="date" :config="config"
                            class="form-control border-0 dash-filter-picker shadow"></flat-pickr>

                          <div class="input-group-text bg-primary border-primary text-white">
                            <i class="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </BCol>
                      <div class="col-auto">
                        <BButton type="button" variant="soft-success">
                          <i class="ri-add-circle-line align-middle me-1"></i>
                          Add Product
                        </BButton>
                      </div>
                      <div class="col-auto">
                        <BButton type="button" variant="soft-info" class="btn-icon waves-effect layout-rightside-btn"
                          @click="rightcolumn">
                          <i class="ri-pulse-line"></i>
                        </BButton>
                      </div>
                    </BRow>
                  </for>
                </div>
              </div>
            </BCol>
          </BRow>

          <BRow>
            <BCol xl="3" md="6">
              <BCard no-body class="card-animate">
                <BCardBody>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Total Earnings
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-success fs-14 mb-0">
                        <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                        +16.24 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        $<count-to :startVal='0' :endVal='559' :duration='5000'></count-to>k
                      </h4>
                      <BLink href="" class="text-decoration-underline">View net earnings</BLink>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-success-subtle rounded fs-3">
                        <i class="bx bx-dollar-circle text-success"></i>
                      </span>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>

            <BCol xl="3" md="6">
              <BCard no-body class="card-animate">
                <BCardBody>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Orders
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-danger fs-14 mb-0">
                        <i class="ri-arrow-right-down-line fs-13 align-middle"></i>
                        -3.57 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        <count-to :startVal='0' :endVal='36894' :duration='5000'></count-to>
                      </h4>
                      <BLink href="" class="text-decoration-underline">View all orders</BLink>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-info-subtle rounded fs-3">
                        <i class="bx bx-shopping-bag text-info"></i>
                      </span>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>

            <BCol xl="3" md="6">
              <BCard no-body class="card-animate">
                <BCardBody>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Customers
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-success fs-14 mb-0">
                        <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                        +29.08 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        <count-to :startVal='0' :endVal='183' :duration='5000'></count-to>M

                      </h4>
                      <BLink href="" class="text-decoration-underline">See details</BLink>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-warning-subtle rounded fs-3">
                        <i class="bx bx-user-circle text-warning"></i>
                      </span>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>

            <BCol xl="3" md="6">
              <BCard no-body class="card-animate">
                <BCardBody>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        My Balance
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-muted fs-14 mb-0">+0.00 %</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        $<count-to :startVal='0' :endVal='165' :duration='5000'></count-to>k
                      </h4>
                      <BLink href="" class="text-decoration-underline">Withdraw money</BLink>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-primary-subtle rounded fs-3">
                        <i class="bx bx-wallet text-primary"></i>
                      </span>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>

          <BRow>
            <BCol xl="8">
              <Revenue />
            </BCol>

            <BCol xl="4">
              <SalesLocation />
            </BCol>
          </BRow>

          <BRow>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader class="align-items-center d-flex py-0">
                  <BCardTitle class="mb-0 flex-grow-1"> Best Selling Products </BCardTitle>
                  <div class="flex-shrink-0">
                    <BDropdown variant="link" class="card-header-dropdown"
                      toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                      aria-haspopup="true" :offset="{ alignmentAxis: -45, crossAxis: 0, mainAxis: 0 }">
                      <template #button-content><span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                          class="text-muted">Today<i class="mdi mdi-chevron-down ms-1"></i></span>
                      </template>
                      <BDropdownItem>Today</BDropdownItem>
                      <BDropdownItem>Yesterday</BDropdownItem>
                      <BDropdownItem>Last 7 Days</BDropdownItem>
                      <BDropdownItem>Last 30 Days</BDropdownItem>
                      <BDropdownItem>This Month</BDropdownItem>
                      <BDropdownItem>Last Month</BDropdownItem>
                    </BDropdown>
                  </div>
                </BCardHeader>

                <BCardBody>
                  <div class="table-responsive table-card">
                    <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@assets/images/products/img-1.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <Link href="/ecommerce/product-details" class="text-reset">Branded T-Shirts
                                  </Link>
                                </h5>
                                <span class="text-muted">24 Apr 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$29.00</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">62</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">510</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$1,798</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@assets/images/products/img-2.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <Link href="/ecommerce/product-details" class="text-reset">Bentwood Chair
                                  </Link>
                                </h5>
                                <span class="text-muted">19 Mar 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$85.20</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">35</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">
                              <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Out of stock</BBadge>
                            </h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$2982</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@assets/images/products/img-3.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <Link href="/ecommerce/product-details" class="text-reset">Borosil Paper Cup
                                  </Link>
                                </h5>
                                <span class="text-muted">01 Mar 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$14.00</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">80</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">749</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$1120</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@assets/images/products/img-4.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <Link href="/ecommerce/product-details" class="text-reset">One Seater Sofa
                                  </Link>
                                </h5>
                                <span class="text-muted">11 Feb 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$127.50</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">56</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">
                              <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Out of stock</BBadge>
                            </h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$7140</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@assets/images/products/img-5.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <Link href="/ecommerce/product-details" class="text-reset">Stillbird Helmet
                                  </Link>
                                </h5>
                                <span class="text-muted">17 Jan 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$54</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">74</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">805</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$3996</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <BRow class="align-items-center mt-4 pt-2 justify-content-between text-center text-sm-start">
                    <BCol sm>
                      <div class="text-muted">
                        Showing <span class="fw-semibold">5</span> of
                        <span class="fw-semibold">25</span> Results
                      </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                      <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                        <li class="page-item disabled">
                          <BLink href="#" class="page-link">←</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">1</BLink>
                        </li>
                        <li class="page-item active">
                          <BLink href="#" class="page-link">2</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">3</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">→</BLink>
                        </li>
                      </ul>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BCol>

            <BCol xl="6">
              <BCard no-body class="card-height-100">
                <BCardHeader class="align-items-center d-flex py-0">
                  <BCardTitle class="mb-0 flex-grow-1">Top Sellers</BCardTitle>
                  <div class="flex-shrink-0">
                    <BDropdown variant="link" class="card-header-dropdown"
                      toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                      aria-haspopup="true" :offset="{ alignmentAxis: -100, crossAxis: 0, mainAxis: 0 }">
                      <template #button-content> <span class="text-muted">Report<i
                            class="mdi mdi-chevron-down ms-1"></i></span>
                      </template>
                      <BDropdownItem>Download Report</BDropdownItem>
                      <BDropdownItem>Export</BDropdownItem>
                      <BDropdownItem>Import</BDropdownItem>
                    </BDropdown>
                  </div>
                </BCardHeader>

                <BCardBody>
                  <div class="table-responsive table-card">
                    <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/companies/img-1.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1 fw-medium">
                                  <Link href="/ecommerce/seller-details" class="text-reset">iTest Factory
                                  </Link>
                                </h5>
                                <span class="text-muted">Oliver Tyler</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Bags and Wallets</span>
                          </td>
                          <td>
                            <p class="mb-0">8547</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$541200</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              32%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/companies/img-2.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <Link href="/ecommerce/seller-details" class="text-reset">Digitech Galaxy
                                  </Link>
                                </h5>
                                <span class="text-muted">John Roberts</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Watches</span>
                          </td>
                          <td>
                            <p class="mb-0">895</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$75030</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              79%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/companies/img-3.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-gow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <Link href="/ecommerce/seller-details" class="text-reset">Nesta Technologies
                                  </Link>
                                </h5>
                                <span class="text-muted">Harley Fuller</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Bike Accessories</span>
                          </td>
                          <td>
                            <p class="mb-0">3470</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$45600</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              90%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/companies/img-8.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <Link href="/ecommerce/seller-details" class="text-reset">Zoetic Fashion
                                  </Link>
                                </h5>
                                <span class="text-muted">James Bowen</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Clothes</span>
                          </td>
                          <td>
                            <p class="mb-0">5488</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$29456</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              40%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/companies/img-5.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <Link href="/ecommerce/seller-details" class="text-reset">Meta4Systems
                                  </Link>
                                </h5>
                                <span class="text-muted">Zoe Dennis</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Furniture</span>
                          </td>
                          <td>
                            <p class="mb-0">4100</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$11260</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              57%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <BRow class="align-items-center mt-4 pt-2 justify-content-between text-center text-sm-start">
                    <BCol sm>
                      <div class="text-muted">
                        Showing <span class="fw-semibold">5</span> of
                        <span class="fw-semibold">25</span> Results
                      </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                      <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                        <li class="page-item disabled">
                          <BLink href="#" class="page-link">←</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">1</BLink>
                        </li>
                        <li class="page-item active">
                          <BLink href="#" class="page-link">2</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">3</BLink>
                        </li>
                        <li class="page-item">
                          <BLink href="#" class="page-link">→</BLink>
                        </li>
                      </ul>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>

          <BRow>
            <BCol xl="4">
              <BCard no-body class="card-height-100">
                <BCardHeader class="align-items-center d-flex py-0">
                  <BCardTitle class="mb-0 flex-grow-1"> Store Visits by Source </BCardTitle>
                  <div class="flex-shrink-0">
                    <BDropdown variant="link" class="card-header-dropdown"
                      toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                      aria-haspopup="true" :offset="{ alignmentAxis: -100, crossAxis: 0, mainAxis: 0 }">
                      <template #button-content><span class="text-muted">Report<i
                            class="mdi mdi-chevron-down ms-1"></i></span>
                      </template>
                      <BDropdownItem>Download Report</BDropdownItem>
                      <BDropdownItem>Export</BDropdownItem>
                      <BDropdownItem>Import</BDropdownItem>
                    </BDropdown>
                  </div>
                </BCardHeader>

                <BCardBody>
                  <apexchart class="apex-charts" dir="ltr" height="333" :series="series" :options="chartOptions">
                  </apexchart>
                </BCardBody>
              </BCard>
            </BCol>

            <BCol xl="8">
              <BCard no-body>
                <BCardHeader class="align-items-center d-flex">
                  <BCardTitle class="mb-0 flex-grow-1">Recent Orders</BCardTitle>
                  <div class="flex-shrink-0">
                    <BButton type="button" variant="soft-info" size="sm">
                      <i class="ri-file-list-3-line align-middle"></i> Generate
                      Report
                    </BButton>
                  </div>
                </BCardHeader>

                <BCardBody>
                  <div class="table-responsive table-card">
                    <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                      <thead class="text-muted table-light">
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Vendor</th>
                          <th scope="col">Status</th>
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link href="/ecommerce/order-details" class="fw-medium link-primary">#BM2112
                            </Link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Alex Smith</div>
                            </div>
                          </td>
                          <td>Clothes</td>
                          <td>
                            <span class="text-success">$109.00</span>
                          </td>
                          <td>Zoetic Fashion</td>
                          <td>
                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Paid</BBadge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              5.0<span class="text-muted fs-11 ms-1">(61 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/ecommerce/order-details" class="fw-medium link-primary">#BM2111
                            </Link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Jansh Brown</div>
                            </div>
                          </td>
                          <td>Kitchen Storage</td>
                          <td>
                            <span class="text-success">$149.00</span>
                          </td>
                          <td>Micro Design</td>
                          <td>
                            <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning">Pending</BBadge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.5<span class="text-muted fs-11 ms-1">(61 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/ecommerce/order-details" class="fw-medium link-primary">#BM2109
                            </Link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Ayaan Bowen</div>
                            </div>
                          </td>
                          <td>Bike Accessories</td>
                          <td>
                            <span class="text-success">$215.00</span>
                          </td>
                          <td>Nesta Technologies</td>
                          <td>
                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Paid</BBadge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.9<span class="text-muted fs-11 ms-1">(89 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/ecommerce/order-details" class="fw-medium link-primary">#BM2108
                            </Link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/users/avatar-4.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Prezy Mark</div>
                            </div>
                          </td>
                          <td>Furniture</td>
                          <td>
                            <span class="text-success">$199.00</span>
                          </td>
                          <td>Syntyce Solutions</td>
                          <td>
                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Unpaid</BBadge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.3<span class="text-muted fs-11 ms-1">(47 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/ecommerce/order-details" class="fw-medium link-primary">#BM2107
                            </Link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Vihan Hudda</div>
                            </div>
                          </td>
                          <td>Bags and Wallets</td>
                          <td>
                            <span class="text-success">$330.00</span>
                          </td>
                          <td>iTest Factory</td>
                          <td>
                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Paid</BBadge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.7<span class="text-muted fs-11 ms-1">(161 votes)</span>
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </div>
      </BCol>

      <div class="col-auto layout-rightside-col d-block">
        <div class="overlay" @click="hiderightcolumn"></div>
        <div class="layout-rightside">
          <BCard no-body class="h-100 rounded-0">
            <BCardBody class="p-0">
              <div class="p-3">
                <h6 class="text-muted mb-0 text-uppercase fw-semibold">
                  Recent Activity
                </h6>
              </div>
              <SimpleBar data-simplebar style="max-height: 410px" class="p-3 pt-0">
                <div class="acitivity-timeline acitivity-main">
                  <div class="acitivity-item d-flex">
                    <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div class="avatar-title bg-success-subtle text-success rounded-circle">
                        <i class="ri-shopping-cart-2-line"></i>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">Purchase by James Price</h6>
                      <p class="text-muted mb-1">
                        Product noise evolve smartwatch
                      </p>
                      <small class="mb-0 text-muted">02:14 PM Today</small>
                    </div>
                  </div>
                  <div class="acitivity-item py-3 d-flex">
                    <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                        <i class="ri-stack-fill"></i>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">
                        Added new
                        <span class="fw-semibold">style collection</span>
                      </h6>
                      <p class="text-muted mb-1">By Nesta Technologies</p>
                      <div class="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                        <Link href="/ecommerce/product-details" class="bg-light rounded p-1">
                          <img src="@assets/images/products/img-8.png" alt="" class="img-fluid d-block" />
                        </Link>
                        <Link href="/ecommerce/product-details" class="bg-light rounded p-1">
                          <img src="@assets/images/products/img-2.png" alt="" class="img-fluid d-block" />
                        </Link>
                        <Link href="/ecommerce/product-details" class="bg-light rounded p-1">
                          <img src="@assets/images/products/img-10.png" alt="" class="img-fluid d-block" />
                        </Link>
                      </div>
                      <p class="mb-0 text-muted">
                        <small>9:47 PM Yesterday</small>
                      </p>
                    </div>
                  </div>
                  <div class="acitivity-item py-3 d-flex">
                    <div class="flex-shrink-0">
                      <img src="@assets/images/users/avatar-2.jpg" alt=""
                        class="avatar-xs rounded-circle acitivity-avatar" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">
                        Natasha Carey have liked the products
                      </h6>
                      <p class="text-muted mb-1">
                        Allow users to like products in your WooCommerce store.
                      </p>
                      <small class="mb-0 text-muted">25 Dec, 2021</small>
                    </div>
                  </div>
                  <div class="acitivity-item py-3 d-flex">
                    <div class="flex-shrink-0">
                      <div class="avatar-xs acitivity-avatar">
                        <div class="avatar-title rounded-circle bg-secondary">
                          <i class="mdi mdi-sale fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">
                        Today offers by
                        <Link href="/ecommerce/seller-details" class="link-secondary">Digitech Galaxy</Link>
                      </h6>
                      <p class="text-muted mb-2">
                        Offer is valid on orders of Rs.500 Or above for selected
                        products only.
                      </p>
                      <small class="mb-0 text-muted">12 Dec, 2021</small>
                    </div>
                  </div>
                  <div class="acitivity-item py-3 d-flex">
                    <div class="flex-shrink-0">
                      <div class="avatar-xs acitivity-avatar">
                        <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                          <i class="ri-bookmark-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">Favorite Product</h6>
                      <p class="text-muted mb-2">
                        Esther James have Favorite product.
                      </p>
                      <small class="mb-0 text-muted">25 Nov, 2021</small>
                    </div>
                  </div>
                  <div class="acitivity-item py-3 d-flex">
                    <div class="flex-shrink-0">
                      <div class="avatar-xs acitivity-avatar">
                        <div class="avatar-title rounded-circle bg-secondary">
                          <i class="mdi mdi-sale fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">
                        Flash sale starting
                        <span class="text-primary">Tomorrow.</span>
                      </h6>
                      <p class="text-muted mb-0">
                        Flash sale by
                        <BLink href="javascript:void(0);" class="link-secondary fw-medium">Zoetic Fashion</BLink>
                      </p>
                      <small class="mb-0 text-muted">22 Oct, 2021</small>
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
                      <h6 class="mb-1 lh-base">Monthly sales report</h6>
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
                      <img src="@assets/images/users/avatar-3.jpg" alt=""
                        class="avatar-xs rounded-circle acitivity-avatar" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="mb-1 lh-base">Frank Hook Commented</h6>
                      <p class="text-muted mb-2 fst-italic">
                        " A product that has reviews is more likable to be sold
                        than a product. "
                      </p>
                      <small class="mb-0 text-muted">26 Aug, 2021</small>
                    </div>
                  </div>
                </div>
              </SimpleBar>

              <div class="p-3 mt-2">
                <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                  Top 10 Categories
                </h6>

                <ol class="ps-3 text-muted">
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Mobile & Accessories
                      <span class="float-end">(10,294)</span>
                    </BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Desktop <span class="float-end">(6,256)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Electronics <span class="float-end">(3,479)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Home & Furniture
                      <span class="float-end">(2,275)</span>
                    </BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Grocery <span class="float-end">(1,950)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Fashion <span class="float-end">(1,582)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Appliances <span class="float-end">(1,037)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Beauty, Toys & More
                      <span class="float-end">(924)</span>
                    </BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Food & Drinks <span class="float-end">(701)</span></BLink>
                  </li>
                  <li class="py-1">
                    <BLink href="#" class="text-muted">Toys & Games <span class="float-end">(239)</span></BLink>
                  </li>
                </ol>
                <div class="mt-3 text-center">
                  <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">View all Categories
                  </BLink>
                </div>
              </div>
              <div class="p-3">
                <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                  Products Reviews
                </h6>
                <div>
                  <swiper class="vertical-swiper" :slidesPerView="2" :spaceBetween="10" :mousewheel="true" :loop="true"
                    :direction="'vertical'" :modules="[Autoplay, Mousewheel]"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }" style="height: 250px">
                    <swiper-slide>
                      <div class="swiper-slide">
                        <BCard no-body class="border border-dashed shadow-none">
                          <BCardBody>
                            <div class="d-flex">
                              <div class="flex-shrink-0 avatar-sm">
                                <div class="avatar-title bg-light rounded">
                                  <img src="@assets/images/companies/img-1.png" alt="" height="30" />
                                </div>
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <div>
                                  <p class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                    " Great product and looks great, lots of
                                    features. "
                                  </p>
                                  <div class="fs-11 align-middle text-warning">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                  </div>
                                </div>
                                <div class="text-end mb-0 text-muted">
                                  - by
                                  <cite title="Source Title">Force Medicines</cite>
                                </div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="swiper-slide">
                        <BCard no-body class="border border-dashed shadow-none">
                          <BCardBody>
                            <div class="d-flex">
                              <div class="flex-shrink-0">
                                <img src="@assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded" />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <div>
                                  <p class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                    " Amazing template, very easy to understand
                                    and manipulate. "
                                  </p>
                                  <div class="fs-11 align-middle text-warning">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-half-fill"></i>
                                  </div>
                                </div>
                                <div class="text-end mb-0 text-muted">
                                  - by
                                  <cite title="Source Title">Henry Baird</cite>
                                </div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="swiper-slide">
                        <BCard no-body class="border border-dashed shadow-none">
                          <BCardBody>
                            <div class="d-flex">
                              <div class="flex-shrink-0 avatar-sm">
                                <div class="avatar-title bg-light rounded">
                                  <img src="@assets/images/companies/img-8.png" alt="" height="30" />
                                </div>
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <div>
                                  <p class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                    "Very beautiful product and Very helpful
                                    customer service."
                                  </p>
                                  <div class="fs-11 align-middle text-warning">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-line"></i>
                                    <i class="ri-star-line"></i>
                                  </div>
                                </div>
                                <div class="text-end mb-0 text-muted">
                                  - by
                                  <cite title="Source Title">Zoetic Fashion</cite>
                                </div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="swiper-slide">
                        <BCard no-body class="border border-dashed shadow-none">
                          <BCardBody>
                            <div class="d-flex">
                              <div class="flex-shrink-0">
                                <img src="@assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded" />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <div>
                                  <p class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                    " The product is very beautiful. I like it.
                                    "
                                  </p>
                                  <div class="fs-11 align-middle text-warning">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-half-fill"></i>
                                    <i class="ri-star-line"></i>
                                  </div>
                                </div>
                                <div class="text-end mb-0 text-muted">
                                  - by
                                  <cite title="Source Title">Nancy Martino</cite>
                                </div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>

              <div class="p-3">
                <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                  Customer Reviews
                </h6>
                <div class="bg-light px-3 py-2 rounded-2 mb-2">
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1">
                      <div class="fs-16 align-middle text-warning">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <h6 class="mb-0">4.5 out of 5</h6>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-muted">
                    Total <span class="fw-medium">5.50k</span> reviews
                  </div>
                </div>

                <div class="mt-3">
                  <BRow class="align-items-center g-2">
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0">5 star</h6>
                      </div>
                    </div>
                    <BCol>
                      <div class="p-1">
                        <BProgress variant="success" class="animated-progess progress-sm" :value="50.16" />
                      </div>
                    </BCol>
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0 text-muted">2758</h6>
                      </div>
                    </div>
                  </BRow>

                  <BRow class="align-items-center g-2">
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0">4 star</h6>
                      </div>
                    </div>
                    <BCol>
                      <div class="p-1">
                        <BProgress variant="success" class="animated-progess progress-sm" :value="29.32" />
                      </div>
                    </BCol>
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0 text-muted">1063</h6>
                      </div>
                    </div>
                  </BRow>

                  <BRow class="align-items-center g-2">
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0">3 star</h6>
                      </div>
                    </div>
                    <BCol>
                      <div class="p-1">
                        <BProgress variant="warning" class="animated-progess progress-sm" :value="18.12" />
                      </div>
                    </BCol>
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0 text-muted">997</h6>
                      </div>
                    </div>
                  </BRow>

                  <BRow class="align-items-center g-2">
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0">2 star</h6>
                      </div>
                    </div>
                    <BCol>
                      <div class="p-1">
                        <BProgress variant="success" class="animated-progess progress-sm" :value="4.98" />
                      </div>
                    </BCol>

                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0 text-muted">227</h6>
                      </div>
                    </div>
                  </BRow>

                  <BRow class="align-items-center g-2">
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0">1 star</h6>
                      </div>
                    </div>
                    <BCol>
                      <div class="p-1">
                        <BProgress variant="danger" class="animated-progess progress-sm" :value="7.42" />
                      </div>
                    </BCol>
                    <div class="col-auto">
                      <div class="p-1">
                        <h6 class="mb-0 text-muted">408</h6>
                      </div>
                    </div>
                  </BRow>
                </div>
              </div>

              <BCard no-body class="sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3">
                <BCardBody>
                  <img src="@assets/images/giftbox.png" alt="" />
                  <div class="mt-4">
                    <h5>Invite New Seller</h5>
                    <p class="text-muted lh-base">
                      Refer a new seller to us and earn $100 per refer.
                    </p>
                    <BButton type="button" variant="primary" pill class="btn-label">
                      <i class="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"></i>
                      Invite Now
                    </BButton>
                  </div>
                </BCardBody>
              </BCard>
            </BCardBody>
          </BCard>
        </div>
      </div>
    </BRow>
  </Layout>
</template>

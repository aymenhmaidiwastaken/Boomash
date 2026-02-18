<script>
import { Link } from '@inertiajs/vue3';
import NavBar from "@/Components/nav-bar.vue";
import RightBar from "@/Components/right-bar.vue";
import Footer from "@/Components/footer.vue";

export default {
  mounted() {
    this.initActiveMenu();
  },
  methods: {
    initActiveMenu(ele) {
      setTimeout(() => {
        var currentPath = window.location.pathname;
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + currentPath + '"]');

          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 1000);
    },
  },
  components: {
    NavBar,
    RightBar,
    Footer,
    Link
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <NavBar />
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <Link href="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="@assets/images/logo-sm.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@assets/images/logo-dark.svg" alt="" height="17" />
          </span>
          </Link>
          <!-- Light Logo-->
          <Link href="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="@assets/images/logo-sm.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@assets/images/logo-light.svg" alt="" height="17" />
          </span>
          </Link>
          <BButton size="sm" class="p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
          </BButton>
        </div>
        <div id="scrollbar">
          <BContainer fluid>
            <ul class="navbar-nav h-100" id="navbar-nav">
              <li class="menu-title">
                <span data-key="t-menu"> {{ $t("t-menu") }}</span>
              </li>
              <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarDashboards">
                  <i class="ri-dashboard-2-line"></i>
                  <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarDashboards">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/dashboard/analytics" class="nav-link custom-abc" data-key="t-analytics">
                      {{ $t("t-analytics") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/crm" class="nav-link" data-key="t-crm">
                      {{ $t("t-crm") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/" class="nav-link" data-key="t-ecommerce">
                      {{ $t("t-ecommerce") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/crypto" class="nav-link" data-key="t-crypto">
                      {{ $t("t-crypto") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/projects" class="nav-link" data-key="t-projects">
                      {{ $t("t-projects") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/nft" class="nav-link" data-key="t-nft">
                      {{ $t("t-nft") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/job" class="nav-link" data-key="t-job">
                      {{ $t("t-job") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/dashboard/blog" class="nav-link" data-key="t-job">
                      {{ $t("t-blog") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- end Dashboard Menu -->
              <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarApps">
                  <i class="ri-apps-2-line"></i>
                  <span data-key="t-apps"> {{ $t("t-apps") }}</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarApps">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarCalendar" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarCalendar" data-key="t-calendar">
                        {{ $t("t-calendar") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarCalendar">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/calendar" class="nav-link" data-key="t-calendar"> {{
                              $t("t-main-calender") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/month-grid" class="nav-link" data-key="t-month-grid"> {{ $t("t-month-grid")
                            }} </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <Link href="/chat" class="nav-link" data-key="t-chat">
                      {{ $t("t-chat") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebaremail" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebaremail" data-key="t-projects">
                        {{ $t("t-email") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebaremail">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/mailbox" class="nav-link" data-key="t-mailbox">
                            {{ $t("t-mailbox") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#sidebarsubemail" data-bs-toggle="collapse" role="button"
                              aria-expanded="false" aria-controls="sidebarsubemail" data-key="t-projects">
                              {{ $t("t-email-templates") }}
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarsubemail">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <Link href="/email/email-basic" class="nav-link" data-key="t-products">
                                  {{ $t("t-basic-action") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/email/email-ecommerce" class="nav-link" data-key="t-products">
                                  {{ $t("t-ecommerce-action") }}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarEcommerce" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarEcommerce" data-key="t-ecommerce">
                        {{ $t("t-ecommerce") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarEcommerce">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/ecommerce/products" class="nav-link" data-key="t-products">
                            {{ $t("t-products") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/product-details" class="nav-link" data-key="t-product-Details">
                            {{ $t("t-product-Details") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/add-product" class="nav-link" data-key="t-create-product">
                            {{ $t("t-create-product") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/orders" class="nav-link" data-key="t-orders">
                            {{ $t("t-orders") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/order-details" class="nav-link" data-key="t-order-details">
                            {{ $t("t-order-details") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/customers" class="nav-link" data-key="t-customers">
                            {{ $t("t-customers") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/shopping-cart" class="nav-link" data-key="t-shopping-cart">
                            {{ $t("t-shopping-cart") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/checkout" class="nav-link" data-key="t-checkout">
                            {{ $t("t-checkout") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/sellers" class="nav-link" data-key="t-sellers">
                            {{ $t("t-sellers") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/ecommerce/seller-details" class="nav-link" data-key="t-sellers-details">
                            {{ $t("t-sellers-details") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarProjects" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarProjects" data-key="t-projects">
                        {{ $t("t-projects") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarProjects">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/apps/projects-list" class="nav-link" data-key="t-list">
                            {{ $t("t-list") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/projects-overview" class="nav-link" data-key="t-overview">
                            {{ $t("t-overview") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/projects-create" class="nav-link" data-key="t-create-project">
                            {{ $t("t-create-project") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarTasks" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarTasks" data-key="t-tasks">
                        {{ $t("t-tasks") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarTasks">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/apps/tasks-kanban" class="nav-link" data-key="t-kanbanboard">
                            {{ $t("t-kanbanboard") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/tasks-list-view" class="nav-link" data-key="t-list-view">
                            {{ $t("t-list-view") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/tasks-details" class="nav-link" data-key="t-task-details">
                            {{ $t("t-task-details") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarCRM" data-bs-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarCRM" data-key="t-crm">
                        {{ $t("t-crm") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarCRM">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/apps/crm-contacts" class="nav-link" data-key="t-contacts">
                            {{ $t("t-contacts") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/crm-companies" class="nav-link" data-key="t-companies">
                            {{ $t("t-companies") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/crm-deals" class="nav-link" data-key="t-deals">
                            {{ $t("t-deals") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/crm-leads" class="nav-link" data-key="t-leads">
                            {{ $t("t-leads") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarCrypto" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarCrypto" data-key="t-crypto">
                        {{ $t("t-crypto") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarCrypto">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/crypto/transactions" class="nav-link" data-key="t-transactions">
                            {{ $t("t-transactions") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/crypto/buy-sell" class="nav-link" data-key="t-buy-sell">
                            {{ $t("t-buy-sell") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/crypto/orders" class="nav-link" data-key="t-orders">
                            {{ $t("t-orders") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/crypto/wallet" class="nav-link" data-key="t-my-wallet">
                            {{ $t("t-my-wallet") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/crypto/ico" class="nav-link" data-key="t-ico-list">
                            {{ $t("t-ico-list") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/crypto/kyc" class="nav-link" data-key="t-kyc-application">
                            {{ $t("t-kyc-application") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarInvoices" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarInvoices" data-key="t-invoices">
                        {{ $t("t-invoices") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarInvoices">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/invoices/list" class="nav-link" data-key="t-list-view">
                            {{ $t("t-list-view") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/invoices/detail" class="nav-link" data-key="t-details">
                            {{ $t("t-details") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/invoices/create" class="nav-link" data-key="t-create-invoice">
                            {{ $t("t-create-invoice") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarTickets" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarTickets" data-key="t-supprt-tickets">
                        {{ $t("t-supprt-tickets") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarTickets">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/apps/tickets-list" class="nav-link" data-key="t-list-view">
                            {{ $t("t-list-view") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/tickets-details" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-ticket-details") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#nftmarketplace" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="nftmarketplace" data-key="t-supprt-tickets">
                        {{ $t("t-nft-marketplace") }}
                      </a>
                      <div class="collapse menu-dropdown" id="nftmarketplace">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/apps/nft-marketplace" class="nav-link" data-key="t-list-view">
                            {{ $t("t-marketplace") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-explore" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-explore-now") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-auction" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-live-auction") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-item-detail" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-item-details") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-collection" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-collections") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-creators" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-creators") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-ranking" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-ranking") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-wallet" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-wallet-connect") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/apps/nft-create" class="nav-link" data-key="t-ticket-details">
                            {{ $t("t-create-nft") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <Link href="/apps-file-manager" class="nav-link" data-key="t-file-manager">
                      {{ $t("t-file-manager") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/apps-todo" class="nav-link" data-key="t-to-do">
                      {{ $t("t-to-do") }}
                      </Link>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarjobs" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarjobs" data-key="t-jobs">
                        {{ $t("t-jobs") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarjobs">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/jobs/statistics" class="nav-link" data-key="t-statistics">
                            {{ $t("t-statistics") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#sidebarjoblists" data-bs-toggle="collapse" role="button"
                              aria-expanded="false" aria-controls="sidebarjoblists" data-key="t-projects">
                              {{ $t("t-job-lists") }}
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarjoblists">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <Link href="/jobs/lists" class="nav-link" data-key="t-list">
                                  {{ $t("t-list") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/jobs/grid-lists" class="nav-link" data-key="t-grid">
                                  {{ $t("t-grid") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/jobs/details" class="nav-link" data-key="t-overview">
                                  {{ $t("t-overview") }}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#sidebarcandidatelists" data-bs-toggle="collapse" role="button"
                              aria-expanded="false" aria-controls="sidebarcandidatelists" data-key="t-projects">
                              {{ $t("t-candidate-lists") }}
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarcandidatelists">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <Link href="/jobs/candidate-lists" class="nav-link" data-key="t-list">
                                  {{ $t("t-list-view") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/jobs/candidate-grid" class="nav-link" data-key="t-grid">
                                  {{ $t("t-grid-view") }}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="nav-item">
                            <Link href="/jobs/application" class="nav-link" data-key="t-application">
                            {{ $t("t-application") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/jobs/new" class="nav-link" data-key="t-new">
                            {{ $t("t-new-job") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/jobs/companies-list" class="nav-link" data-key="t-companies-list">
                            {{ $t("t-companies-list") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/jobs/categories" class="nav-link" data-key="t-categories">
                            {{ $t("t-job-categories") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <Link href="/apps-api-key" class="nav-link" data-key="t-api-key">
                      {{ $t("t-api-key") }}
                      </Link>
                    </li>

                  </ul>
                </div>
              </li>

              <li class="menu-title">
                <i class="ri-more-fill"></i>
                <span data-key="t-pages">{{ $t("t-pages") }}</span>
              </li>

              <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarAuth">
                  <i class="ri-account-circle-line"></i>
                  <span data-key="t-authentication">{{
                    $t("t-authentication")
                  }}</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarAuth">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarSignIn" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin">{{ $t("t-signin") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarSignIn">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/signin-basic" class="nav-link" data-key="t-basic">{{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/signin-cover" class="nav-link" data-key="t-cover">{{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarSignUp" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarSignUp" data-key="t-signup">{{ $t("t-signup") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarSignUp">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/signup-basic" class="nav-link" data-key="t-basic">{{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/signup-cover" class="nav-link" data-key="t-cover">{{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarResetPass" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarResetPass" data-key="t-password-reset">
                        {{ $t("t-password-reset") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarResetPass">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/reset-pwd-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/reset-pwd-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarcreatepass" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarcreatepass" data-key="t-password-reset">
                        {{ $t("t-password-create") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarcreatepass">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/create-pwd-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/create-pwd-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarLockScreen" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarLockScreen" data-key="t-lock-screen">
                        {{ $t("t-lock-screen") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarLockScreen">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/lockscreen-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/lockscreen-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarLogout" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarLogout" data-key="t-logout">
                        {{ $t("t-logout") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarLogout">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/logout-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/logout-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarSuccessMsg" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarSuccessMsg" data-key="t-success-message">
                        {{ $t("t-success-message") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarSuccessMsg">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/success-msg-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/success-msg-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarTwoStep" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarTwoStep" data-key="t-two-step-verification">
                        {{ $t("t-two-step-verification") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarTwoStep">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/twostep-basic" class="nav-link" data-key="t-basic">
                            {{ $t("t-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/twostep-cover" class="nav-link" data-key="t-cover">
                            {{ $t("t-cover") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarErrors" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarErrors" data-key="t-errors">
                        {{ $t("t-errors") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarErrors">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/auth/404-basic" class="nav-link" data-key="t-404-basic">
                            {{ $t("t-404-basic") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/404-cover" class="nav-link" data-key="t-404-cover">
                            {{ $t("t-404-cover") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/404" class="nav-link" data-key="t-404-alt">
                            {{ $t("t-404-alt") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/500" class="nav-link" data-key="t-500">
                            {{ $t("t-500") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/auth/ofline" class="nav-link" data-key="t-ofline-page">
                            {{ $t("t-offline-page") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarPages" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarPages">
                  <i class="ri-pages-line"></i>
                  <span data-key="t-pages">{{ $t("t-pages") }}</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarPages">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/pages/starter" class="nav-link" data-key="t-starter">{{ $t("t-starter") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarProfile" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarProfile" data-key="t-profile">{{ $t("t-profile") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarProfile">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/pages/profile" class="nav-link" data-key="t-simple-page">
                            {{ $t("t-simple-page") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/pages/profile-setting" class="nav-link" data-key="t-settings">
                            {{ $t("t-settings") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/team" class="nav-link" data-key="t-team">
                      {{ $t("t-team") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/timeline" class="nav-link" data-key="t-timeline">
                      {{ $t("t-timeline") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/faqs" class="nav-link" data-key="t-faqs">
                      {{ $t("t-faqs") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/pricing" class="nav-link" data-key="t-pricing">
                      {{ $t("t-pricing") }}
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link href="/pages/maintenance" class="nav-link" data-key="t-maintenance">
                      {{ $t("t-maintenance") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/coming-soon" class="nav-link" data-key="t-coming-soon">
                      {{ $t("t-coming-soon") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/sitemap" class="nav-link" data-key="t-sitemap">
                      {{ $t("t-sitemap") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/search-results" class="nav-link" data-key="t-search-results">
                      {{ $t("t-search-results") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/privacy-policy" class="nav-link" data-key="t-privacy-policy">
                      {{ $t("t-privacy-policy") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/pages/term-conditions" class="nav-link" data-key="t-term-conditions">
                      {{ $t("t-term-conditions") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sidebarBlogs" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarBlogs" data-key="t-blogs">{{ $t("t-blogs") }}
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarBlogs">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/pages/blogs/list-view" class="nav-link" data-key="t-list-view">
                              {{ $t("t-list-view") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/pages/blogs/grid-view" class="nav-link" data-key="t-grid-view">
                              {{ $t("t-grid-view") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/pages/blogs/overview" class="nav-link" data-key="t-overview">
                              {{ $t("t-overview") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarlanding" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarlanding" data-key="t-projects">
                  <i class="ri-rocket-line"></i>
                  {{ $t("t-landing") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarlanding">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link menu-link" target="_blank" href="/landing">
                        <span data-key="t-landing">{{ $t("t-one-page") }}</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link menu-link" target="_blank" href="/nft-landing">
                        <span data-key="t-landing">{{ $t("t-nft-landing") }}</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link menu-link" target="_blank" href="/job-landing">
                        <span data-key="t-landing">{{ $t("t-job") }}</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>

              <li class="menu-title">
                <i class="ri-more-fill"></i>
                <span data-key="t-components">{{ $t("t-components") }}</span>
              </li>

              <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarUI">
                  <i class="ri-pencil-ruler-2-line"></i>
                  <span data-key="t-base-ui">{{ $t("t-base-ui") }}</span>
                </a>
                <div class="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                  <BRow>
                    <BCol lg="4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <Link href="/ui/alerts" class="nav-link" data-key="t-alerts">{{ $t("t-alerts") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/badges" class="nav-link" data-key="t-badges">{{ $t("t-badges") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/buttons" class="nav-link" data-key="t-buttons">{{ $t("t-buttons") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/colors" class="nav-link" data-key="t-colors">{{ $t("t-colors") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/cards" class="nav-link" data-key="t-cards">{{ $t("t-cards") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/carousel" class="nav-link" data-key="t-carousel">{{ $t("t-carousel") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/dropdowns" class="nav-link" data-key="t-dropdowns">
                          {{ $t("t-dropdowns") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/grid" class="nav-link" data-key="t-grid">{{ $t("t-grid") }}</Link>
                        </li>
                      </ul>
                    </BCol>
                    <BCol lg="4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <Link href="/ui/images" class="nav-link" data-key="t-images">{{ $t("t-images") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/tabs" class="nav-link" data-key="t-tabs">{{ $t("t-tabs") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/accordions" class="nav-link" data-key="t-accordion-collapse">
                          {{ $t("t-accordion-collapse") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/modals" class="nav-link" data-key="t-modals">{{ $t("t-modals") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/offcanvas" class="nav-link" data-key="t-offcanvas">
                          {{ $t("t-offcanvas") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/placeholders" class="nav-link" data-key="t-placeholders">
                          {{ $t("t-placeholders") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/progress" class="nav-link" data-key="t-progress">{{ $t("t-progress") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/notifications" class="nav-link" data-key="t-notifications">
                          {{ $t("t-notifications") }}</Link>
                        </li>
                      </ul>
                    </BCol>
                    <BCol lg="4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <Link href="/ui/media" class="nav-link" data-key="t-media-object">
                          {{ $t("t-media-object") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/embed-video" class="nav-link" data-key="t-embed-video">
                          {{ $t("t-embed-video") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/typography" class="nav-link" data-key="t-typography">
                          {{ $t("t-typography") }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/lists" class="nav-link" data-key="t-lists">{{ $t("t-lists") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/links" class="nav-link" data-key="t-links">{{ $t("t-links")
                          }}</Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/general" class="nav-link" data-key="t-general">{{ $t("t-general") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/ribbons" class="nav-link" data-key="t-ribbons">{{ $t("t-ribbons") }}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link href="/ui/utilities" class="nav-link" data-key="t-utilities">
                          {{ $t("t-utilities") }}</Link>
                        </li>
                      </ul>
                    </BCol>
                  </BRow>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarMore">
                  <i class="ri-briefcase-2-line"></i> More
                </a>
                <div class="collapse menu-dropdown show" id="sidebarMore">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarAdvanceUI">
                        <i class="ri-stack-line"></i>
                        <span data-key="t-advance-ui">{{ $t("t-advance-ui") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/advance-ui/sweetalerts" class="nav-link" data-key="t-sweet-alerts">
                            {{ $t("t-sweet-alerts") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/advance-ui/scrollbar" class="nav-link" data-key="t-scrollbar">
                            {{ $t("t-scrollbar") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/advance-ui/animation" class="nav-link" data-key="t-animation">
                            {{ $t("t-animation") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/advance-ui/swiper" class="nav-link" data-key="t-swiper-slider">
                            {{ $t("t-swiper-slider") }}</Link>
                          </li>

                          <li class="nav-item">
                            <Link href="/advance-ui/highlight" class="nav-link" data-key="t-highlight">
                            {{ $t("t-highlight") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/advance-ui/scrollspy" class="nav-link" data-key="t-scrollSpy">
                            {{ $t("t-scrollSpy") }}</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <Link class="nav-link menu-link" href="/widgets">
                      <i class="ri-honour-line"></i>
                      <span data-key="t-widgets">{{ $t("t-widgets") }}</span>
                      </Link>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarForms" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarForms">
                        <i class="ri-file-list-3-line"></i>
                        <span data-key="t-forms">{{ $t("t-forms") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarForms">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/form/elements" class="nav-link" data-key="t-basic-elements">
                            {{ $t("t-basic-elements") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/select" class="nav-link" data-key="t-form-select">
                            {{ $t("t-form-select") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/checkboxs-radios" class="nav-link" data-key="t-checkboxs-radios">
                            {{ $t("t-checkboxs-radios") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/pickers" class="nav-link" data-key="t-pickers">
                            {{ $t("t-pickers") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/masks" class="nav-link" data-key="t-input-masks">
                            {{ $t("t-input-masks") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/advanced" class="nav-link" data-key="t-advanced">
                            {{ $t("t-advanced") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/range-sliders" class="nav-link" data-key="t-range-slider">
                            {{ $t("t-range-slider") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/validation" class="nav-link" data-key="t-validation">
                            {{ $t("t-validation") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/wizard" class="nav-link" data-key="t-wizard">{{ $t("t-wizard") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/editors" class="nav-link" data-key="t-editors">{{ $t("t-editors") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/file-uploads" class="nav-link" data-key="t-file-uploads">
                            {{ $t("t-file-uploads") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/form/layouts" class="nav-link" data-key="t-form-layouts">
                            {{ $t("t-form-layouts") }}</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarTables" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarTables">
                        <i class="ri-layout-grid-line"></i>
                        <span data-key="t-tables">{{ $t("t-tables") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarTables">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/tables/basic" class="nav-link" data-key="t-basic-tables">
                            {{ $t("t-basic-tables") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/tables/gridjs" class="nav-link" data-key="t-grid-js">{{ $t("t-grid-js") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarCharts">
                        <i class="ri-pie-chart-line"></i>
                        <span data-key="t-charts">{{ $t("t-charts") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarCharts">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a class="nav-link" href="#sidebarApexcharts" data-bs-toggle="collapse" role="button"
                              aria-expanded="false" aria-controls="sidebarApexcharts" data-key="t-apexcharts">
                              {{ $t("t-apexcharts") }}
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarApexcharts">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <Link href="/charts/apex-line" class="nav-link" data-key="t-line">
                                  {{ $t("t-line") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-area" class="nav-link" data-key="t-area">
                                  {{ $t("t-area") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-column" class="nav-link" data-key="t-column">
                                  {{ $t("t-column") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-bar" class="nav-link" data-key="t-bar">
                                  {{ $t("t-bar") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-mixed" class="nav-link" data-key="t-mixed">
                                  {{ $t("t-mixed") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-range-area" class="nav-link" data-key="t-range-area">{{
                                    $t("t-range-area") }}</Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-funnel" class="nav-link" data-key="t-funnel">{{
                                    $t("t-funnel") }}</Link>
                                </li>

                                <li class="nav-item">
                                  <Link href="/charts/apex-candlestick" class="nav-link" data-key="t-candlstick">
                                  {{ $t("t-candlstick") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-boxplot" class="nav-link" data-key="t-boxplot">
                                  {{ $t("t-boxplot") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-bubble" class="nav-link" data-key="t-bubble">
                                  {{ $t("t-bubble") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-scatter" class="nav-link" data-key="t-scatter">
                                  {{ $t("t-scatter") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-heatmap" class="nav-link" data-key="t-heatmap">
                                  {{ $t("t-heatmap") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-treemap" class="nav-link" data-key="t-treemap">
                                  {{ $t("t-treemap") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-pie" class="nav-link" data-key="t-pie">
                                  {{ $t("t-pie") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-radialbar" class="nav-link" data-key="t-radialbar">
                                  {{ $t("t-radialbar") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-radar" class="nav-link" data-key="t-radar">
                                  {{ $t("t-radar") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-polararea" class="nav-link" data-key="t-polar-area">
                                  {{ $t("t-polar-area") }}
                                  </Link>
                                </li>
                                <li class="nav-item">
                                  <Link href="/charts/apex-slope" class="nav-link" data-key="t-slope">
                                    {{ $t("t-slope") }}</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="nav-item">
                            <Link href="/charts/chartjs" class="nav-link" data-key="t-chartjs">
                            {{ $t("t-chartjs") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/charts/echart" class="nav-link" data-key="t-echarts">{{ $t("t-echarts") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarIcons">
                        <i class="ri-compasses-2-line"></i>
                        <span data-key="t-icons">{{ $t("t-icons") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarIcons">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <Link href="/icons/remix" class="nav-link" data-key="t-remix">{{ $t("t-remix") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/icons/boxicons" class="nav-link" data-key="t-boxicons">
                            {{ $t("t-boxicons") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/icons/materialdesign" class="nav-link" data-key="t-material-design">
                            {{ $t("t-material-design") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/icons/lineawesome" class="nav-link" data-key="t-line-awesome">
                            {{ $t("t-line-awesome") }}</Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/icons/feather" class="nav-link" data-key="t-feather">{{ $t("t-feather") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/icons/crypto" class="nav-link" data-key="t-feather">{{ $t("t-crypto-svg")
                            }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarMaps">
                        <i class="ri-map-pin-line"></i>
                        <span data-key="t-maps">{{ $t("t-maps") }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarMaps">
                        <ul class="nav nav-sm flex-column">
                         <li class="nav-item">
                            <Link href="/maps/google" class="nav-link" data-key="t-google">
                            {{ $t("t-google") }}
                            </Link>
                          </li>
                          <li class="nav-item">
                            <Link href="/maps/leaflet" class="nav-link" data-key="t-leaflet">
                            {{ $t("t-leaflet") }}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarMultilevel">
                        <i class="ri-share-line"></i>
                        <span data-key="t-multi-level">{{
                          $t("t-multi-level")
                        }}</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarMultilevel">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a class="nav-link" data-key="t-level-1.1">
                              {{ $t("t-level-1.1") }}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#sidebarAccount" data-bs-toggle="collapse" role="button"
                              aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2">
                              {{ $t("t-level-1.2") }}
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarAccount">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <a class="nav-link" data-key="t-level-2.1">
                                    {{ $t("t-level-2.1") }}
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#sidebarCrm" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2">
                                    {{ $t("t-level-2.2") }}
                                  </a>
                                  <div class="collapse menu-dropdown" id="sidebarCrm">
                                    <ul class="nav nav-sm flex-column">
                                      <li class="nav-item">
                                        <a class="nav-link" data-key="t-level-3.1">
                                          {{ $t("t-level-3.1") }}
                                        </a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" data-key="t-level-3.2">
                                          {{ $t("t-level-3.2") }}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </BContainer>
          <!-- Sidebar -->
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
      </div>
      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="main-content">
        <div class="page-content">
          <!-- Start Content-->
          <BContainer fluid>
            <slot />
          </BContainer>
        </div>
        <Footer />
      </div>
      <RightBar />
    </div>
  </div>
</template>

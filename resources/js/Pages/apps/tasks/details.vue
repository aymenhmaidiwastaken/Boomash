<script>
import { Link, Head } from '@inertiajs/vue3';
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import animationData from "@/Components/widgets/kbtmbyzy.json";
import Lottie from "@/Components/widgets/lottie.vue";
import simplebar from "simplebar-vue"

export default {
    data() {
        return {
            modalShow: false,
            value: null,
            defaultOptions: { animationData: animationData },
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        Multiselect,
        simplebar,
        Link,
    Head
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="Task Details" pageTitle="Tasks" />
        <BRow>
            <BCol xxl="3">
                <BCard no-body>
                    <BCardBody class="text-center">
                        <h6 class="card-title mb-3 flex-grow-1 text-start">Time Tracking</h6>
                        <div class="mb-2">
                            <lottie colors="primary:#405189,secondary:#02a8b5" :options="defaultOptions" :height="90"
                                :width="90" />
                        </div>
                        <h3 class="mb-1">9 hrs 13 min</h3>
                        <h5 class="fs-14 mb-4">Profile Page Structure</h5>
                        <div class="hstack gap-2 justify-content-center">
                            <BButton variant="danger" size="sm"><i class="ri-stop-circle-line align-bottom me-1"></i>
                                Stop</BButton>
                            <BButton variant="success" size="sm"><i class="ri-play-circle-line align-bottom me-1"></i>
                                Start</BButton>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="mb-3">
                    <BCardBody>
                        <div class="mb-4">
                            <Multiselect class="form-control" v-model="value" :close-on-select="true" :searchable="true"
                                :create-option="true" :options="[
                                    { value: '', label: 'Select Task board' },
                                    { value: 'Unassigned', label: 'Unassigned' },
                                    { value: 'To Do', label: 'To Do' },
                                    { value: 'Inprogress', label: 'Inprogress' },
                                    { value: 'In Reviews', label: 'In Reviews' },
                                    { value: 'Completed', label: 'Completed' }
                                ]" />
                        </div>
                        <div class="table-card">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td class="fw-medium">Tasks No</td>
                                        <td>#BM456</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Tasks Title</td>
                                        <td>Profile Page Structure</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Project Name</td>
                                        <td>Boomash - Admin Dashboard</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Priority</td>
                                        <td>
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">High
                                            </BBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Status</td>
                                        <td>
                                            <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary">
                                                Inprogress</BBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Due Date</td>
                                        <td>05 Jan, 2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="mb-3">
                    <BCardBody>
                        <div class="d-flex mb-3">
                            <h6 class="card-title mb-0 flex-grow-1">Assigned To</h6>
                            <div class="flex-shrink-0">
                                <BButton type="button" variant="soft-danger" size="sm" @click="modalShow = !modalShow">
                                    <i class="ri-share-line me-1 align-bottom"></i>
                                    Assigned Member
                                </BButton>
                            </div>
                        </div>
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@assets/images/users/avatar-10.jpg" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">
                                            <Link href="/pages/profile">Tonya Noble</Link>
                                        </h6>
                                        <p class="text-muted mb-0">Full Stack Developer</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BDropdown variant="link"
                                            toggle-class="btn btn-icon btn-sm fs-16 text-muted arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content>
                                                <i class="ri-more-fill fs-17"></i>
                                            </template>
                                            <BDropdownItem><i class="ri-eye-fill me-2 align-bottom text-muted"></i>
                                                View </BDropdownItem>
                                            <BDropdownItem><i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                                Favorite </BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@assets/images/users/avatar-8.jpg" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">
                                            <Link href="/pages/profile">Thomas Taylor</Link>
                                        </h6>
                                        <p class="text-muted mb-0">UI/UX Designer</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BDropdown variant="link"
                                            toggle-class="btn btn-icon btn-sm fs-16 text-muted arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content>
                                                <i class="ri-more-fill fs-17"></i>
                                            </template>
                                            <BDropdownItem><i class="ri-eye-fill me-2 align-bottom text-muted"></i>
                                                View </BDropdownItem>
                                            <BDropdownItem><i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                                Favorite </BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img src="@assets/images/users/avatar-2.jpg" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">
                                            <Link href="/pages/profile">Nancy Martino</Link>
                                        </h6>
                                        <p class="text-muted mb-0">Web Designer</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <BDropdown variant="link"
                                            toggle-class="btn btn-icon btn-sm fs-16 text-muted arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content>
                                                <i class="ri-more-fill fs-17"></i>
                                            </template>
                                            <BDropdownItem><i class="ri-eye-fill me-2 align-bottom text-muted"></i>
                                                View </BDropdownItem>
                                            <BDropdownItem><i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                                Favorite </BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <h5 class="card-title mb-3">Attachments</h5>
                        <div class="vstack gap-2">
                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-folder-zip-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                App pages.zip</BLink>
                                        </h5>
                                        <div>2.2MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill"></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-file-ppt-2-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                Boomash admin.ppt</BLink>
                                        </h5>
                                        <div>2.4MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill "></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-folder-zip-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                Images.zip</BLink>
                                        </h5>
                                        <div>1.2MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill"></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 text-center">
                                <BButton type="button" variant="success">View more</BButton>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="9">
                <BCard no-body>
                    <BCardBody>
                        <div class="text-muted">
                            <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
                            <p>It will be as simple as occidental in fact, it will be Occidental. To an English person,
                                it will seem like simplified English, as a skeptical Cambridge friend of mine told me
                                what Occidental is. The European languages are members of the same family. Their
                                separate existence is a myth. For science, music, sport, etc, Europe uses the same
                                vocabulary. The languages only differ in their grammar, their pronunciation and their
                                most common words.</p>

                            <h6 class="mb-3 fw-semibold text-uppercase">Sub-tasks</h6>
                            <ul class=" ps-3 list-unstyled vstack gap-2">
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="productTask">
                                        <label class="form-check-label" for="productTask">
                                            Product Design, Figma (Software), Prototype
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="dashboardTask" checked>
                                        <label class="form-check-label" for="dashboardTask">
                                            Dashboards : Ecommerce, Analytics, Project,etc.
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="calenderTask">
                                        <label class="form-check-label" for="calenderTask">
                                            Create calendar, chat and email app pages
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="authenticationTask">
                                        <label class="form-check-label" for="authenticationTask">
                                            Add authentication pages
                                        </label>
                                    </div>
                                </li>
                            </ul>

                            <div class="pt-3 border-top border-top-dashed mt-4">
                                <h6 class="mb-3 fw-semibold text-uppercase">Tasks Tags</h6>
                                <div class="hstack flex-wrap gap-2 fs-15">
                                    <BBadge variant="info-subtle" tag="div" class="fw-medium bg-info-subtle text-info">UI/UX
                                    </BBadge>
                                    <BBadge variant="info-subtle" tag="div" class="fw-medium bg-info-subtle text-info">
                                        Dashboard</BBadge>
                                    <BBadge variant="info-subtle" tag="div" class="fw-medium bg-info-subtle text-info">
                                        Design</BBadge>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardBody>
                        <BTabs  nav-class="nav-tabs-custom card-header-tabs border-bottom-0">
                            <BTab active title="Comments (5)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <h5 class="card-title mb-4">Comments</h5>
                                <simplebar data-simplebar style="height: 508px;" class="px-3 mx-n3 mb-2">
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-7.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <Link href="/pages/profile">Joseph Parker</Link> <small
                                                    class="text-muted">20 Dec 2021 - 05:47AM</small>
                                            </h5>
                                            <p class="text-muted">I am getting message from customers that when they
                                                place order always get error message .</p>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@assets/images/users/avatar-10.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <Link href="/pages/profile">Tonya Noble</Link>
                                                        <small class="text-muted">22 Dec 2021 - 02:32PM</small>
                                                    </h5>
                                                    <p class="text-muted">Please be sure to check your Spam mailbox to
                                                        see if your email filters have identified the email from Dell as
                                                        spam.</p>
                                                    <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</BLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-8.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <Link href="/pages/profile">Thomas Taylor</Link> <small
                                                    class="text-muted">24 Dec 2021 - 05:20PM</small>
                                            </h5>
                                            <p class="text-muted">If you have further questions, please contact Customer
                                                Support from the “Action Menu” on your <BLink href="javascript:void(0);"
                                                    class="text-decoration-underline">Online
                                                    Order Support</BLink>.</p>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="@assets/images/users/avatar-10.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <Link href="/pages/profile">Tonya Noble</Link> <small
                                                    class="text-muted">26 min ago</small>
                                            </h5>
                                            <p class="text-muted">Your <BLink href="javascript:void(0)"
                                                    class="text-decoration-underline">Online Order Support</BLink>
                                                provides
                                                you with the most current status of your order. To help manage your
                                                order refer to the “Action Menu” to initiate return, contact Customer
                                                Support and more.</p>
                                            <BRow class="g-2 mb-3">
                                                <BCol lg="1" sm="2" cols="6">
                                                    <img src="@assets/images/small/img-4.jpg" alt=""
                                                        class="img-fluid rounded">
                                                </BCol>
                                                <BCol lg="1" sm="2" cols="6">
                                                    <img src="@assets/images/small/img-5.jpg" alt=""
                                                        class="img-fluid rounded">
                                                </BCol>
                                            </BRow>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@assets/images/users/avatar-6.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <Link href="/pages/profile">Nancy Martino</Link>
                                                        <small class="text-muted">8 sec ago</small>
                                                    </h5>
                                                    <p class="text-muted">Other shipping methods are available at
                                                        checkout if you want your purchase delivered faster.</p>
                                                    <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</BLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </simplebar>
                                <form class="mt-4">
                                    <BRow class="g-3">
                                        <BCol lg="12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Leave a
                                                Comments</label>
                                            <textarea class="form-control bg-light border-light"
                                                id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Enter comments"></textarea>
                                        </BCol>
                                        <BCol cols="12" class="text-end">
                                            <BButton type="button" variant="ghost-secondary" class="btn-icon me-1"><i
                                                    class="ri-attachment-line fs-16"></i></BButton>
                                            <BLink href="javascript:void(0);" class="btn btn-success">Post Comments
                                            </BLink>
                                        </BCol>
                                    </BRow>
                                </form>
                            </BTab>
                            <BTab title=" Attachments File (4)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                        <thead class="table-light text-muted">
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
                                                            <div
                                                                class="avatar-title bg-primary-subtle text-primary rounded fs-20">
                                                                <i class="ri-file-zip-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0)">App
                                                                    pages.zip</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Zip File</td>
                                                <td>2.22 MB</td>
                                                <td>21 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                                                <i class="ri-file-pdf-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Boomash
                                                                    admin.ppt</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>PPT File</td>
                                                <td>2.24 MB</td>
                                                <td>25 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-info-subtle text-info rounded fs-20">
                                                                <i class="ri-folder-line"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Images.zip</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>ZIP File</td>
                                                <td>1.02 MB</td>
                                                <td>28 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                                                <i class="ri-image-2-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Bg-pattern.png
                                                                </BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>PNG File</td>
                                                <td>879 KB</td>
                                                <td>02 Nov 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BTab>
                            <BTab title="Time Entries (9 hrs 13 min)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <h6 class="card-title mb-4 pb-2">Time Entries</h6>
                                <div class="table-responsive table-card">
                                    <table class="table align-middle mb-0">
                                        <thead class="table-light text-muted">
                                            <tr>
                                                <th scope="col">Member</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Timer Idle</th>
                                                <th scope="col">Tasks Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="d-flex align-items-center">
                                                        <img src="@assets/images/users/avatar-8.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <Link href="/pages/profile" class="fw-medium">Thomas
                                                                Taylor</Link>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>02 Jan, 2022</td>
                                                <td>3 hrs 12 min</td>
                                                <td>05 min</td>
                                                <td>Apps Pages</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="@assets/images/users/avatar-10.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <Link href="/pages/profile" class="fw-medium">Tonya
                                                                Noble</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>28 Dec, 2021</td>
                                                <td>1 hrs 35 min</td>
                                                <td>-</td>
                                                <td>Profile Page Design</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="d-flex align-items-center">
                                                        <img src="@assets/images/users/avatar-10.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <Link href="/pages/profile" class="fw-medium">Tonya
                                                                Noble</Link>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>27 Dec, 2021</td>
                                                <td>4 hrs 26 min</td>
                                                <td>03 min</td>
                                                <td>Ecommerce Dashboard</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>


        <BModal v-model="modalShow" hide-footer title="Team Members" body-class="p-4" content-class="border-0"
            header-class="p-3 ps-4 bg-success-subtle" class="v-modal-custom" centered>
            <div class="search-box mb-3">
                <input type="text" class="form-control bg-light border-light" placeholder="Search here...">
                <i class="ri-search-line search-icon"></i>
            </div>

            <div class="mb-4 d-flex align-items-center">
                <div class="me-2">
                    <h5 class="mb-0 fs-13">Members :</h5>
                </div>
                <div class="avatar-group justify-content-center">
                    <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Tonya Noble">
                        <div class="avatar-xs">
                            <img src="@assets/images/users/avatar-10.jpg" alt="" class="rounded-circle img-fluid">
                        </div>
                    </BLink>
                    <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Thomas Taylor">
                        <div class="avatar-xs">
                            <img src="@assets/images/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid">
                        </div>
                    </BLink>
                    <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Nancy Martino">
                        <div class="avatar-xs">
                            <img src="@assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
                        </div>
                    </BLink>
                </div>
            </div>
            <div class="mx-n4 px-4" data-simplebar style="max-height: 225px;">
                <div class="vstack gap-3">
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Nancy Martino
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                                HB
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Henry Baird
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Frank Hook
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Jennifer Carter
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                AC
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Alexis Clarke
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Joseph Parker
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer v-modal-footer">
                <BButton type="button" variant="light" class="w-xs" @click="modalShow = false">
                    Cancel</BButton>
                <BButton type="button" variant="success" class="w-xs">Assigned</BButton>
            </div>
        </BModal>
    </Layout>
</template>

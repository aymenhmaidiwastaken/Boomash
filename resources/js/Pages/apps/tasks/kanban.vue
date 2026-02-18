<script>
import { Link, Head } from '@inertiajs/vue3';
import { VueDraggableNext } from 'vue-draggable-next';
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import Lottie from "@/Components/widgets/lottie.vue";
import animationData from "@/Components/widgets/gsqxdxog.json";
import { unassigned, todo, inprogress, reviews, completed, newData } from "@/common/data";
import simplebar from "simplebar-vue"

export default {
    data() {
        return {
            modalShow: false,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
            },
            date: null,
            date1: null,
            defaultOptions: { animationData: animationData },
            unassigned: unassigned,
            todo: todo,
            inprogress: inprogress,
            reviews: reviews,
            completed: completed,
            newData: newData,
            enabled: true,

            dragging: false
        };
    },
    methods: {
        log(event) {
            console.log(event);
        },

        deleteTask() {
            this.modalShow3 = true;
            document.getElementById("deleteTask");
            addEventListener("click", (e) => {
                document
                    .getElementById("delete-record")
                    .addEventListener("click", () => {
                        if (e.target.closest('.tasks-list')) {
                            e.target.closest('.tasks-list').remove();
                        }
                        this.modalShow3 = false;
                    });
            });
        },

        addNewTask() {
            // var projectName = document.getElementById("projectName").value;
            // var sub_tasks = document.getElementById("sub-tasks").value;
            // var task_description = document.getElementById("task-description").value;
            // var formFile = document.getElementById("formFile").value;
            // var due_date = document.getElementById("due-date").value;
            // var categories = document.getElementById("categories").value;
            // var tasks_progress = document.getElementById("tasks-progress").value;

            // var list = document.querySelectorAll('.tasks-list');
            // list.forEach(element => {
            //     // var listName = element.childNodes[0].childNodes[0].children[0].childNodes[0].data;
            //     // console.log(listName)
            // })

            // for (var k in list) {
            //     if (list) {
            //         var n = k;
            //         var listName = list[k].childNodes[0].childNodes[0].children[k].childNodes[0];
            //         console.log(listName)
            //         console.log('n',n)
            //     }
            // }
        }
    },
    components: {
        Layout,
        PageHeader,
        draggable: VueDraggableNext,
        lottie: Lottie,
        flatPickr,
        simplebar,
        Link,
    Head
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="Kanban Board" pageTitle="Tasks" />

        <BCard no-body>
            <BCardBody>
                <BRow class="g-2">
                    <BCol lg="auto">
                        <div class="hstack gap-2">
                            <BButton variant="primary" @click="modalShow1 = !modalShow1"><i
                                    class="ri-add-line align-bottom me-1"></i> Create Board</BButton>
                        </div>
                    </BCol>
                    <BCol lg="3" class="col-auto">
                        <div class="search-box">
                            <input type="text" class="form-control search" placeholder="Search for project, tasks...">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </BCol>
                    <div class="col-auto ms-sm-auto">
                        <div class="avatar-group" id="newMembar">
                            <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Nancy">
                                <img src="@assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Frank">
                                <img src="@assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Tonya">
                                <img src="@assets/images/users/avatar-10.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Thomas">
                                <img src="@assets/images/users/avatar-8.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Herbert">
                                <img src="@assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink class="avatar-group-item" @click="modalShow = !modalShow">
                                <div class="avatar-xs">
                                    <div class="avatar-title rounded-circle">
                                        +
                                    </div>
                                </div>
                            </BLink>
                        </div>
                    </div>
                </BRow>
            </BCardBody>
        </BCard>

        <div class="tasks-board mb-3" id="kanbanboard">
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Unassigned <BBadge tag="small" variant="success"
                                class="align-bottom ms-1">2</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="unassigned-task" class="tasks">
                        <draggable :list="unassigned" class="dragArea" :group="{ name: 'todo' }">
                            <BCard no-body class="tasks-box" v-for="(data, index) of unassigned" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">To Do <BBadge tag="small" variant="secondary"
                                class="align-bottom ms-1">2</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="todo-task" class="tasks">
                        <draggable :list="todo" class="dragArea" group="todo">
                            <BCard no-body class="tasks-box" v-for="(data, index) of todo" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Inprogress
                            <BBadge tag="small" class="bg-warning align-bottom ms-1">2</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="inprogress-task" class="tasks">
                        <draggable :list="inprogress" class="dragArea" group="reviews">
                            <BCard no-body class="tasks-box" v-for="(data, index) of inprogress" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">In Reviews
                            <BBadge tag="small" class="bg-info align-bottom ms-1">3</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="reviews-task" class="tasks">
                        <draggable :list="reviews" class="dragArea" group="reviews">
                            <BCard no-body class="tasks-box" v-for="(data, index) of reviews" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Completed
                            <BBadge tag="small" variant="success" class="align-bottom ms-1">1</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="completed-task" class="tasks">
                        <draggable :list="completed" class="dragArea" group="newData">
                            <BCard no-body class="tasks-box" v-for="(data, index) of completed" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">new <BBadge tag="small" variant="success"
                                class="align-bottom ms-1">1</BBadge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <BDropdown variant="link" class="card-header-dropdown" toggle-class="p-0 arrow-none"
                            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -70, crossAxis: 0, mainAxis: 10 }">
                            <template #button-content><span class="fw-medium text-muted fs-12">Priority<i
                                        class="mdi mdi-chevron-down ms-1"></i></span></template>
                            <BDropdownItem>Priority</BDropdownItem>
                            <BDropdownItem>Date Added</BDropdownItem>
                        </BDropdown>
                    </div>
                </div>
                <simplebar data-simplebar class="tasks-wrapper px-3 mx-n3">
                    <div id="new-task" class="tasks">
                        <draggable :list="newData" class="dragArea" group="newData">
                            <BCard no-body class="tasks-box" v-for="(data, index) of newData" :key="index">
                                <BCardBody>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <Link href="/apps/tasks-details">{{ data.title }}</Link>
                                        </h6>
                                        <BDropdown variant="link" toggle-class="text-muted p-0 arrow-none"
                                            :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                                            <template #button-content><i class="ri-more-fill "></i></template>
                                            <BDropdownItem href="/apps/tasks-details"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                View</BDropdownItem>
                                            <BDropdownItem><i class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                Edit </BDropdownItem>
                                            <BDropdownItem @click="deleteTask"> <i
                                                    class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                Delete </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%"
                                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary me-1"
                                                v-for="(item, index) of data.features" :key="index">{{ item }}</BBadge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <BLink href="javascript: void(0);" v-for="(item, index) of data.users"
                                                    :key="index" class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </BCardBody>
                                <BCardFooter class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#BM2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-eye-line align-bottom"></i> 04</BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-question-answer-line align-bottom"></i> 19
                                                    </BLink>
                                                </li>
                                                <li class="list-inline-item">
                                                    <BLink href="javascript:void(0)" class="text-muted"><i
                                                            class="ri-attachment-2 align-bottom"></i> 02</BLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BCardFooter>
                            </BCard>
                        </draggable>
                    </div>
                </simplebar>
                <div class="my-3">
                    <BButton variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</BButton>
                </div>
            </div>
        </div>


        <BModal v-model="modalShow" header-class="p-3 bg-warning-subtle" content-class="border-0" hide-footer
            title="Add Member" class="v-modal-custom">
            <BFrom>
                <BRow class="g-3">
                    <BCol lg="12">
                        <label for="submissionidInput" class="form-label">Submission ID</label>
                        <input type="number" class="form-control" id="submissionidInput" placeholder="Submission ID">
                    </BCol>
                    <BCol lg="12">
                        <label for="profileimgInput" class="form-label">Profile Images</label>
                        <input class="form-control" type="file" id="profileimgInput">
                    </BCol>
                    <BCol lg="6">
                        <label for="firstnameInput" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstnameInput" placeholder="Enter firstname">
                    </BCol>
                    <BCol lg="6">
                        <label for="lastnameInput" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastnameInput" placeholder="Enter lastname">
                    </BCol>
                    <BCol lg="12">
                        <label for="designationInput" class="form-label">Designation</label>
                        <input type="text" class="form-control" id="designationInput" placeholder="Designation">
                    </BCol>
                    <BCol lg="12">
                        <label for="titleInput" class="form-label">Title</label>
                        <input type="text" class="form-control" id="titleInput" placeholder="Title">
                    </BCol>
                    <BCol lg="6">
                        <label for="numberInput" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="numberInput" placeholder="Phone number">
                    </BCol>
                    <BCol lg="6">
                        <label for="joiningdateInput" class="form-label">Joining Date</label>

                        <flat-pickr v-model="date" :config="config" placeholder="Select date" class="form-control">
                        </flat-pickr>
                    </BCol>
                    <BCol lg="12">
                        <label for="emailInput" class="form-label">Email ID</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Email">
                    </BCol>
                </BRow>
            </BFrom>
            <div class="modal-footer v-modal-footer">
                <BButton type="button" variant="light" @click="modalShow = false"><i
                        class="ri-close-line align-bottom me-1"></i> Close</BButton>
                <BButton type="button" variant="success" id="addMember">Add Member</BButton>
            </div>
        </BModal>

        <BModal v-model="modalShow1" header-class="p-3 bg-info-subtle" content-class="border-0" hide-footer
            title="Add Board" class="v-modal-custom" centered>
            <BFrom action="#">
                <BRow>
                    <BCol lg="12">
                        <label for="boardName" class="form-label">Board Name</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter board name">
                    </BCol>
                    <div class="mt-4">
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="light" @click="modalShow1 = false">Close</BButton>
                            <BButton type="button" variant="success" id="addNewBoard">Add Board</BButton>
                        </div>
                    </div>
                </BRow>
            </BFrom>
        </BModal>

        <BModal v-model="modalShow2" header-class="p-3 bg-info-subtle" content-class="border-0" hide-footer
            title="Create New Task" class="v-modal-custom" size="lg" centered>
            <BFrom action="#">
                <BRow class="g-3">
                    <BCol lg="12">
                        <label for="projectName" class="form-label">Project Name</label>
                        <input type="text" class="form-control" id="projectName" placeholder="Enter project name">
                    </BCol>
                    <BCol lg="12">
                        <label for="sub-tasks" class="form-label">Task Title</label>
                        <input type="text" class="form-control" id="sub-tasks" placeholder="Task title">
                    </BCol>
                    <BCol lg="12">
                        <label for="task-description" class="form-label">Task Description</label>
                        <textarea class="form-control" id="task-description" rows="3"></textarea>
                    </BCol>
                    <BCol lg="12">
                        <label for="formFile" class="form-label">Tasks Images</label>
                        <input class="form-control" type="file" id="formFile">
                    </BCol>
                    <BCol lg="12">
                        <label for="tasks-progress" class="form-label">Add Team Member</label>
                        <simplebar data-simplebar style="height: 95px;">
                            <ul class="list-unstyled vstack gap-2 mb-0">
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="anna-adame">
                                        <label class="form-check-label d-flex align-items-center" for="anna-adame">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-1.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Anna Adame
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="frank-hook">
                                        <label class="form-check-label d-flex align-items-center" for="frank-hook">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-3.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Frank Hook
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="alexis-clarke">
                                        <label class="form-check-label d-flex align-items-center" for="alexis-clarke">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-6.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Alexis Clarke
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="herbert-stokes">
                                        <label class="form-check-label d-flex align-items-center" for="herbert-stokes">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-2.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Herbert Stokes
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="michael-morris">
                                        <label class="form-check-label d-flex align-items-center" for="michael-morris">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-7.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Michael Morris
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="nancy-martino">
                                        <label class="form-check-label d-flex align-items-center" for="nancy-martino">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-5.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Nancy Martino
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="thomas-taylor">
                                        <label class="form-check-label d-flex align-items-center" for="thomas-taylor">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-8.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Thomas Taylor
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input me-3" type="checkbox" value="" id="tonya-noble">
                                        <label class="form-check-label d-flex align-items-center" for="tonya-noble">
                                            <span class="flex-shrink-0">
                                                <img src="@assets/images/users/avatar-10.jpg" alt=""
                                                    class="avatar-xxs rounded-circle" />
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Tonya Noble
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </simplebar>
                    </BCol>
                    <BCol lg="4">
                        <label for="due-date" class="form-label">Due Date</label>

                        <flat-pickr v-model="date1" placeholder="Select date" class="form-control">
                        </flat-pickr>
                    </BCol>
                    <BCol lg="4">
                        <label for="categories" class="form-label">Tags</label>
                        <input type="text" class="form-control" id="categories" placeholder="Enter tag">
                    </BCol>
                    <BCol lg="4">
                        <label for="tasks-progress" class="form-label">Tasks Progress</label>
                        <input type="text" class="form-control" maxlength="3" id="tasks-progress"
                            placeholder="Enter progress">
                    </BCol>
                    <div class="mt-4">
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="light" @click="modalShow2 = false">Close</BButton>
                            <BButton type="button" variant="success" @click="addNewTask">Add Task</BButton>
                        </div>
                    </div>
                </BRow>
            </BFrom>
        </BModal>

        <BModal v-model="modalShow3" id="deleteTask" modal-class="zoomIn" hide-footer class="v-modal-custom" centered>
            <div class="mt-2 text-center">
                <lottie class="avatar-xl" colors="primary:#f7b84b,secondary:#f06548" :options="defaultOptions" :height="100"
                    :width="100" />
                <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <BButton type="button" variant="light" class="w-sm" data-bs-dismiss="modal">Close</BButton>
                <BButton type="button" variant="danger" class="w-sm" id="delete-record">Yes, Delete It!</BButton>
            </div>
        </BModal>

    </Layout>
</template>

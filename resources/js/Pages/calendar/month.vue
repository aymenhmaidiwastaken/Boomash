<script>
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import simpleBar from "simplebar-vue"

import moment from "moment";
import "@fullcalendar/core";
import flatPickr from "vue-flatpickr-component";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from '@fullcalendar/multimonth';
import { INITIAL_EVENTS, categories } from "./utils";
import { layoutComputed } from "@/state/helpers";


export default {
    components: {
        Layout, PageHeader, simpleBar, FullCalendar,
        flatPickr
    },
    mounted() {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    start: new Date(),
                    className: eventEl.getAttribute("data-class"),
                };
            },
        });
    },
    data() {
        return {
            calendarOptions: {
                timeZone: "local",
                droppable: true,
                navLinks: true,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    bootstrapPlugin,
                    listPlugin,
                    multiMonthPlugin
                ],
                themeSystem: "bootstrap",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                },
                windowResize: () => {
                    this.getInitialView();
                },
                initialView: 'multiMonthYear',
                initialEvents: INITIAL_EVENTS,
                // events: temp,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.dateClicked,
                eventClick: this.editEventDetails,
                eventsSet: this.handleEvents
            },
            submitted: false,
            currentEvents: [],
            dataEdit: false,
            showModal: false,
            eventModal: false,
            categories: categories,
            newEventData: {},
            edit: {},
            deleteId: {},
            event: {
                title: "",
                date: "",
                location: "",
                description: "",
                type: "",
                calendardates: ""
            },
            eventTitle: "",
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
                mode: "range",
            },
            timeConfig: {
                enableTime: false,
                altInput: true,
                dateFormat: "Z",
                altFormat: "d M, Y",
                mode: "range",
            },
            selectedLocale: 'en',
            selectedDirection: 'ltr',
        }
    },
    methods: {
        formatDate(date) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var d = new Date(date),
                month = "" + monthNames[d.getMonth()],
                day = "" + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            return [day + " " + month, year].join(",");
        },
        dateStamp(start, end) {
            let date;
            if (end == null) {
                date = this.formatDate(start);
            }
            else {
                date = this.formatDate(start) + " - " + this.formatDate(end);
            }
            return date;
        },
        formatTime(params) {
            params = new Date(params);
            if (params.getHours() != null) {
                let hour = params.getHours();
                let minute = params.getMinutes() ? params.getMinutes() : "00";
                let timeFormat = hour >= 12 ? "PM" : "AM";
                hour = hour % 12;
                hour = hour ? hour : 12;
                minute = (minute < 10 && minute != 0) ? "0" + minute : minute;
                return hour + ":" + minute + " " + timeFormat;
            }
        },
        timeStamp(start, end) {
            let time;
            if (this.formatTime(start) == this.formatTime(end)) {
                time = "Full day event";
            } else {
                time = this.formatTime(start) + " - " + this.formatTime(end);
            }
            return time;
        },

        /**
       * Delete event
       */
        deleteEvent() {
            this.edit.remove();
            this.eventModal = false;
            this.showModal = false;
        },
        /**
         * Modal open for add event
         */
        dateClicked(info) {
            this.event = {};
            this.newEventData = info;
            this.showModal = true;
            this.dataEdit = false;
        },
        /**
         * Modal open for edit event
         */
        editEventDetails(info) {
            this.edit = info.event;
            this.eventTitle = this.edit.title;
            this.event.title = this.edit.title;
            this.event.type = this.edit.classNames;
            this.event.date = this.dateStamp(this.edit.start, this.edit.end);
            this.event.location = this.edit.extendedProps.location;
            this.event.description = this.edit.extendedProps.description;
            this.event.calendardates = moment(this.edit.start).toISOString() + " to " + moment(this.edit.end ? this.edit.end : this.edit.start).toISOString();
            this.dataEdit = true;
            this.eventModal = true;
        },
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const editTitle = this.event.title;
                    const edittype = this.event.type;
                    const editLocation = this.event.location;
                    const editDescription = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];

                    this.edit.setProp("title", editTitle);
                    this.edit.setProp("classNames", edittype);
                    this.edit.setStart(startDate);
                    this.edit.setEnd(endDate);
                    this.edit.setExtendedProp("location", editLocation);
                    this.edit.setExtendedProp("description", editDescription);
                    this.showModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const title = this.event.title;
                    const type = this.event.type;
                    const location = this.event.location;
                    const description = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];
                    const calendarApi = this.$refs.fullCalendar.getApi();

                    calendarApi.addEvent(
                        {
                            id: (Math.floor(Math.random() * 100 + 20) - 20),
                            title,
                            start: startDate,
                            end: endDate,
                            classNames: type,
                            extendedProps: { department: "All Day Event", location: location, description: description }
                        });

                    this.showModal = false;
                    this.event = {};
                    this.newEventData = {};
                }
            }
        },

        getInitialView() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                return "timeGridWeek";
            } else if (window.innerWidth <= 768) {
                return "listMonth";
            } else {
                return "dayGridMonth";
            }
        },

        toggleModal() {
            this.showModal = true;
            this.dataEdit = false;
            this.event = {};

            this.submitted = false;
        },

        // edit button
        editbtn() {
            this.showModal = true,
                this.eventModal = false;
        },

        // cancel button
        cancelbtn() {
            this.showModal = false;
            this.eventModal = true;
        },
        changeLocale() {
            const fullCalendar = this.$refs.fullCalendar.getApi();
            fullCalendar.setOption('locale', this.selectedLocale);
        },
        changeDirection() {
            const fullCalendar = this.$refs.fullCalendar.getApi();
            fullCalendar.setOption('direction', this.selectedDirection);
        },

        selectEvents(e) {
            let check = document.querySelectorAll(".input-filter");
            if (e.target.checked) {
                check.forEach((item) => {
                    item.checked = true;
                    this.calendarOptions.events = this.currentEvents;
                });
            } else {
                check.forEach((item) => {
                    item.checked = false;
                    this.calendarOptions.events = [];
                });
            }
        },

        selectCategory() {
            let check = document.querySelectorAll(".input-filter");
            let checked = document.querySelectorAll(".input-filter:checked");
            let selectAll = document.querySelector(".select-all");
            let selected = [];

            check.length === checked.length ? selectAll.checked = true : selectAll.checked = false;
            checked.forEach((item) => selected.push(item.getAttribute('data-value')));
            this.calendarOptions.events = this.currentEvents.filter((event) => selected.includes(event.extendedProps.category.toLowerCase()));
        },
        handleEvents(events) {
            this.currentEvents = events.reverse();
        },
    },
    computed: {
        ...layoutComputed,
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    // this.isCalendarDraggable();
                }
            },
        },
    },
}
</script>

<template>
    <Layout>
        <PageHeader title="Month Grid" pageTitle="Apps" />

        <BRow>
            <BCol cols="12">
                <BRow>
                    <BCol xl="3">
                        <BCard no-body class="card-h-100">
                            <BCardBody>
                                <BButton variant="primary" class="w-100" id="btn-new-event" @click="showModal = true">
                                    <i class="mdi mdi-plus"></i> Create New Event
                                </BButton>

                                <div id="external-events">
                                    <br />
                                    <p class="text-muted">
                                        Drag and drop your event or click in the calendar
                                    </p>
                                    <div class="external-event fc-event bg-success-subtle text-success"
                                        data-class="bg-success-subtle">
                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>New Event Planning
                                    </div>
                                    <div class="external-event fc-event bg-info-subtle text-info"
                                        data-class="bg-info-subtle">
                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Meeting
                                    </div>
                                    <div class="external-event fc-event bg-warning-subtle text-warning"
                                        data-class="bg-warning-subtle">
                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Generating Reports
                                    </div>
                                    <div class="external-event fc-event bg-danger-subtle text-danger"
                                        data-class="bg-danger-subtle">
                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Create New theme
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                        <div>
                            <h5 class="mb-1">Upcoming Events</h5>
                            <p class="text-muted">Don't miss scheduled events</p>
                            <simpleBar class="upcoming-events pe-2 me-n1 mb-3" data-simplebar="init" style="height: 400px">
                                <BCard no-body class="mb-3" v-for="event in currentEvents" :key="event.id">
                                    <BCardBody>
                                        <div class="d-flex mb-3">
                                            <div class="flex-grow-1">
                                                <i
                                                    :class="`mdi mdi-checkbox-blank-circle me-2 ${event.classNames}`"></i><span
                                                    class="fw-medium">{{ this.dateStamp(event.start, event.end) }}</span>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <BBadge tag="small" variant="primary-subtle"
                                                    class="bg-primary-subtle text-primary ms-auto">{{
                                                        this.timeStamp(event.start, event.end)
                                                    }}</BBadge>
                                            </div>
                                        </div>
                                        <h6 class="card-title fs-16">{{ event.title }}</h6>
                                        <p class="text-muted text-truncate-two-lines mb-0">{{ (event.extendedProps &&
                                            event.extendedProps.description) ?
                                            event.extendedProps.description : "N.A."
                                        }}</p>
                                    </BCardBody>
                                </BCard>
                            </simpleBar>
                        </div>
                        <BCard no-body>
                            <BCardBody class="bg-info-subtle">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <CalendarIcon class="text-info icon-dual-info"></CalendarIcon>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="fs-15">Welcome to your Calendar!</h6>
                                        <p class="text-muted mb-0">
                                            Event that applications book will appear here. Click on an
                                            event to see the details and manage applicants event.
                                        </p>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="9">
                        <BCard no-body class="card-h-100">
                            <BCardBody>
                                <FullCalendar ref="fullCalendar" :options="calendarOptions" />
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <div style="clear: both"></div>
            </BCol>
        </BRow>

        <BModal v-model="showModal" :title="this.dataEdit ? this.eventTitle : 'Add Event'" body-class="p-4"
            header-class="p-3 bg-info-subtle" hide-footer class="v-modal-custom" centered="">
            <form @submit.prevent="handleSubmit">
                <div class="text-end" v-if="this.dataEdit">
                    <BLink href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="cancelbtn">
                        Cancel</BLink>
                </div>
                <BRow>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label for="name" class="form-label">Event Name</label>
                            <input id="name" v-model="event.title" type="text" class="form-control"
                                placeholder="Insert Event name" :class="{ 'is-invalid': submitted && !event.title }" />
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Event Date</label>
                            <div class="input-group">
                                <flat-pickr placeholder="Select date" v-model="event.calendardates" :config="timeConfig"
                                    class="form-control flatpickr-input" id="caledate"
                                    :class="{ 'is-invalid': submitted && !event.calendardates }"></flat-pickr>
                                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                            </div>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label for="event-location" class="form-label">Location</label>
                            <div>
                                <input type="text" v-model="event.location" class="form-control" name="event-location"
                                    id="event-location" placeholder="Event location"
                                    :class="{ 'is-invalid': submitted && !event.location }">
                            </div>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" v-model="event.description" id="event-description"
                                placeholder="Enter a description" rows="3" spellcheck="false"
                                :class="{ 'is-invalid': submitted && !event.description }"></textarea>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select v-model="event.type" class="form-control" name="type"
                                :class="{ 'is-invalid': submitted && !event.type }">
                                <option v-for="option in categories" :key="option.backgroundColor"
                                    :value="`${option.value}`">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </BCol>
                </BRow>

                <div class="text-end pt-3">
                    <BButton class="ms-1" variant="subtle-danger" @click="deleteEvent" v-if="this.dataEdit">Delete</BButton>
                    <BButton type="submit" variant="success" class="ms-1">
                        {{ this.dataEdit ? "Update Event" : "Add Event" }}
                    </BButton>
                </div>
            </form>
        </BModal>

        <BModal v-model="eventModal" :title="this.event.title" hide-footer body-class="p-4"
            header-class="p-3 bg-info-subtle" class="v-modal-custom" centered>
            <div class="text-end">
                <BLink href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="editbtn">Edit</BLink>
            </div>
            <div class="event-details">
                <div class="d-flex mb-2">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="flex-shrink-0 me-3"> <i class="ri-calendar-event-line text-muted fs-16"></i> </div>
                        <div class="flex-grow-1">
                            <h6 class="d-block fw-semibold mb-0" id="event-start-date-tag">
                                {{ this.event.date }}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-time-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-timepicker1-tag"></span> - <span id="event-timepicker2-tag"></span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-map-pin-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-location-tag">
                                {{ this.event.location || "No Location" }}
                            </span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="flex-shrink-0 me-3"> <i class="ri-discuss-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <p class="d-block text-muted mb-0" id="event-description-tag">
                            {{ this.event.description || "N.A." }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <BButton variant="subtle-danger" id="btn-delete-event" @click="deleteEvent">
                    <i class="ri-close-line align-bottom"></i> Delete
                </BButton>
            </div>
        </BModal>
    </Layout>
</template>

<script>
import moment from "moment";
import Swal from "sweetalert2";
import "@fullcalendar/core";
import simpleBar from "simplebar-vue"
import { CalendarIcon } from "@zhuowenli/vue-feather-icons";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

import FullCalendar from "@fullcalendar/vue3";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import { INITIAL_EVENTS, categories } from "./utils";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    event: {
      title: {
        required: helpers.withMessage("Title is required", required),
      },
      category: {
        required: helpers.withMessage("Category is required", required),
      },
      location: {
        required: helpers.withMessage("Location is required", required),
      },
      descri: {
        required: helpers.withMessage("Descri is required", required),
      },
    },
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
        ],
        themeSystem: "bootstrap",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        windowResize: () => {
          this.getInitialView();
        },
        initialView: this.getInitialView(),
        initialEvents: INITIAL_EVENTS,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        dateClick: this.dateClicked,
        eventClick: this.editEvent,
        eventsSet: this.handleEvents,
      },
      currentEvents: [],
      showModal: false,
      eventModal: false,
      eventEditModal: false,
      categories: categories,
      submitted: false,
      submit: false,
      newEventData: {},
      edit: {},
      deleteId: {},
      event: {
        title: "",
        category: "",
        location: "",
        descri: "",
        date: ""
      },
      editevent: {
        editTitle: "",
        editcategory: "",
        editlocation: "",
        editdescri: "",
        editdates: "",
        editcalendardates: ""
      },
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
      date2: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    FullCalendar,
    CalendarIcon,
    flatPickr,
    simpleBar
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
        month = "" + monthNames[d.getMonth()].slice(0, 3),
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [day + " " + month, year].join(" ");
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

    getInitialView() {
      if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        return "timeGridWeek";
      } else if (window.innerWidth <= 768) {
        return "listMonth";
      } else {
        return "dayGridMonth";
      }
    },
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        const title = this.event.title;
        const category = this.event.category;
        const calendarApi = this.$refs.fullCalendar.getApi();
        const location = this.event.location;
        const descri = this.event.descri;
        const date = this.event.date.split(" ").filter(((item) => (item !== "to")));
        const startDate = date[0];
        const endDate = date[1];

        calendarApi.addEvent(
          {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            title,
            start: startDate,
            end: endDate,
            classNames: category,
            extendedProps: { department: "All Day Event", location, description: descri }
          });

        // this.currentEvents.unshift(data);
        this.successmsg();
        this.showModal = false;
        this.newEventData = {};
      }
      this.submitted = false;
      this.event = {};
    },
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.submitted = false;
      this.showModal = false;
      this.event = {};
    },
    /**
     * Edit event modal submit
     */
    // eslint-disable-next-line no-unused-vars
    editSubmit(e) {
      this.submit = true;
      const editTitle = this.editevent.editTitle;
      const editcategory = this.editevent.editcategory;
      const editlocation = this.editevent.editlocation;
      const editdescri = this.editevent.editdescri;
      const date = this.editevent.editcalendardates.split(" ").filter(((item) => (item !== "to")));
      const startDate = date[0];
      const endDate = date[1];

      this.edit.setProp("title", editTitle);
      this.edit.setProp("classNames", editcategory);
      this.edit.setStart(startDate);
      this.edit.setEnd(endDate);
      this.edit.setExtendedProp("location", editlocation);
      this.edit.setExtendedProp("description", editdescri);
      this.successmsg();
      this.eventModal = false;
      this.eventEditModal = false;
    },

    /**
     * Delete event
     */
    deleteEvent() {
      this.edit.remove();
      this.eventModal = false;
      this.eventEditModal = false;
    },
    /**
     * Modal open for add event
     */
    dateClicked(info) {
      this.newEventData = info;
      this.showModal = true;
    },
    /**
     * Modal open for edit event
     */
    editEvent(info) {
      this.edit = info.event;
      this.editevent.editTitle = this.edit.title;
      this.editevent.editcategory = this.edit.classNames;
      this.editevent.editlocation = this.edit.extendedProps.location;
      this.editevent.editdescri = this.edit.extendedProps.description;
      this.editevent.editdates = this.dateStamp(this.edit.start, this.edit.end);
      this.editevent.editcalendardates = moment(this.edit.start).toISOString() + " to " + moment(this.edit.end ? this.edit.end : this.edit.start).toISOString();
      this.eventModal = true;
    },

    closeModal() {
      this.eventModal = false;
      this.eventEditModal = false;
    },

    confirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.deleteEvent();
          Swal.fire("Deleted!", "Event has been deleted.", "success");
        }
      });
    },

    /**
     * Show list of events
     */
    handleEvents(events) {
      console.log("event call 1 time", events);
      this.currentEvents = events.reverse();
    },

    /**
     * Show successfull Save Dialog
     */
    successmsg() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Event has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Calendar" pageTitle="Apps" />

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
                  <div class="external-event fc-event bg-success-subtle text-success" data-class="bg-success-subtle">
                    <i class="mdi mdi-checkbox-blank-circle me-2"></i>New Event Planning
                  </div>
                  <div class="external-event fc-event bg-info-subtle text-info" data-class="bg-info-subtle">
                    <i class="mdi mdi-checkbox-blank-circle me-2"></i>Meeting
                  </div>
                  <div class="external-event fc-event bg-warning-subtle text-warning" data-class="bg-warning-subtle">
                    <i class="mdi mdi-checkbox-blank-circle me-2"></i>Generating Reports
                  </div>
                  <div class="external-event fc-event bg-danger-subtle text-danger" data-class="bg-danger-subtle">
                    <i class="mdi mdi-checkbox-blank-circle me-2"></i>Create New theme
                  </div>
                </div>
              </BCardBody>
            </BCard>
            <div>
              <h5 class="mb-1">Upcoming Events</h5>
              <p class="text-muted">Don't miss scheduled events</p>
              <simpleBar class="upcoming-events pe-2 me-n1 mb-3" data-simplebar="init" style="height: 400px">
                {{ console.log("call currentEvents ", currentEvents) }}
                <BCard no-body class="mb-3" v-for="event in currentEvents" :key="event.id">
                  <BCardBody>
                    <div class="d-flex mb-3">
                      <div class="flex-grow-1">
                        <i :class="`mdi mdi-checkbox-blank-circle me-2 ${event.classNames}`"></i><span
                          class="fw-medium">{{ this.dateStamp(event.start, event.end) }}</span>
                      </div>
                      <div class="flex-shrink-0">
                        <BBadge tag="small" variant="primary-subtle" class="bg-primary-subtle text-primary ms-auto">{{
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

    <BModal v-model="showModal" title="Add New Event" body-class="p-4" header-class="p-3 bg-info-subtle" hide-footer
      class="v-modal-custom" centered>
      <form @submit.prevent="handleSubmit" name="event-form" id="form-event">
        <div class="text-end">
          <BLink href="#" class="btn btn-sm btn-soft-primary" id="edit-event-btn" data-id="new-event"
            onclick="editEvent(this)" role="button" hidden="true">Edit</BLink>
        </div>
        <div class="row event-form">
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Type</label>
              <select v-model="event.category" class="form-control" name="category"
                :class="{ 'is-invalid': submitted && v$.event.category.errors }">
                <option v-for="option in categories" :key="option.backgroundColor" :value="`${option.value}`">
                  {{ option.name }}
                </option>
              </select>
              <div v-if="submitted && v$.event.category.$error" class="invalid-feedback">
                <span v-if="v$.event.category.required.$message">{{
                  v$.event.category.required.$message
                }}</span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Event Name</label>
              <input id="name" v-model="event.title" type="text" class="form-control" placeholder="Insert Event name"
                :class="{ 'is-invalid': submitted && v$.event.title.$error }" />
              <div v-if="submitted && v$.event.title.$error" class="invalid-feedback">
                <span v-if="v$.event.title.required.$message">{{
                  v$.event.title.required.$message
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3">
              <label>Event Date</label>
              <div class="input-group">
                <flat-pickr placeholder="Select date" v-model="event.date" :config="timeConfig"
                  class="form-control flatpickr-input" id="caledate"></flat-pickr>
                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="event-location">Location</label>
              <div>
                <input type="text" class="form-control d-block" v-model="event.location" name="event-location"
                  id="event-location" placeholder="Event location"
                  :class="{ 'is-invalid': submitted && v$.event.location.$error }">
                <div v-if="submitted && v$.event.location.$error" class="invalid-feedback">
                  <span v-if="v$.event.location.required.$message">{{
                    v$.event.location.required.$message
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <input type="hidden" id="eventid" name="eventid" value="">
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control d-block" id="event-description" v-model="event.descri"
                placeholder="Enter a description" rows="3" spellcheck="false"
                :class="{ 'is-invalid': submitted && v$.event.descri.$error }"></textarea>
              <div v-if="submitted && v$.event.descri.$error" class="invalid-feedback">
                <span v-if="v$.event.descri.required.$message">{{
                  v$.event.descri.required.$message
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-end pt-3">
          <BButton variant="light" @click="hideModal">Close</BButton>
          <BButton type="submit" variant="success" class="ms-1">Create event</BButton>
        </div>
      </form>
    </BModal>


    <BModal v-model="eventModal" :title="this.editevent.editTitle" hide-footer body-class="p-4"
      header-class="p-3 bg-info-subtle" class="v-modal-custom" centered>
      <div class="text-end">
        <BLink href="#" class="btn btn-sm btn-soft-primary" id="edit-event-btn" data-id="edit-event" role="button"
          @click="this.eventEditModal = true, this.eventModal = false">Edit</BLink>
      </div>
      <div class="event-details">
        <div class="d-flex mb-2">
          <div class="flex-grow-1 d-flex align-items-center">
            <div class="flex-shrink-0 me-3">
              <i class="ri-calendar-event-line text-muted fs-16"></i>
            </div>
            <div class="flex-grow-1">
              <h6 class="d-block fw-semibold mb-0" id="event-start-date-tag">
                {{ this.editevent.editdates }}
              </h6>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-3">
            <i class="ri-time-line text-muted fs-16"></i>
          </div>
          <div class="flex-grow-1">
            <h6 class="d-block fw-semibold mb-0"><span id="event-timepicker1-tag"></span> - <span
                id="event-timepicker2-tag"></span></h6>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-3">
            <i class="ri-map-pin-line text-muted fs-16"></i>
          </div>
          <div class="flex-grow-1">
            <h6 class="d-block fw-semibold mb-0"> <span id="event-location-tag">
                {{ this.editevent.editlocation || "No Location" }}
              </span></h6>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="flex-shrink-0 me-3">
            <i class="ri-discuss-line text-muted fs-16"></i>
          </div>
          <div class="flex-grow-1">
            <p class="d-block text-muted mb-0" id="event-description-tag">
              {{ this.editevent.editdescri || "N.A." }}
            </p>
          </div>
        </div>
      </div>
      <div class="hstack gap-2 justify-content-end">
        <BButton variant="soft-danger" id="btn-delete-event" @click="confirm"><i class="ri-close-line align-bottom"></i>
          Delete</BButton>
      </div>
    </BModal>

    <BModal v-model="eventEditModal" :title="this.editevent.editTitle" title-class="text-black font-18" body-class="p-4"
      header-class="p-3 bg-info-subtle" hide-footer class="v-modal-custom" centered>
      <form @submit.prevent="editSubmit" name="event-form" id="form-event">
        <div class="row event-form">
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Type</label>
              <select v-model="editevent.editcategory" class="form-control" name="category">
                <option v-for="option in categories" :key="option.backgroundColor" :value="`${option.value}`">
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Event Name</label>
              <input id="name" v-model="this.editevent.editTitle" type="text" class="form-control"
                placeholder="Insert Event name" />
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3">
              <label>Event Date</label>
              <div class="input-group">
                <flat-pickr placeholder="Select date" v-model="editevent.editcalendardates" :config="timeConfig"
                  class="form-control flatpickr-input" id="caledate"></flat-pickr>
                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="event-location">Location</label>
              <div>
                <input type="text" class="form-control d-block" v-model="editevent.editlocation" name="event-location"
                  id="event-location" placeholder="Event location" />
              </div>
            </div>
          </div>

          <input type="hidden" id="eventid" name="eventid" value="">
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control d-block" id="event-description" v-model="editevent.editdescri"
                placeholder="Enter a description" rows="3" spellcheck="false"></textarea>
            </div>
          </div>
        </div>
        <div class="hstack gap-2 justify-content-end">
          <BButton variant="soft-danger" id="btn-delete-event" @click="confirm"><i class="ri-close-line align-bottom"></i>
            Delete</BButton>
            <BButton variant="success" type="submit" id="btn-save-event">Update Event</BButton>
        </div>
      </form>
    </BModal>
  </Layout>
</template>

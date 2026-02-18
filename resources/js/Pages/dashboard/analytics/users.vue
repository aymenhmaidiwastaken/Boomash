<script>
import { UsersIcon } from '@zhuowenli/vue-feather-icons';

import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {
      series: [78.56, 105.02, 42.89],
      chartOptions: {
        labels: ["Desktop", "Mobile", "Tablet"],
        chart: {
          type: "donut",
          height: 219,
        },
        plotOptions: {
          pie: {
            size: 100,
            donut: {
              size: "76%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          position: "bottom",
          horizontalAlign: "center",
          offsetX: 0,
          offsetY: 0,
          markers: {
            width: 20,
            height: 6,
            radius: 2,
          },
          itemMargin: {
            horizontal: 12,
            vertical: 0,
          },
        },
        stroke: {
          width: 0,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "k" + " Users";
            },
          },
          tickAmount: 4,
          min: 0,
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-warning", "--vz-info"]'),
      },
    };
  },
  components: {
    UsersIcon
  }
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Users by Device</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end"  :offset="{ alignmentAxis: -140, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="text-muted fs-16"><i
                class="mdi mdi-dots-vertical align-middle"></i></span> </template>
          <BDropdownItem>Today</BDropdownItem>
          <BDropdownItem>Last Week</BDropdownItem>
          <BDropdownItem>Last Month</BDropdownItem>
          <BDropdownItem>Current Year</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody>
      <apexchart class="apex-charts" dir="ltr" height="219" :series="series" :options="chartOptions"></apexchart>

      <div class="table-responsive mt-3">
        <table class="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
          <tbody class="border-0">
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Desktop Users
                </h4>
              </td>
              <td>
                <p class="text-muted mb-0">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>78.56k
                </p>
              </td>
              <td class="text-end">
                <p class="text-success fw-medium fs-12 mb-0">
                  <i class="ri-arrow-up-s-fill fs-5 align-middle"></i>2.08%
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-warning me-2"></i>Mobile Users
                </h4>
              </td>
              <td>
                <p class="text-muted mb-0">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>105.02k
                </p>
              </td>
              <td class="text-end">
                <p class="text-danger fw-medium fs-12 mb-0">
                  <i class="ri-arrow-down-s-fill fs-5 align-middle"></i>10.52%
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-info me-2"></i>Tablet Users
                </h4>
              </td>
              <td>
                <p class="text-muted mb-0">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>42.89k
                </p>
              </td>
              <td class="text-end">
                <p class="text-danger fw-medium fs-12 mb-0">
                  <i class="ri-arrow-down-s-fill fs-5 align-middle"></i>7.36%
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BCardBody>
  </BCard>
</template>
<script>
import getChartColorsArray from "@/common/getChartColorsArray";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString() + "h";
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
export default {
  data() {
    return {
      series: [{
        name: "Sat",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Fri",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Thu",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Wed",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Tue",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Mon",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Sun",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      ],
      chartOptions: {
        chart: {
          height: 430,
          type: "heatmap",
          offsetX: 0,
          offsetY: -8,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          horizontalAlign: "center",
          offsetX: 0,
          offsetY: 20,
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
        colors: getChartColorsArray('["--vz-success", "--vz-info"]'),
        tooltip: {
          y: [{
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + "k";
              }
              return y;
            },
          },],
        },
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Audiences Sessions by Country</BCardTitle>
      <div class="flex-shrink-0">
          <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
            menu-class="dropdown-menu-end" aria-haspopup="true">
            <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                class="text-muted">Current Week<i class="mdi mdi-chevron-down ms-1"></i></span>
            </template>
            <BDropdownItem>Today</BDropdownItem>
            <BDropdownItem>Last Week</BDropdownItem>
            <BDropdownItem>Last Month</BDropdownItem>
            <BDropdownItem>Current Year</BDropdownItem>
          </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody class="p-0">
      <div>
        <apexchart class="apex-charts" height="390" dir="ltr" :series="series" :options="chartOptions"></apexchart>
      </div>
    </BCardBody>
  </BCard>
</template>
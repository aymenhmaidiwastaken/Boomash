<script>
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {
      series: [{
        data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
        name: "Sessions",
      },],
      chartOptions: {
        chart: {
          type: "bar",
          height: 436,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        colors: getChartColorsArray(
          '["--vz-info", "--vz-info", "--vz-info", "--vz-info", "--vz-danger", "--vz-info", "--vz-info", "--vz-info", "--vz-info", "--vz-info"]'
        ),
        dataLabels: {
          enabled: true,
          offsetX: 32,
          style: {
            fontSize: "12px",
            fontWeight: 400,
            colors: ["#adb5bd"],
          },
        },

        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          categories: [
            "India",
            "United States",
            "China",
            "Indonesia",
            "Russia",
            "Bangladesh",
            "Canada",
            "Brazil",
            "Vietnam",
            "UK",
          ],
        },
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">Sessions by Countries</BCardTitle>
      <div class="hstack gap-1">
        <BButton type="button" variant="soft-secondary" size="sm">ALL</BButton>
        <BButton type="button" variant="soft-primary" size="sm">1M</BButton>
        <BButton type="button" variant="soft-secondary" size="sm">6M</BButton>
      </div>
    </BCardHeader>
    <BCardBody class="p-0">
      <div>
        <apexchart class="apex-charts" dir="ltr" height="436" :series="series" :options="chartOptions"></apexchart>
      </div>
    </BCardBody>
  </BCard>
</template>
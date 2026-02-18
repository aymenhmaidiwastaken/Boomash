<script>
import * as echarts from "echarts";
import usaJson from "@/Components/widgets/USA.json";
export default {
  mounted() {
    let chartDom = document.getElementById("country-map");
    let myChart = echarts.init(chartDom);
    let option;

    echarts.registerMap("USA", usaJson, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15,
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5,
      },
      "Puerto Rico": {
        left: -76,
        top: 26,
        width: 2,
      },
    });
    option = {
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      series: [
        {
          name: "USA PopEstimates",
          type: "map",
          roam: true,
          map: "USA",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: "Alabama", value: 4822023 },
            { name: "Alaska", value: 731449 },
            { name: "Arizona", value: 6553255 },
            { name: "Arkansas", value: 2949131 },
            { name: "California", value: 38041430 },
            { name: "Colorado", value: 5187582 },
            { name: "Connecticut", value: 3590347 },
            { name: "Delaware", value: 917092 },
            { name: "District of Columbia", value: 632323 },
            { name: "Florida", value: 19317568 },
            { name: "Georgia", value: 9919945 },
            { name: "Hawaii", value: 1392313 },
            { name: "Idaho", value: 1595728 },
            { name: "Illinois", value: 12875255 },
            { name: "Indiana", value: 6537334 },
            { name: "Iowa", value: 3074186 },
            { name: "Kansas", value: 2885905 },
            { name: "Kentucky", value: 4380415 },
            { name: "Louisiana", value: 4601893 },
            { name: "Maine", value: 1329192 },
            { name: "Maryland", value: 5884563 },
            { name: "Massachusetts", value: 6646144 },
            { name: "Michigan", value: 9883360 },
            { name: "Minnesota", value: 5379139 },
            { name: "Mississippi", value: 2984926 },
            { name: "Missouri", value: 6021988 },
            { name: "Montana", value: 1005141 },
            { name: "Nebraska", value: 1855525 },
            { name: "Nevada", value: 2758931 },
            { name: "New Hampshire", value: 1320718 },
            { name: "New Jersey", value: 8864590 },
            { name: "New Mexico", value: 2085538 },
            { name: "New York", value: 19570261 },
            { name: "North Carolina", value: 9752073 },
            { name: "North Dakota", value: 699628 },
            { name: "Ohio", value: 11544225 },
            { name: "Oklahoma", value: 3814820 },
            { name: "Oregon", value: 3899353 },
            { name: "Pennsylvania", value: 12763536 },
            { name: "Rhode Island", value: 1050292 },
            { name: "South Carolina", value: 4723723 },
            { name: "South Dakota", value: 833354 },
            { name: "Tennessee", value: 6456243 },
            { name: "Texas", value: 26059203 },
            { name: "Utah", value: 2855287 },
            { name: "Vermont", value: 626011 },
            { name: "Virginia", value: 8185867 },
            { name: "Washington", value: 6897012 },
            { name: "West Virginia", value: 1855413 },
            { name: "Wisconsin", value: 5726398 },
            { name: "Wyoming", value: 576412 },
            { name: "Puerto Rico", value: 3667084 },
          ],
        },
      ],
    };
    myChart.setOption(option);
    option && myChart.setOption(option);
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">Live Users By Country</BCardTitle>
      <div class="flex-shrink-0">
        <BButton type="button" variant="soft-primary" size="sm">
          Export Report
        </BButton>
      </div>
    </BCardHeader>

    <BCardBody>
      <div id="country-map" style="height: 252px;"></div>
      <div role="progressbar"></div>
      <div class="table-responsive table-card mt-3">
        <table class="table table-borderless table-sm table-centered align-middle table-nowrap mb-1">
          <thead class="text-muted border-dashed border border-start-0 border-end-0 bg-light-subtle">
            <tr>
              <th>Duration (Secs)</th>
              <th style="width: 30%">Sessions</th>
              <th style="width: 30%">Views</th>
            </tr>
          </thead>
          <tbody class="border-0">
            <tr>
              <td>0-30</td>
              <td>2,250</td>
              <td>4,250</td>
            </tr>
            <tr>
              <td>31-60</td>
              <td>1,501</td>
              <td>2,050</td>
            </tr>
            <tr>
              <td>61-120</td>
              <td>750</td>
              <td>1,600</td>
            </tr>
            <tr>
              <td>121-240</td>
              <td>540</td>
              <td>1,040</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BCardBody>
  </BCard>
</template>

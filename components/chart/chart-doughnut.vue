<template>
  <div>
    <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [10, 20, 40, 30, 40],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190", "#29f1c3", '#be90d4'],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7", '#7befb2', '#9b59b6']
        }
      ],
      labels: ["Sila Ke 1", "Sila Ke 2", "Sila Ke 3", "Sila Ke 4", "Sila Ke 5"],
      option: {}
    };
  }
};
</script>
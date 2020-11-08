<template>
  <div>
    <div class="card-body">
      <h2 class="card-title">Laporan Masuk</h2>

      <div class="btn-group btn-group-toggle">
        <label
          v-for="(item, index) in btn"
          :key="index"
          :class="{ active: item.value == radio }"
          class="btn btn-success"
        >
          <input
            v-model="radio"
            :name="dataLabel"
            :value="item.value"
            type="radio"
          />
          {{ item.label }}
        </label>
      </div>
    </div>

    <div class="card-img-bottom">
      <chartjs-line
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="data[radio]"
        :datalabel="dataLabel"
        :labels="labels[radio]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#81894e",
      beginZero: true,
      borderColor: "#81894e",
      btn: [
        // { label: "Hari ini", value: "day" },
        { label: "Minggu ini", value: "week" },
        { label: "Per Bulan", value: "month" },
        { label: "Per Tahun", value: "year" }
      ],
      data: {
        // day: [1, 3, 5, 3, 1],
        week: [0,0,0],
        month: [0,0,0],
        year: [0,0,0]
      },
      dataLabel: "Total Laporan Masuk",
      labels: {
        // day: [8, 10, 12, 14, 16],
        week: ["-", "-", "-"],
        month: ["-", "-", "-"],
        year: ["-", "-", "-"]
      },
      radio: "week"
    };
  },
  mounted () {
    this.getLaporan();
  },
  methods: {
    async getLaporan() {
        await this.$axios.get('/laporan-masuk').then(response => {
          if (response.data.success) {
            let data = response.data.data;

            //week
            this.data.week = data.week.map(el => {
              return el.data
            })
            this.labels.week = data.week.map(el => {
              return el.text
            })

            //month
            this.data.month = data.month.map(el => {
              return el.data
            })
            this.labels.month = data.month.map(el => {
              return el.text
            })

            //week
            this.data.year = data.year.map(el => {
              return el.data
            })
            this.labels.year = data.year.map(el => {
              return el.text
            })
          }
        }).finally(() => {
          this.loadingBeritaPopuler = false
        })
      },
  },
};
</script>
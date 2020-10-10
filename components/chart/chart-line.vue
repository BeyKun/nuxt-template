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
        { label: "Hari ini", value: "day" },
        { label: "Minggu ini", value: "week" },
        { label: "Bulan ini", value: "month" },
        { label: "Tahun ini", value: "year" }
      ],
      data: {
        day: [1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15],
        month: [15, 23, 56, 10],
        year: [12, 14, 16, 18, 11, 13, 15, 23, 56, 10, 23, 52]
      },
      dataLabel: "Total Laporan Masuk",
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        month: ["Minggu ke 1", "Minggu ke 2", "Minggu ke 3", "Minggu ke 4"],
        year: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
      },
      radio: "day"
    };
  }
};
</script>
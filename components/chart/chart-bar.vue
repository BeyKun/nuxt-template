<template>
  <div>
    <!-- <canvas id="fooCanvas" count="2" /> -->
      <chartjs-bar
        :backgroundcolor="types[0].bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="types[0].borderColor"
        :data="types[0].data"
        :datalabel="types[0].dataLabel"
        :labels="labels"
      />

      <chartjs-bar
        :backgroundcolor="types[1].bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="types[1].borderColor"
        :data="types[1].data"
        :datalabel="types[1].dataLabel"
        :labels="labels2"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      labels: ["Umum", "Aparatur Negara", "Pemuda", "Perempuan", "Ormas", "Media", "Pendidikan", "Lainya"],
      labels2: ["Sosialiasasi", "Pembudayaan", "Institusionalis Nilai Pancasila", "Internailasasi Nilai Pancasila", "Pengkajian", "Pendidikan", "Pelatihan", "Pengendailan", 'Evaliasi', 'Lainya'],
      types: [
        {
          bgColor: "#de98ab",
          borderColor: "0c0306",
          data: [31, 23, 15, 23, 52, 34, 46, 34, 24],
          dataLabel: "Segmentasi"
        },
        {
          bgColor: "#98ddde",
          borderColor: "030c0c",
          data: [12, 25, 22, 46, 53, 27, 34, 42, 23, 53, 62, 23, 12],
          dataLabel: "Kagetori"
        }
      ]
    };
  }
};
</script>
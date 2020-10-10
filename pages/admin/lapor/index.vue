<template>
  <div>
    <div class="header bg-danger pb-6" style="z-index:-1">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
          <h1 class="heading">Lapor</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--5">
      <el-card>
        <div class="row" style="margin-bottom:20px">
          <div class="col-md-5">
            <el-date-picker size="mini" type="daterange" range-separator="-" start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </div>
          <div class="col-md-3 offset-md-4">
            <el-input placeholder="Cari" size="mini">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <el-table :data="tableData" style="width: 100%" v-loading="loading">
          <el-table-column label="Judul">
            <template slot-scope="scope">
              <router-link to="/admin/lapor/detail">
              <p
                style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap; cursor: pointer; color: #004689; font-weight: 500; font-size: 14px;padding-top: 14px;">
                {{ scope.row.judul }}
              </p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column label="Pelaksana Kegiatan">
            <template slot-scope="scope">
              {{ scope.row.pelasksana_kegiatan }}
            </template>
          </el-table-column>
          <el-table-column label="Waktu Pelaksanaan">
            <template slot-scope="scope">
              {{ scope.row.waktu_pelaksanaan }}
            </template>
          </el-table-column>
          <el-table-column label="Action">
            <template slot-scope="scope">
              <el-tooltip content="Qr Code" placement="top-start" effect="dark">
                <el-button size="mini" type="secondar" @click="edit(scope.row.id)"><i class="fa fa-edit"></i> Edit
                </el-button>
              </el-tooltip>

              <el-tooltip content="Delete" placement="top-start" effect="dark">
                <el-button size="mini" type="danger">
                  <i class="fa fa-trash" @click="edit(scope.row.id)"></i> Hapus
                </el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>

        <el-row>
          <el-col :span="24" align="center" style="margin-top:10px">
            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :total="total"
              :current-page="page">
            </el-pagination>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <!-- Floating Button -->
    <el-tooltip class="item" effect="dark" content="Buat Laporan Baru" placement="top-start">
      <a class="float" @click="tambahDialog = true">
        <i class="el-icon-plus my-float"></i>
      </a>
    </el-tooltip>
    <!-- End floating button-->

    <el-dialog title="Tambah Laporan" :visible.sync="tambahDialog"
      :width="$store.state.drawer.mode === 'mobile' ? '80%' : '60%'">
      <el-form label-width="auto" ref="form" :model="sizeForm" size="mini">
        <el-form-item label="Judul Laporan">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Pelaksana Kegiatan">
          <el-select v-model="sizeForm.region" placeholder="Pilih Pelaksana Kegiatan">
            <el-option v-for="pelki in pelaksana_kegiatan" :key="pelki.id" :label="pelki.label" :value="pelki.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Waktu Pelaksanaan">
          <el-date-picker type="datetimerange" start-placeholder="Mulai" end-placeholder="Selesai"
            :default-time="['12:00:00']">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Tempat Kegiatan">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Sumber Pembiayaan">
          <el-select placeholder="Pilih Sumber Pembiayaan">
            <el-option v-for="pelki in sumber_pembiayaan" :key="pelki.id" :label="pelki.label" :value="pelki.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Segmen Kegiatan">
          <el-select placeholder="Pilih Segmen Kegiatan">
            <el-option v-for="pelki in segmen_kegiatan" :key="pelki.id" :label="pelki.label" :value="pelki.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Kategori Kegiatan">
          <el-select placeholder="Pilih Kategori Kegiatan">
            <el-option v-for="pelki in kategori_kegiatan" :key="pelki.id" :label="pelki.label" :value="pelki.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Kandungan Nilai Pancasila">
          <el-checkbox-group v-model="sizeForm.type">
            <el-checkbox-button label="Sila Ke 1" name="type"></el-checkbox-button>
            <el-checkbox-button label="Sila Ke 2" name="type"></el-checkbox-button>
            <el-checkbox-button label="Sila Ke 3" name="type"></el-checkbox-button>
            <el-checkbox-button label="Sila Ke 4" name="type"></el-checkbox-button>
            <el-checkbox-button label="Sila Ke 5" name="type"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Evidence">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">Simpan</el-button>
          <el-button>Batal</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        tambahDialog: false,
        loading: false,
        page: 1,
        total: 2300,
        tableData: [

        ],
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        pelaksana_kegiatan: [{
            label: 'KESBANGPOL',
            value: 'KESBANGPOL'
          },
          {
            label: 'DINAS LAINNYA',
            value: 'DINAS LAINNYA'
          },
          {
            label: 'SWASTA',
            value: 'SWASTA'
          },
        ],
        sumber_pembiayaan: [{
            label: 'APBN',
            value: 'KESBANGPOL'
          },
          {
            label: 'APBD',
            value: 'DINAS LAINNYA'
          },
          {
            label: 'MANDIRI',
            value: 'SWASTA'
          },
          {
            label: 'CSR',
            value: 'SWASTA'
          },
          {
            label: 'LAINYA',
            value: 'SWASTA'
          },
        ],
        segmen_kegiatan: [{
            label: 'UMUM',
            value: 'KESBANGPOL'
          },
          {
            label: 'APARATUR NEGARA',
            value: 'DINAS LAINNYA'
          },
          {
            label: 'PEMUDA',
            value: 'SWASTA'
          },
          {
            label: 'ORMAS',
            value: 'SWASTA'
          }
        ],
        kategori_kegiatan: [{
            label: 'SOSIALISASI',
            value: 'KESBANGPOL'
          },
          {
            label: 'PEMBUDAYAAN',
            value: 'DINAS LAINNYA'
          },
          {
            label: 'INSTITUSIONALISASI NILAI PANCASILA',
            value: 'SWASTA'
          },
          {
            label: 'INTERNALISASI NILAI PANCASILA',
            value: 'SWASTA'
          }
        ]
      }
    },
    mounted() {
      for (let i = 1; i <= 10; i++) {
        this.tableData.push({
          id: 1,
          judul: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime autem minus minima voluptatibus iusto! Ipsam neque molestiae minima dolore atque corporis, adipisci necessitatibus voluptatum a tempore accusamus vitae, aspernatur cumque!',
          waktu_pelaksanaan: '01/10/2020 sd 03/10/2020',
          pelasksana_kegiatan: 'KESBANGPOL'
        })
      }
    },
    methods: {
      edit(id) {

      },
      handleCurrentChange(val) {
        this.page = val;
      },
      onSubmit() {
        console.log('submit!');
      }
    },
  }

</script>

<style lang="scss" scoped>
  .heading {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

</style>

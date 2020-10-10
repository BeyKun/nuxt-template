<template>
  <div>
    <div class="header bg-danger pb-6" style="z-index:-1">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
          <h1 class="heading">Users</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--5">
      <el-card>
        <div class="row" style="margin-bottom:20px">
          <div class="col-md-3 offset-md-9">
            <el-input placeholder="Cari" size="mini">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <el-table :data="tableData" style="width: 100%" v-loading="loading">
          <el-table-column label="Nama" width="200">
            <template slot-scope="scope">
              <p
                style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap; cursor: pointer; color: #004689; font-weight: 500; font-size: 14px;padding-top: 14px;">
                {{ scope.row.nama }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="NIP" width="120">
            <template slot-scope="scope">
              {{ scope.row.nip }}
            </template>
          </el-table-column>
          <el-table-column label="Jabatan" width="200">
            <template slot-scope="scope">
              {{ scope.row.jabatan }}
            </template>
          </el-table-column>
          <el-table-column label="Pemda Prov/Kab/Kota" width="200">
            <template slot-scope="scope">
              {{ scope.row.pemda }}
            </template>
          </el-table-column>
          <el-table-column label="Organisasi Daerah" width="200">
            <template slot-scope="scope">
              {{ scope.row.organisasi_daerah }}
            </template>
          </el-table-column>
          <el-table-column label="Unit Kerja" width="200">
            <template slot-scope="scope">
              {{ scope.row.unit_kerja }}
            </template>
          </el-table-column>
          <el-table-column label="No HP / WA" width="200">
            <template slot-scope="scope">
              {{ scope.row.no_hp }}
            </template>
          </el-table-column>
          <el-table-column label="Action" width="200">
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
    <el-tooltip class="item" effect="dark" content="Buat User Baru" placement="top-start">
      <a class="float" @click="tambahDialog = true">
        <i class="el-icon-plus my-float"></i>
      </a>
    </el-tooltip>
    <!-- End floating button-->

    <el-dialog title="Tambah User" :visible.sync="tambahDialog"
      :width="$store.state.drawer.mode === 'mobile' ? '80%' : '60%'">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="Nama Lengkap">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="NIP">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Nama Pemda / Pemprov">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Organisasi Perangkat Daerah">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Jabatan">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Unit Kerja">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Organisasi Perangkat Daerah">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="No HP / WA">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Konfirmasi Password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {

    },
    data() {
      return {
        tambahDialog: false,
        loading: false,
        page: 1,
        total: 2300,
        info: "My Default Content",
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
        ],
        config: {
          events: {
            'froalaEditor.initialized': function () {
              console.log('initialized')
            }
          }
        },
        model: 'Edit Your Content Here!'
      }
    },
    mounted() {
      for (let i = 1; i <= 10; i++) {
        this.tableData.push({
          id: i,
          nama: 'Fulanah Bin Fulan',
          nip: '1603093',
          email: 'fulan@mail.com',
          no_hp: '089887766234',
          pemda: 'Pemprov Jawa Barat',
          organisasi_daerah: 'Persatuan Pemuda Indonesia',
          unit_kerja: 'Satu Dua',
          jabatan: 'Direktur'
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

<template>
  <div>
    <div class="header bg-danger pb-6" style="z-index:-1">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
          <h1 class="heading">Kagiatan</h1>
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
          <el-table-column label="Judul" width="300">
            <template slot-scope="scope">
              <p
                style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap; cursor: pointer; color: #004689; font-weight: 500; font-size: 14px;padding-top: 14px;">
                {{ scope.row.judul }}
              </p>
            </template>
          </el-table-column>
          <el-table-column label="Dilihat">
            <template slot-scope="scope">
              {{ scope.row.pelasksana_kegiatan }}
            </template>
          </el-table-column>
          <el-table-column label="Waktu Kegiatan">
            <template slot-scope="scope">
              {{ scope.row.waktu_pelaksanaan }}
            </template>
          </el-table-column>
          <el-table-column label="Tanggal Posting">
            <template slot-scope="scope">
              {{ scope.row.waktu_pelaksanaan }}
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
    <el-tooltip class="item" effect="dark" content="Buat Kegiatan Baru" placement="top-start">
      <a class="float" @click="tambahDialog = true">
        <i class="el-icon-plus my-float"></i>
      </a>
    </el-tooltip>
    <!-- End floating button-->

    <el-dialog title="Tambah Kegiatan" :visible.sync="tambahDialog"
      :width="$store.state.drawer.mode === 'mobile' ? '80%' : '60%'">
      <el-form label-width="auto" ref="form" :model="sizeForm" size="mini">
        <el-form-item label="Judul Kegiatan">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Waktu Pelaksanaan">
          <el-date-picker type="datetimerange" start-placeholder="Mulai" end-placeholder="Selesai"
            :default-time="['12:00:00']">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Deskripsi">
          <client-only>
            <froala :tag="'textarea'" :config="config" v-model="model"></froala>
          </client-only>
        </el-form-item>
        <el-form-item label="Evidence">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/">
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
            },
            toolbarSticky: false,
            toolbarBottom: {
              'moreText': {
                'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily',
                  'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'
                ]
              },
              'moreParagraph': {
                'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL',
                  'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'
                ]
              },
              'moreRich': {
                'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome',
                  'specialCharacters', 'embedly', 'insertFile', 'insertHR'
                ]
              },
              'moreMisc': {
                'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html',
                  'help'],
                'align': 'right',
                'buttonsVisible': 2
              }
            }
          }
        },
        model: 'Edit Your Content Here!'
      }
    },
    mounted() {
      for (let i = 1; i <= 10; i++) {
        this.tableData.push({
          id: 1,
          judul: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime autem minus minima voluptatibus iusto! Ipsam neque molestiae minima dolore atque corporis, adipisci necessitatibus voluptatum a tempore accusamus vitae, aspernatur cumque!',
          waktu_pelaksanaan: '01/10/2020 13:23:12',
          pelasksana_kegiatan: 123
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

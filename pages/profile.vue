<template>
  <div>
    <div class="header bg-danger pb-6" style="z-index:-1">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
          <h1 class="heading">Profil</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--5">
      <div class="row">
        <div class="col-md-4">
          <el-card style="margin-top:20px">
            <div class="text-center">
              <el-avatar size="large" style="width:100px; height:100px"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <br>
              <h3>Annisa (169302)</h3>
              <span class="badge badge-danger">Direktur Utama</span>
            </div>
          </el-card>
        </div>
        <div class="col-md-8">
          <el-card style="margin-top:20px">
            <div slot="header">
              <h4>Ubah Profil</h4>
            </div>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="Nama Lengkap">
                <el-input v-model="form.name"></el-input>
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
              <hr>
              Ganti Password
              <hr style="margin-bottom:10px">
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
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style lang="scss" scoped>
  .heading {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

</style>

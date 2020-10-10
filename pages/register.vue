<template>
  <div class="card border-0">
    <div class="card-header bg-transparent logo" style="border: none">
      <a class="navbar-brand" style="margin-bottom: 20px">
        <img src="../assets/img/logo-serdadu.png" width="auto" height="40" />
      </a>
      <div class="text-center text-muted mb-4">
        - Daftar Akun -
      </div>
    </div>
    <div class="card-body">
      <form role="form" @submit.prevent="login()">
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="Nama Lengkap"
              type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="NIP" type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="Email" type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required
              placeholder="Nama Pemda Prvo/Kab/Kota" type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required
              placeholder="Organisasi Perangkat Daerah" type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="Jabatan" type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="Unit Kerja"
              type="text">
          </div>
        </div>
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input class="form-control"  name="username" required placeholder="No HP / Whatsapp"
              type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
            </div>
            <input class="form-control" v-model="password" name="password" required placeholder="Password"
              type="password">
          </div>
        </div>
        <div class="text-center">
          <!-- <button type="submit" class="btn btn-primary">Login</button> -->
          <el-button type="danger" :loading="showLoading" class="my-4" round native-type="submit">Register
          </el-button>
          <br>
          <router-link to="/login">
            <a href="#">Sudah punya akun?</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    data() {
      return {
        username: '',
        password: '',
        showLoading: false,
        errorMessage: ''
      }
    },
    mounted() {
      // this.getCompany()
    },
    methods: {
      async login() {
        // this.showLoading = true;
        // try {
        //     await this.$auth.loginWith('local', {
        //         data: {
        //             "username": this.username,
        //             "password": this.password,
        //             "kd_comp": this.kd_comp
        //         }
        //     }).catch(e => {
        //         console.log(e);
        //         // this.errorMessage = e.response.data.message
        //         this.$notify.error({
        //             title: 'Error',
        //             message: e.response.data.message
        //         });
        //     });
        //     this.showLoading = false;
        //     if (this.$auth.loggedIn) {
        //         this.$notify.success({
        //             title: 'Berhasil Login',
        //             message: 'Selamat Datang! :)'
        //         });
        //         this.$router.push('/')
        //     }
        // } catch (e) {
        //     console.log(e)
        //     this.showLoading = false;
        // }
      }
    },
    watch: {
      username(newValue, oldValue) {
        this.errorMessage = '';
      },
      password(newValue, oldValue) {
        this.errorMessage = '';
      },
      kd_comp(newValue, oldValue) {
        console.log(newValue)
      }
    },
  }

</script>



<style scoped>
  .header {
    border-radius: 0;
  }

  .input-group {
    box-shadow: none;
  }

  .form-control,
  .input-group-text {
    background-color: #eee;
  }

  .input-group-text {
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }

  .form-control {
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
  }

  .card {
    box-shadow: none !important;
  }

</style>

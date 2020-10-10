<template>
  <div style="overflow-x:hidden; min-height:100vh">
    <vs-navbar center-collapsed v-model="active">
      <template #left>
        <img src="~assets/img/logo-serdadu.png" width="100" height="auto" alt="">
      </template>
      <template #right>
        <router-link to="/login">
          <vs-button flat danger>Login</vs-button>
        </router-link>
        <router-link to="/register">
          <vs-button danger>Register</vs-button>
        </router-link>
      </template>
    </vs-navbar>

    <div class="header bg-danger pb-6" style="z-index:-1; padding-top:100px">
      <div class="container-fluid">
        <div class="header-body text-center">
          <!-- Card stats -->
          <h1 class="heading">Selamat Datang di SERDADU</h1>
          <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa ex accusamus nam
            ad temporibus magni illum, et nostrum sequi possimus? <br>Quaerat neque repellat eligendi excepturi
            exercitationem similique mollitia magni!</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="col-md-12">
        <vs-card-group>
          <vs-card v-for="card in 5" :key="'vsc-'+card" style="margin-top:25px">
            <template #title>
              <h3>Pot with a plant</h3>
            </template>
            <template #img>
              <img src="../assets/img/gambar1.jpg" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat'></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>
      </div>
      <div class="row" style="margin-top:20px">
      <div class="col-md-12">
        <h1>Berita Terkini</h1>
      </div>
      <div class="col-md-8">
        <el-card v-for="berita in 5" :key="'brt-'+berita" style="margin-top:20px">
          <div slot="header">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
          </div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br>
          <vs-button danger>Selengkapnya</vs-button>
        </el-card>

        <vs-pagination style="margin-top:20px" color="danger" v-model="page" :length="20" />
      </div>
      <div class="col-md-4">
        <el-card style="margin-top:20px">
          <h2>Informasi</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </el-card>
      </div>
    </div>
    </div>
    <div class="row" style="margin-bottom:20px">
      <div class="col-md-12 text-center">
        &copy; 2020 <a href="#" class="font-weight-bold ml-1 text-danger">
          Badan Pengelolaan Ideologi Pancasila</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 'guide',
         page: 1
      }
    },
  }

</script>

<style scoped>
  .heading {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    margin-top: -70px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    overflow: hidden;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center;
  text-align: center; */
  }

  html {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>

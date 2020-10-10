<template>
  <div>
    <div class="header bg-danger pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <!-- Card stats -->
          <div class="row" style="padding-top:20px">
            <div class="col-xl-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0"><i class="las la-book-reader"></i> Laporan
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.learning_hours.current)}}
                      </span>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span
                      :class="{'text-precentage': true, 'text-success': summary.learning_hours.type == 'up', 'text-danger': summary.learning_hours.type == 'down', 'mr-2': true}"><i
                        :class="{'las': true, 'la-angle-double-up': summary.learning_hours.type == 'up', 'la-angle-double-down': summary.learning_hours.type == 'down'}"></i>
                      <b>{{summary.learning_hours.precentage}}%</b></span>
                    <span class="text-nowrap">Dari bulan lalu</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0"><i class="las la-chalkboard-teacher"></i>
                        Kegiatan</h5>
                      <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.sharing_hours.current)}}
                      </span>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span
                      :class="{'text-precentage': true, 'text-success': summary.sharing_hours.type == 'up', 'text-danger': summary.sharing_hours.type == 'down', 'mr-2': true}"><i
                        :class="{'las': true, 'la-angle-double-up': summary.sharing_hours.type == 'up', 'la-angle-double-down': summary.sharing_hours.type == 'down'}"></i>
                      <b>{{summary.sharing_hours.precentage}}%</b></span>
                    <span class="text-nowrap">Dari bulan lalu</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0"><i class="las la-coins"></i> Berita</h5>
                      <span class="h2 font-weight-bold mb-0">{{numberWithCommas(summary.point.current)}}</span>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span
                      :class="{'text-precentage': true, 'text-success': summary.point.type == 'up', 'text-danger': summary.point.type == 'down', 'mr-2': true}"><i
                        :class="{'las': true, 'la-angle-double-up': summary.point.type == 'up', 'la-angle-double-down': summary.point.type == 'down'}"></i>
                      <b>{{summary.point.precentage}}%</b></span>
                    <span class="text-nowrap">Dari bulan lalu</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">


      <div class="row">
        <div class="col-md-6">
          <!-- <ChartPieCoursesByType /> -->
        </div>

        <div class="col-md-6">
          <!-- <ChartPieCoursesByCategory /> -->
        </div>

      </div>


      <!-- popular couses -->
      <div class="row">
        <div class="col-xl-6">
          <el-card style="margin-top:20px">
            <!-- Card header -->
            <div slot="header" class="clearfix">
              <!-- Title -->
              <h5 class="h3 mb-0">Berita Populer</h5>
            </div>
              <el-table :data="popularCourses" stripe v-loading="loadingPopularCourses">
                <el-table-column type="index" width="50" align="center">
                </el-table-column>
                <el-table-column label="Judul Berita">
                  <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" :content="scope.row.title" placement="top">
                      <!-- <router-link :to="`/admin/pembelajaran/kursus/view?id=${scope.row.id}`"> -->
                        <el-link type="primary" class="text-truncate">{{scope.row.title}}</el-link>
                      <!-- </router-link> -->
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column label="Dibaca" width="130" align="center">
                  <template slot-scope="scope">
                    {{scope.row.total_completed}}
                  </template>
                </el-table-column>
              </el-table>
          </el-card>
        </div>
        <div class="col-xl-6">
          <el-card class="mt-10" style="margin-top:20px">
            <!-- Card header -->
            <div slot="header" class="clearfix">
              <!-- Title -->
              <h5 class="h3 mb-0">Laporan Per Kandungan Pancasila</h5>
            </div>
            <client-only>
              <ChartDoughnut />
            </client-only>
          </el-card>
        </div>
      </div>

      <div class="row">
          <div class="col-md-12">
              <el-card style="margin-top:20px">
                  <div class="row">
                    <div class="col-md-6">
                      <ChartLine />
                    </div>
                    <div class="col-md-6">
                      <ChartBar />
                    </div>
                  </div>
              </el-card>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartBar from "@/components/chart/chart-bar";
  import ChartDoughnut from "@/components/chart/chart-doughnut";
  import ChartLine from "@/components/chart/chart-line";
  export default {
    components: {
      ChartBar,
      ChartDoughnut,
      ChartLine
    },
    layout: 'admin',
    data() {
      return {
        summary: {
          point: {
            type: "up",
            current: 425,
            previous: 0,
            precentage: 12
          },
          learning_hours: {
            type: "up",
            current: 674,
            previous: 34,
            precentage: 0
          },
          sharing_hours: {
            type: "up",
            current: 724,
            previous: 0,
            precentage: 23
          },
          course_completed: {
            type: "up",
            current: 0,
            previous: 0,
            precentage: 0
          }
        },
        topUsers: [],
        popularCourses: [
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
            {
                title: 'Lorem ipsum dolor set amet',
                total_completed: 235
            },
        ],
        loadingTopUsers: false,
        loadingPopularCourses: false
      }
    },
    mounted() {
      // this.getSummary();
      // this.getTopUsers()
      // this.getPopularCourses()
    },
    methods: {
      async getSummary() {
        await this.$axios.get('/admin/summary').then(response => {
          if (response.data.success) {
            this.summary = response.data.data
          }
        }).catch(e => {
          console.log(e)
        })
      },
      async getTopUsers() {
        await this.$axios.get('/topusers').then(response => {
          if (response.data.success) {
            this.topUsers = response.data.data
          }
        }).finally(() => {
          this.loadingTopUsers = false
        })
      },
      async getPopularCourses() {
        this.loadingPopularCourses = true;
        await this.$axios.get('/popularcourses').then(response => {
          if (response.data.success) {
            this.popularCourses = response.data.data
          }
        }).finally(() => {
          this.loadingPopularCourses = false
        })
      }
    },
  }

</script>

<style lang="scss" scoped>
  .text-precentage {
    font-size: 14px;
    font-weight: bold
  }

  span.top-nama>a>span.el-link--inner {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    width: 150px !important;
  }

</style>

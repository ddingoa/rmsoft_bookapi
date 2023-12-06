<template>
  <v-form
    style="padding-top: 200px; height: 100%; background-color: aliceblue;"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="7">
         <v-card
            class="mx-auto"
            height="500px"
            style="background-color: #191d21"
          >
           <v-img
             aspect-ratio="16/9"
             cover
             src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
           ></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
          <v-card
      class="mx-auto"
      max-width="600"
      height="500px"
    >
      <v-card-text
        style="margin: 20px 20px 20px 20px"
      >
        <v-form
          style="padding-top: 60px"
        >
          <v-text-field
            label="아이디"
            id="email"
            name="email"
            prepend-icon="mdi-account"
            type="text"
          ></v-text-field>

          <v-text-field

            id="password"
            label="비밀 번호"
            name="password"
            prepend-icon="mdi-lock"
            type="password"

          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary"
               block
               @click="loginSubmit"
        >Login
        </v-btn>
      </v-card-actions>
    </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      userId: null,
      userPassword: null,
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.userId = this.userId;
      saveData.userPassword = this.userPassword;

        const menuSetList = [{
          path : '/home',
          name : 'Home',
          component : () => import('@/views/Home.vue'),
          mdiicon : 'mdi-ballot',
          menuname : '대시보드',
        },{
          path : '/barchart',
          name : 'barchart',
          component : () => import('@/chart/def_barchart/BarChart.vue'),
          mdiicon : 'mdi-ballot',
          menuname : '차트뷰'
        },{
          path : '/barchart',
          name : 'barchart',
          component : () => import('@/chart/def_barchart/BarChart.vue'),
          mdiicon : 'mdi-ballot',
          menuname : '차트뷰'
        },{
          path : '/barchart',
          name : 'barchart',
          component : () => import('@/chart/def_barchart/BarChart.vue'),
          mdiicon : 'mdi-ballot',
          menuname : '차트뷰'
        },{
          path : '/barchart',
          name : 'barchart',
          component : () => import('@/chart/def_barchart/BarChart.vue'),
          mdiicon : 'mdi-ballot',
          menuname : '차트뷰'
        }
        ]

        this.$store.commit("setMainmenu",menuSetList);



      this.$router.replace("/home")
      // try {
      //   this.$axios
      //     .post(HOST + "/signin", JSON.stringify(saveData), {
      //       headers: {
      //         "Content-Type": `application/json`,
      //       },
      //     })
      //     .then((res) => {
      //       if (res.status === 200) {
      //         // 로그인 성공시 처리해줘야할 부분
      //       }
      //     });
      // } catch (error) {
      //   console.error(error);
      // }
    },
  },
};
</script>

<style scoped>

</style>

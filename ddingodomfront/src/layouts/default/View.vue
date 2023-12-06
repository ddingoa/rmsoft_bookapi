<template>

    <v-navigation-drawer
      expand-on-hover
      v-model="$store.state.drawer"
      rail
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in menulist"
          :value="item.name"
          :title="item.menuname"
          :prepend-icon="item.mdiicon"
          router :to="{ name: item.name }"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
    >
      <router-view
        style="padding: 20px 20px 0;"
      />
    </v-main>

    <v-footer app>
      <span style=" font-size:10px;">© 2023 ULSystem Co., Ltd. All rights reserved.</span>
    </v-footer>

</template>

<script>
import store from "@/commonStore/store";

export default {
  data: () => ({
    iconflag: true,
    drawer: true,
    value: 1,
    menulist : [],
  }),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
  created() {
    this.menulist = store.state.mainmenu;
  },
  methods: {
  }
};
</script>

<style scoped>
* {
  font-family: SpoqaHanSansNeoBold, SwitzerBlack, sans-serif;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  color: #191d21;
}
</style>

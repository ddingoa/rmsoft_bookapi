<template>
  <v-app-bar
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click.stop="$store.state.drawer = !$store.state.drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title style="flex: 0.3" >DDoginoDM</v-app-bar-title>

    <div style="height: 100%" v-for="item in menulistItem">
      <v-menu
        open-on-hover
        bottom
        offset-y
        style="width: 1200px"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="#002E75"
            dark
            v-bind="props"
            height="100%"
          >
            {{item.mainname}}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(menu,index) in item.items"
            :key ="index"
            :value="menu.name"
            :prepend-icon="menu.icon"
            router :to="{ name: menu.name }"
          >
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

    <v-tooltip
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="mx-2"
          color="red"
          fab
          small
          v-bind="props"
          @click="logOutUser()"
        >
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </template>
      <span>로그아웃</span>
    </v-tooltip>

  </v-app-bar>
</template>

<script>
import store from "@/commonStore/store";

export default {
  data: () => ({
    iconflag: true,
    drawer: true,
    value: 1,
    menulistItem: [],
  }),
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return 'indigo'
        default:
          return 'blue-grey'
      }
    },
  },
  created() {
    this.menulistItem = store.state.menu;
    // this.$store.commit("drawerSetData", {drawer: false});
  },
  methods: {
    logOutUser() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
</style>

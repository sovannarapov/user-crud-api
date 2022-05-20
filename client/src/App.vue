<template>
  <v-app>
    <AppBar />

    <v-main>
        <UserList />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import UserList from "./components/UserList.vue";

export default {
  name: "App",
  components: {
    AppBar,
    UserList,
  },
};
</script>

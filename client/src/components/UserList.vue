<template>
  <v-container>
    <v-card>
      <v-card-title>
        <UserRegister />
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table :headers="headers" :items="users" :search="search">
        <template #top>
          <v-dialog v-model="dialogDetail" max-width="500px">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2 mb-4"
                >User Detail
              </v-card-title>
              <v-card-text class="text-h5">
                <div class="my-4">
                  <span>First Name: </span>
                  <span>{{ userDetail.first_name }}</span>
                </div>
                <div class="my-4">
                  <span>Last Name: </span>
                  <span>{{ userDetail.last_name }}</span>
                </div>
                <div class="my-4">
                  <span>Email: </span>
                  <span>{{ userDetail.email }}</span>
                </div>
                <div class="my-4">
                  <span>Created At: </span>
                  <span>{{ userDetail.created_at }}</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDialogDetail"
                  >Close</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon @click="getUserDetail(item)">mdi-eye</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import UserRegister from "./UserRegister.vue";

const userProxy = "http://localhost:3000/users";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "_id" },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      users: [],
      dialogDetail: false,
      userDetail: {}
    };
  },
  components: {
    UserRegister,
  },
  methods: {
    async getUsers() {
      await axios
        .get(userProxy)
        .then((res) => {
          const { data } = res;
          this.users = data;
        })
        .catch((err) => console.log("error", err));
    },
    getUserDetail(item) {
      this.userDetail = item
      this.dialogDetail = true;
    },
    closeDialogDetail() {
      this.dialogDetail = false;
    },
  },
  mounted() {
    this.getUsers();
  },
  watch: {
    users() {
      this.getUsers();
    },
  },
};
</script>

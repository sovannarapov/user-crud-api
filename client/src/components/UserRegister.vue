<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        <v-icon left>mdi-account-plus</v-icon>
        <span>Add User</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add New User</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="First Name*"
                required
                v-model="user.firstName"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Last Name*"
                required
                v-model="user.lastName"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required v-model="user.email" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

const userProxy = "http://localhost:3000/users";

export default {
  data() {
    return {
      dialog: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        await axios.post(userProxy, {
          first_name: this.user.firstName,
          last_name: this.user.lastName,
          email: this.user.email,
        });
        this.user = {};
        this.dialog = false;
      } catch (err) {
        console.error(
          "First name should not be empty \n  Last name should not be empty \n  Email should not be empty",
        );
      }
    },
  },
};
</script>

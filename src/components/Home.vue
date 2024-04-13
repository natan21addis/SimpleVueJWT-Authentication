<template>
  <div>
    <h3 v-if="user">Hi, {{ user.first_name }} {{ user.last_name }}</h3>
    <h3 v-else>You are not logged in</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'TaskHome',
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("http://localhost:3000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.user = response.data.user;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
};
</script>

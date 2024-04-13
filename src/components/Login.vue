<template>
   <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <div class="form-group">
         <label>Email</label>
         <input type="email" v-model="email" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
         <label>Password</label>
         <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <button class="btn btn-primary btn-block">Login</button>
   </form>
</template>

<script>
import axios from "axios";

export default {
   name: 'TaskLogin',
   data() {
     return {
       email: "",
       password: "",
     };
   },
   methods: {
     async handleSubmit() {
       try {
         const formData = {
           email: this.email.trim(), // Remove leading/trailing whitespaces
           password: this.password.trim(), // Remove leading/trailing whitespaces
         };
         const response = await axios.post("http://localhost:3000/login", formData);
         localStorage.setItem("token", response.data.token);
         this.$router.push("/");
       } catch (error) {
         console.error("Error logging in:", error);
       }
     },
   },
 };
 </script>

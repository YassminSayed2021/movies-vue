import { RouterLink } from 'vue-router';

import { onMounted } from 'vue';

import { RouterLink } from 'vue-router';
<template>
    <div class="container">
        <div class="card">
            
<div class="card-header">
    <h4>
        Users
        <RouterLink to="/users/ucreate" class="btn btn-primary float-end">Create User</RouterLink>
    </h4>
</div>
<div class="card-body">
    <table class="table table-bordered">
<thead>
<tr>
    <th>Id</th>
    <th>Name</th>
    <th>E-mail</th>
    <th>Birth Date</th>
</tr>

</thead>
<tbody v-if="this.users.length > 0">
    <tr v-for="(user,index) in this.users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.birth_date }}</td>
    </tr>
</tbody>
<tbody v-else>
<tr>
<td colspan="7">Loading...</td>
</tr>
</tbody>

</table>
</div>

</div>
    </div>
  </template>
  

  <script>
  import axios from 'axios'
export default{
    name: 'users',
    data(){
        return{
            users:[]
        }
    },
    mounted(){
this.getusers();
    },
    methods:  {
getusers(){
    axios.get('http://localhost:8000/api/users').then(res=>{
this.users=res.data.users 
    });
}
    },
   
}
</script>
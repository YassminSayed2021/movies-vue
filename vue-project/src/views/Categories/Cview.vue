import { RouterLink } from 'vue-router';

import { onMounted } from 'vue';

import { RouterLink } from 'vue-router';
<template>
    <div class="container">
        <div class="card">
            
<div class="card-header">
    <h4>
        Categories
        <RouterLink to="/categories/ccreate" class="btn btn-primary float-end">Create Category</RouterLink>
    </h4>
</div>
<div class="card-body">
    <table class="table table-bordered">
<thead>
<tr>
    <th>Title</th>
    <th>Editing</th>
    <th>Deleting</th>

</tr>

</thead>
<tbody v-if="this.categories.length > 0">
    <tr v-for="(cat,index) in this.categories" :key="index">
        <td>{{ cat.ctitle }}</td>
        
        <td><RouterLink :to="{path:'/categories/'+cat.id+'/edit'}" class="btn btn-success">Edit Category</RouterLink></td>

       <td> <button type="button" @click="deleteCategory(cat.id)" class="btn btn-danger ">Delete Category</button></td>
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
    name: 'Categories',
    data(){
        return{
            categories:[]
        }
    },
    mounted(){
this.getcat();
    },
    methods:  {
getcat(){
    axios.get('http://localhost:8000/api/cat').then(res=>{
this.categories=res.data.categories

     
    });
},
deleteCategory(catId){
// console.log(movieId);
      if(confirm('Are you sure you want to delete this movie')){
        axios.delete(`http://localhost:8000/api/cat/${catId}/delete`).then(res=>{
            alert(res.data.message); 
            this.getcat();

        }) 
      }
},
    },
   
}
</script>
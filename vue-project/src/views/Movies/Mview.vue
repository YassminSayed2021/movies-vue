
import { RouterLink } from 'vue-router';

import { onMounted } from 'vue';

import { RouterLink } from 'vue-router';
<template>
    <div class="container">
        <div class="card">
            
<div class="card-header">
    <h4>
        Movies
        <RouterLink to="/movies/Mcreate" class="btn btn-primary float-end">Create Movie</RouterLink>
    </h4>
</div>
<div class="card-body">
    <table class="table table-bordered">
<thead>
    <tr>
    <th>Image</th>
    <th>ID</th>
    <th>Title</th>
    <th>Description</th>
    <th>Rate</th>
    <th>Editing</th>
    <th>Deleting</th>

</tr>

</thead>
<tbody v-if="this.movies.length > 0">
    <tr v-for="(movie,index) in this.movies" :key="index">
        <td><img :src="movie.image" alt="movie image" width="200"  height="100"></td>
        <td>{{ movie.id }}</td>
        <td>{{ movie.mtitle }}</td>
        <td>{{ movie.desc }}</td>
        <td>{{ movie.rate }}</td>
        <!-- <td>{{ movie.image }}</td> -->

        <td><RouterLink :to="{path:'/movies/'+movie.id+'/edit'}" class="btn btn-success">Edit Movie</RouterLink></td>
       <td> <button type="button" @click="deleteMovie(movie.id)" class="btn btn-danger ">Delete Movie</button></td>

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
    name: 'movies',
    data(){
        return{
            movies:[]
        }
    },
    mounted(){
this.getMovies();
    },
    methods:  {
getMovies(){
    axios.get('http://localhost:8000/api/cr_mov').then(res=>{
this.movies=res.data.movies

     
    });
},
deleteMovie(movieId){
// console.log(movieId);
      if(confirm('Are you sure you want to delete this movie')){
        axios.delete(`http://localhost:8000/api/cr_mov/${movieId}/delete`).then(res=>{
            alert(res.data.message); 
            this.getMovies();

        }) 
      }
},
    },
   
}
</script>
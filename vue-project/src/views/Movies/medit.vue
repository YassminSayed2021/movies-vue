<template>
    <div class="container mt-5 " >
      <div class="card p-3">
        <div class="card-header">Edit Movie</div>
        <div class="mb-3">
            <label for="">Title</label>
            <input type="text" v-model="model.movie.mtitle" class="form-control"/>
            </div>
            <div class="mb-3">
            <label for="">Description</label>
            <input type="text" v-model="model.movie.desc" class="form-control"/>
</div>
<div class="mb-3">
            <label for="">Rate</label>
            <input type="text" v-model="model.movie.rate" class="form-control"/>
</div>
<div class="mb-3">
            <label for="">Image</label>
            <input type="text" v-model="model.movie.image" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="updatemovie" class="btn btn-primary">
                    update
                </button>
            
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { routeLocationKey } from 'vue-router';
export default{
    name:'movieedit',

    data(){
return{
    movieId:'',
    model:{
        movie:{
            mtitle:'',
            desc:'',
            rate:'',
            image:''

        }
    }
}
    },

    mounted(){
        this.movieId = this.$route.params.id;
        this.getMovieData(this.$route.params.id);

    },

    methods:{

        getMovieData(movieId){
            axios.get(`http://localhost:8000/api/cr_mov/${movieId}/edit`)
            .then(res=>{
                console.log(res.data.movies);

                this.model.movie = res.data.movies
            })
        },

        updatemovie(){
var mythis=this;

            axios.put(`http://localhost:8000/api/cr_mov/${this.movieId}/edit`,this.model.movie).then(res=>{
                          alert(res.data.message);
});



         }}
         }
    

</script>
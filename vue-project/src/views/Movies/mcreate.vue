<template>
    <div class="container mt-5 " >
      <div class="card p-3">
        <div class="card-header">Create Movie</div>
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
            <label for="">Image url</label>
            <input type="text" v-model="model.movie.image" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="savemovie" class="btn btn-primary">
                    Submit
                </button>
            
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'moviecreate',

    data(){
return{
  
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
    methods:{
        savemovie(){
var mythis=this;

            axios.post('http://localhost:8000/api/cr_mov',this.model.movie).then(res=>{
                          alert(res.data.message);

                       this.model.movie={
                        mtitle:'',
                        desc:'',
                        rate:'',
                        image:''
        }});



         }}
         }
    

</script>
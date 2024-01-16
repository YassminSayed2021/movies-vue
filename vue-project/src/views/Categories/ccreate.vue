<template>
    <div class="container mt-5 " >
      <div class="card p-3">
        <div class="card-header">Create category</div>
        <div class="mb-3">
            <label for="">Title</label>
            <input type="text" v-model="model.category.ctitle" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="savecat" class="btn btn-primary">
                    Submit
                </button>
            
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'catcreate',

    data(){
return{
  
    model:{
        category:{
            ctitle:'',

        }
    }
}
    },
    methods:{
        savecat(){
var mythis=this;

            axios.post('http://localhost:8000/api/cat',this.model.category).then(res=>{
                          alert(res.data.message);

                       this.model.category={
                        ctitle:'',
        }});



         }}
         }
    

</script>
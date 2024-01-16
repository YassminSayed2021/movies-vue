<template>
    <div class="container mt-5 " >
      <div class="card p-3">
        <div class="card-header">Edit Movie</div>
        <div class="mb-3">
            <label for="">Title</label>
            <input type="text" v-model="model.category.ctitle" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="updateCategory" class="btn btn-primary">
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
    name:'catedit',

    data(){
return{
    catId:'',
    model:{
        category:{
            ctitle:'',
        }
    }
}
    },

    mounted(){
        this.catId = this.$route.params.id;
        this.getCatData(this.$route.params.id);

    },

    methods:{

        getCatData(catId){
            axios.get(`http://localhost:8000/api/cat/${catId}/edit`)
            .then(res=>{
                console.log(res.data.categories);

                this.model.category = res.data.categories
            })
        },

        updateCategory(){
var mythis=this;

            axios.put(`http://localhost:8000/api/cat/${this.catId}/edit`,this.model.category).then(res=>{
                          alert(res.data.message);
});



         }}
         }
    

</script>
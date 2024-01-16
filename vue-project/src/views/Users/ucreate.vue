<template>
    <div class="container mt-5 " >
      <div class="card p-3">
        <div class="card-header">Create user</div>
        <div class="mb-3">
            <label for="">name</label>
            <input type="text" v-model="model.user.name" class="form-control"/>
            </div>
            <div class="mb-3">
            <label for="">email</label>
            <input type="text" v-model="model.user.email" class="form-control"/>
            </div>
            <div class="mb-3">
            <label for="">birth date</label>
            <input type="text" v-model="model.user.birthdate" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="saveuser" class="btn btn-primary">
                    Submit
                </button>
            
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'user',

    data(){
return{
  
    model:{
        user:{
            name:'',
            email:'',
            birthdate:'',

        }
    }
}
    },
    methods:{
        saveuser(){
            axios.post('http://localhost:8000/api/users',this.model.user).then(res=>{
                          alert(res.data.message);

                       this.model.user={
                        name:'',
                        email:'',
                        birthdate:'',
        }});



         }}
         }
    

</script>
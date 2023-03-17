<template>
    <div class="container">
        <h2>Update Product</h2>
        <input type="text" v-model="values.name" />
        <input type="text" v-model="values.observation">
        <input type="file" @change="onFileChange">
        <img v-if="values.photo"  :src="values.photo" class="img-fluid rounded-start" />
        <input type="text" v-model="values.price"  >
        <!-- <input type="select" v-model="values.size"  > -->
        
        <div class="form-group">
            <label for="selectSize" class="form-label mt-4">New Size. Current Size: {{ props.data.size }}</label>
            <select class="form-select" id="selectSize" v-model="values.size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
            </select>
        </div>
        
        <button @click.prevent="updateProduct" type="submit" class="btn btn-info btn-width">Actualizar</button>
        
        
    </div>
    
</template>
<script setup>
    import { defineProps,reactive,inject } from 'vue';
    import axios from 'axios';
    import { useRoute,useRouter } from 'vue-router'
    
    const props = defineProps({data : Object});
    // console.log( props.data.size)
    const route = useRoute()
    const router = useRouter()
    
    const id = route.params.id
    
    const  token =  inject('token');
    
    let url = `https://eventos.ec/api/products/${id}`
    
    const values = reactive({
        name: props.data.name,
        observation: props.data.observation,
        photo: props.data.photo,
        price: props.data.price,
        size: props.data.size
    })
    
    const config = {
        headers: { 
            'Authorization': `Bearer ${ token._value.token }`
        }
    };
    
    function updateProduct(){
        // console.log(url)
        // console.log(values)
        // console.log(config)
        
        
        axios.patch(url,values,config)
        .then(()=>{
            alert("Producto actualizado")
            router.push({name:'home'})
        })
    }
    
    
    function onFileChange (event){
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            values.photo = reader.result;
        };
        reader.readAsDataURL(file);
    }
</script>
<style scoped>
.img-fluid{
    height: 200px;
}

</style>
<template>
    <div class="container">
        <h2>Update Product</h2>
        <input type="text" v-model="newProduct.name" />
        <input type="text" v-model="newProduct.observation">
        <input type="file" @change="onFileChange">
        <img v-if="newProduct.photo"  :src="newProduct.photo" class="img-fluid rounded-start" />
        <input type="text" v-model="newProduct.price"  >
        
        <div class="form-group">
            <label for="selectSize" class="form-label mt-4">Size</label>
            <select class="form-select" id="selectSize" v-model="newProduct.size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
            </select>
        </div>
        
        <button @click.prevent="createProduct" type="submit" class="btn btn-info btn-width">Crear</button>
        
        
    </div>
    
</template>
<script setup>
    import { reactive,inject } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router'
    

    const router = useRouter()
    
    
    const  token =  inject('token');
    
    let url = `https://eventos.ec/api/products`
    
    const newProduct = reactive({
        name: "",
        observation: "",
        photo: "",
        price: "",
        size: ""
    })
    
    const config = {
        headers: { 
            'Authorization': `Bearer ${ token._value.token }`
        }
    };
    
    function createProduct(){
        // console.log(newProduct)
        axios.post(url,newProduct,config)
        .then(()=>{
            alert("Producto creado")
            router.push({name:'home'})
        })
    }
    
    
    function onFileChange (event){
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            newProduct.photo = reader.result;
        };
        reader.readAsDataURL(file);
    }
</script>
<style scoped>
/* .img-fluid{
    height: 200px;
} */

</style>
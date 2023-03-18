<template>

    <form class="container-fluid row p-4">
        
        <h2>Add Product</h2>
        <div class="form-floating mb-3">
            <input type="text" id="nameInput" class="form-control" v-model="newProduct.name" />
            <label for="nameInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" id="observationInput" class="form-control" v-model="newProduct.observation">
            <label for="observationInput">Observation</label>
        </div>
        <div class="form mb-3">
            <input type="file" id="fileInput"  @change="onFileChange">
            <img v-if="newProduct.photo"  :src="newProduct.photo" class="img-fluid rounded" />
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" v-model="newProduct.price"  >
            <label for="fileInput">price</label>
        </div>
        
        <div class="form-group">
            <label for="selectSize" class="form-label mt-4">Size</label>
            <select class="form-select" id="selectSize" v-model="newProduct.size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
            </select>
        </div>
        
        <div class="form-group">
            <button @click.prevent="createProduct" type="submit" class="btn btn-info btn-width">Crear</button>
            <button @click.prevent="$event=>$router.push(`/home`)" class="btn btn-dark m-3">
                Regresar
            </button>
        </div>
        
    </form>
    
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
.img-fluid{
    height: 200px;
}

</style>
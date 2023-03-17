<template>
    <div class="container">
        <!-- <h1 >Home</h1> -->
        
        <table class="table table-hover">
            <tr>
                <!-- <th v-for="(nameKey,index) in keys" :key="index"  scope="col">{{nameKey}}</th> -->
            </tr>
        </table>
        
    </div>

</template>
<script setup>

    import { inject,reactive } from 'vue';
    import axios from 'axios';
    
    const  token =  inject('token');
    
    let urlProductos = "https://eventos.ec/api/categories";
    
    let fetchProducts = reactive({
        products: null
    })
    
    let keysProducts =reactive(null)

    const config = {
        headers: { 
            'Authorization': `Bearer ${ token._value.token }`
        }
    };
    
    axios.get(urlProductos, config)
    .then(res=>{
        console.log(res.data.data)
        fetchProducts.products = res.data.data
        console.log(fetchProducts.products)
        keysProducts = Object.keys(fetchProducts.products)
    })
    .catch(error=>{
        console.log(error)
    })
    
    console.log(fetchProducts)
    console.log(keysProducts)
    
    

    // console.log(JSON.stringify(get))
    // console.log(get)
    
    
</script>
<style scoped>

</style>
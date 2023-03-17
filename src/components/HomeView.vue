<template>
    <div class="container p-3">
        <section class="container row justify-content-between ">
            <h1 class="col-4">Productos</h1>
            <button class="col-4 btn btn-outline-success" @click="$event=>$router.push(`/crear`)">Crear</button>
        </section>
        <table class="table table-hover">
            <thead>
                <tr>
                    <!-- <th >hola</th> -->
                    <Suspense>
                        <th v-for="(nameKey,index) in principalKeys" :key="index">{{ nameKey }}</th>
                        <!-- <th >Acciones</th> -->
                    </Suspense>
                </tr>
            </thead>
            <tbody>
                <Suspense>
                    <tr v-for="(product,index) in fetchProducts" :key="index">
                        <td>{{ product.id }} </td>
                        <td>{{ product.name }} </td>
                        <td>{{ product.photo }} </td>
                        <td>{{ product.price }} </td>
                        <td>{{ product.observation }} </td>
                        <td>{{ product.size }} </td>
                        <td>
                            <section class="container d-flex">
                                <button class="btn btn-info m-1"  @click="$event=>$router.push(`/product/${product.id}`)">ver</button>
                                <button class="btn btn-info m-1" @click="deleteProduct(product.id)">delete</button>
                            </section>
                        </td>
                    </tr>
                </Suspense>
            </tbody>
        </table>
    </div>

</template>
<script setup>

    import { inject,reactive } from 'vue';
    import axios from 'axios';
    
        const  token =  inject('token');
    
    
        let urlProductos = "https://eventos.ec/api/products";
        const config = {
            headers: { 
                'Authorization': `Bearer ${ token._value.token }`
            }
        };
        
        
        function deleteProduct(id){
            // console.log(`${urlProductos}/${id}`)
            if(id){
                // alert("eliminando porducto")
                axios.delete(`${urlProductos}/${id}`,config)
                .then(()=>{
                    alert("producto eliminado")
                    // getCurrentInstance().forceUpdate();
                })
            }
        }
        
        let res =  axios.get(urlProductos, config)
        // console.log(res)

        let fetchProducts = (await res).data.data
        reactive(fetchProducts.sort((a, b) => a.id - b.id));
        // console.log(fetchProducts)
        
        let  keysProducts = Object.keys(await fetchProducts[0])
        reactive(keysProducts.splice(6,0,"Actions"))
        
        let principalKeys = reactive(keysProducts.slice(0,7))
        // console.log(principalKeys)
</script>
<style scoped>

</style>     

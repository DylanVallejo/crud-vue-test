<template>
    <div class="container p-3">
        <section class="container row justify-content-between ">
            <h1 class="col-4">Productos</h1>
            <button class="col-4 btn btn-outline-success crear" @click="$event=>$router.push(`/crear`)">Crear</button>
            <input class="raw m-3 rounded" placeholder="Search"  type="text" v-model="filtro" />
        </section>
        <table class="table-secondary m-1">
            <thead>
                <tr >
                    <!-- <th >hola</th> -->
                    <Suspense>
                        <th v-for="(nameKey,index) in principalKeys" :key="index">{{ nameKey }}</th>
                        <!-- <th >Acciones</th> -->
                    </Suspense>
                </tr>
            </thead>
            <tbody>
                <Suspense>
                    <tr class="p-2 m-1" v-for="(product,index) in filteredList" :key="index">
                        <td>{{ product.id }} </td>
                        <td>{{ product.name }} </td>
                        <td>{{ product.photo }} </td>
                        <td>{{ product.price }} </td>
                        <td>{{ product.observation }} </td>
                        <td>{{ product.size }} </td>
                        <td>
                            <!-- <section class="container d-flex"> -->
                                <button class="btn btn-info m-1 rounded"  @click="$event=>$router.push(`/product/${product.id}`)">ver</button>
                            <!-- </section> -->
                        </td>
                    </tr>
                </Suspense>
            </tbody>
            <!-- <button :v-model="cantidad" @click="sumar">Siguiente</button> -->
        </table>
    </div>

</template>
<script setup>

    import { inject,reactive,ref,computed } from 'vue';
    import axios from 'axios';
    
    const  token =  inject('token');


    let urlProductos = "https://eventos.ec/api/products";
    const config = {
        headers: { 
            'Authorization': `Bearer ${ token._value.token }`
        }
    };
    
    let filtro = ref("")
    

    
    let res =  axios.get(urlProductos, config)
    // console.log(res)

    let fetchProducts = (await res).data.data
    reactive(fetchProducts.sort((a, b) => a.id - b.id));
    const clone = structuredClone(fetchProducts)

    
    const filteredList = computed(() => {
        const search = filtro.value.toLowerCase();
        return clone.filter((product) =>
            product.name.toLowerCase().includes(search)
        );
    });
    
    let  keysProducts = Object.keys(await fetchProducts[0])
    reactive(keysProducts.splice(6,0,"Actions"))
    
    let principalKeys = reactive(keysProducts.slice(0,7))
    
    // let cantidad = 5;
    
    // function sumar(){
    //     cantidad =  cantidad + cantidad
    //     return cantidad
    // }
    
    // let paginacion = filteredList.value.slice(0,cantidad)

    
    // function filtrar(){
        
    //     if(filtro.value === ""){
    //         console.log(filtro.value)
    //         console.log(fetchProducts)
            
    //         return fetchProducts
    //     }else if(filtro.value){
    //         console.log(filtro.value)
    //         return clone.filter((item)=>item.name.toLowerCase().includes(filtro.value.toLowerCase()))
    //     }
    // }
    
    // function filtrar() {
    //     if (!filtro.value) {
    //         return fetchProducts;
    //     } else {
    //         return clone.filter((item) => {
    //             const name = item.name ? item.name.toLowerCase() : '';
    //             const filter = filtro.value.toLowerCase();
    //         return name.includes(filter);
    //         });
    // }
    // }
</script>
<style scoped>
/* *{
    border:  1px solid red ;
} */
.crear{
    border-radius: 20px;
    font-size: 1.5em;
}
@media screen and (max-width: 400px) {
    .container .table-secondary{
        width: auto;
        position: absolute;
        left: 0;
        /* padding: 50px; */
        /* overflow-x: auto; */
        /* background-color: aquamarine; */
    }
    .btn-info{
        margin: 0px;
    }
}

</style>     

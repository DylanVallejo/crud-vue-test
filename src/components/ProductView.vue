<template>
    <div v-show="show === true" class="container-vista">
        <div class="card rounded-start">
            <div class="row ">
                <div class=" col-md-4 ">
                    <img class="img-fluid rounded-start" alt="Producto" src="data:image/png;base64,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 " >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{{product.name}}</h3>
                        <p class="card-text">{{ product.observation }}</p>
                        <p class="card-text">Price: {{ product.price }}$  </p>
                        <span class="text-end">Size: {{ product.size }}</span>
                        <p class="card-text"><small class="text-muted">Last update: {{product.updated_at.slice(0,10)}}</small></p>
                        <button class="btn btn-danger" @click="deleteProduct(product.id)">delete</button>
                        <button @click="$event=>$router.push(`/home`)" class="btn btn-dark">
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div v-show="show ===  false">        
        <ProductEdit :data = "product"  />
    </div>
    <button @click="editar()" class="btn btn-dark">
        <span v-if="show === true"> Actualizar Producto</span>
        <span v-if="show === false"> Ver Producto</span>
    </button>
</template>
<script setup>
    import { useRoute,useRouter } from 'vue-router'
    import { inject,ref} from 'vue';
    import axios from 'axios';
    import ProductEdit from './ProductEdit.vue';
    const router = useRouter()
    
    
    const  token =  inject('token');
    const route = useRoute()
    const id = route.params.id
    let show = ref(true)
    
    
    function editar(){
        show.value = !show.value 
        // console.log(show)
        
    }

    const config = {
        headers: { 
            'Authorization': `Bearer ${ token._value.token }`
        }
    };
    
    let url = `https://eventos.ec/api/products/${id}`
    // console.log(url)
    
    const detail = axios.get(url, config)
    console.log(detail)
    
    
    let product = (await detail).data.data
    // console.log(product)
    
    function deleteProduct(id){
        // console.log(`${urlProductos}/${id}`)
        if(id){
            // alert("eliminando porducto")
            axios.delete(`${url}`,config)
            .then(()=>{
                alert("producto eliminado")
                router.push(`/home`)
                // getCurrentInstance().forceUpdate();
            })
        }
    }
    
</script>
<style scoped>

.img-fluid{
    height: 100%;
    width: 100%;
}
.card-text{
    margin-bottom: 3px;
}
.container-vista{
    display: flex;
    /* background-color: aquamarine; */
    height: 100vh;
    width: 100%;
    padding: 1em;
    justify-content: center;
    align-items: center;
    position: relative;
}
.card{
    /* display: flex; */
    /* min-width: 500px; */
    /* max-width: 60%; */
    /* min-height: 20vh; */
    display: block;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.btn-dark{
    border-radius: 10px;
    position: absolute;
    bottom: 1em;
    right: 1em;
}
.btn-danger{
    border-radius: 10px;
    position: absolute;
    bottom: 1em;
    right: 10em;
}

@media screen and (max-width: 400px) {
    .btn-danger{
    border-radius: 10px;
    position: absolute;
    bottom: 1em;
    right: 7em;
}
}
</style>



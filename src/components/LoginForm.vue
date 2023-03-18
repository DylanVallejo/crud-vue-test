<template>
    <form class="container-fluid bg-image row">
        <div class="container imagen " >
            <section>
                <h2 class="first-title">Que bueno volver a verte</h2>
                <h3 class="second-title">Bienvenido a <br>ILLARLI</h3>
            </section>
            <img src="../resources/login-img.png"  class="persona" />
        </div>
        <div class="container form text">
            <section>
                <img :src="svg" alt="My SVG" />
            </section>
            <section>
                <h2>Iniciar Sesión</h2>
                <p>En el <span class="strong">sistema de facturación</span> que se adapta a tus necesidades</p>
            </section>
            <div class="form-floating mb-3">
                <input v-model="object.email"  type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Usuario</label>
            </div>
            
            <div class="input-group mb-3">
                <input v-model="object.password" type="password" class="form-control" placeholder="Password" aria-label="Contraseña" aria-describedby="button-addon2" >
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                </button>
            </div>
            
            
            <div class="input-group-text d-flex justify-content-evenly">
                <section>
                    <span for="remindLabel">Recordarme?</span>
                    <input v-model="remind" class="form-check-input ms-2" type="checkbox" id="floatingInput"  aria-label="Radio button for following text input">
                </section>
                
                <section>
                    <a href="https://vuejs.org/" target='_blank' rel="noopener noreferrer" >Olvidaste tu contraseña?</a>
                </section>
            </div>
            <section>
                <button @click.prevent="login" type="submit" class="btn btn-info btn-width">Acceder</button>
            </section>
            
            <div class="input-group-text d-flex justify-content-evenly">
                <section>
                    <label>No tienes cuenta</label>
                </section>
                
                <section>
                    <a href="https://vuejs.org/" target='_blank' rel="noopener noreferrer" >Registrate aquí</a>
                </section>
            </div>
            <section class="login-foot">
                <label>Con respaldo de illarli</label>
            </section>
        </div>
    </form>
</template>
<script setup>

    import svg from "../resources/illarli-logo-black.svg"
    import { reactive } from "vue"
    import axios from 'axios';
    import { inject } from 'vue';
    import { useRouter,  } from 'vue-router'

    const setToken = inject('setToken');
    
    const router = useRouter()
    
    const url = "https://eventos.ec/api/login"
    
    let  object = reactive({
        email: "",
        password: "",
    })
    
    let remind = false;
    
    function login(){

        axios.post(url,object)
        .then(res=>{
            if(res.status === 200){
                setToken(res.data)
                router.push({name:'home'})
            }
        })  
        .catch(error=>{
            if(error){
                alert("Login invalido")
            }
        })
    }
    

</script>
<style scoped>
*{
    text-transform: none;
}
.container-fluid{
    height: 100vh;
    /* position: absolute; */
    
}
.bg-image{
    background-image: url('../resources/background-auth.jpg');
    background-size: cover;
    background-position: center;
}
.container-fluid .imagen{
    position: relative;
    
    /* background-color: rgb(192, 32, 221); */
    height: 100vh;
    width: 40%;
    padding: 1em;
    margin-right: 0;
    margin-left: 10%;
}

.first-title{
    color: rgba(255, 255, 255, 0.649);
}
.second-title{
    color: white;
    
}

.container-fluid .form{
    background-color: rgb(236, 227, 227);
    height: 100vh;
    width: 40%;
    border-radius: 20px 0  0 20px;
    padding: 5em;
    text-align: center;
    margin-left: 0;
    
}
.remindLabel{
    margin-left: 3px;
}
.container-fluid .form h5 {
    text-align: left;
}
.strong{
    font-weight: 900;
    color: black;
}
.btn-width {
    width: 100%;
    border-radius: 10px;
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    background-color: rgb(94, 194, 219);
    border: none;
    transition: all ease-in-out 0.5s;

    
}
.btn-width:hover {
    transition: all ease-in-out 0.5s;
    background-color: rgb(60, 151, 220);
    
}

.login-foot{
    margin-top: 1.5em;
}
.persona{
    height: 55vh;
    position: absolute;
    right: 0;
    bottom: 0;
    color: grey;
}
@media screen and (max-width: 400px) {
    .persona{
        height: 30vh;
        right: -125%;
        bottom:10;
        color: grey;
    }
    .container-fluid .imagen{
        height: 40vh;
    }
    .container-fluid {
        height: 50vh;
        width: auto;
    }
    .container-fluid .form{
        width: auto;
        height: 70vh;
        padding: 10px;
        border-radius: 0px;
        
    }
}
</style>

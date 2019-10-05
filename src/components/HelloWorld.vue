<template>
  <div id="app">


  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
      <router-link to="/" class="left"><img class="logo" src="../assets/logo2.png"></router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><router-link to="/">Busca</router-link></li>
          <li><router-link to="/config">Configurações</router-link></li>
          <li><router-link to="/site">Sites</router-link></li>
          <li><router-link to="/favorite">Favoritos</router-link></li>
        </ul>
      </div>
    </nav>

  <ul class="sidenav" id="mobile-demo">
    <li style = "margin-bottom:10%"><router-link to="/" class="center"><img class="logo2" src="../assets/logo2Blue.png"></router-link></li>
    <li><router-link to="/">Busca</router-link></li>
    <li><router-link to="/config">Configurações</router-link></li>
    <li><router-link to="/site">Sites</router-link></li>
    <li><router-link to="/favorite">Favoritos</router-link></li>
  </ul>

    <div class="container">

        <div class="col s12">
          <div class="card white cardOut-css">
            <div class="card-content white-text card-css">

               <img src="../assets/logo2Blue.png">

               <form @submit.prevent="listSites">

               <select @change="handleChange" class="browser-default select" >
                  <option value="" disabled selected>Selecione a Configuração</option>
                  <option v-for="config of configs" :value="config.id" >{{config.name}}</option>
                </select>

                <div class="input-field search col s6">
                    <input id="search" type="text" v-model="query.search">
                    <label for="search">Pesquise um produto</label> 
                </div> 

                <button class="left waves-effect waves-light btn-small">Buscar<i class="material-icons right">search</i></button>

                <form>
                    <button v-on:click="catchData" class="left waves-effect red btn-small">Favoritar<i class="material-icons left">favorite</i></button>
                </form>

             </form> 

            </div>
          </div>
        </div>
            
      </form>

      <hr>

      <table class="striped">

        <thead>

          <tr>
            <th>NOME</th>
            <th>PREÇO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="sites of site" :key="sites.id" >

            <td>{{sites.site.name}}</td>
            <td>{{sites.price.value}}</td>
            <td>
              </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Product from '../services/products'
import Configs from '../services/configs'
import Favorite from '../services/favorite'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
export default{


  data(){
    return{
      query:{
        search:''
        },
      site:[],
      configs:[],
      config:{
        id:''
      },
      fav:{
        rateInteger:'',
        value:'',
        config:{
          id:''
        }
      }
    }
  },

  mounted(){
    this.listConfigs();

    document.getElementsByClassName("sidenav-overlay")[0].style.display = "none";  
  },
  methods:{
    listSites(){
        Product.listSites(this.query.search,this.config.id).then(resp => {
          this.site = resp.data
        })
    },
    listConfigs(){
        Configs.listConfigs().then(resp => {
          this.configs = resp.data
        })
    },
    handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
          this.config.id = e.target.options[e.target.options.selectedIndex].value
        }
    },
    catchData(){
        this.fav.rateInteger = 0;
        this.fav.value = this.query.search;
        this.fav.config.id = this.config.id;
        this.saveFavorites(this.fav);
    },

    saveFavorites(){
        Favorite.saveFavorites(this.fav).then(resp => {
          window.location.replace("#/");
        })
    }

     
  } 
}

</script>

<style>
nav.nav-center ul {
    text-align: center;
}
nav.nav-center ul li {
    display: inline;
    float: none;
}
nav.nav-center ul li a {
    display: inline-block;
}

.select{
  width:fit-content; 
}

#search{
  border-radius: 10px;
  padding-left: 20px;
}

.card-css{
  height: 28em;
}

.cardOut-css{
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 30px;
}
</style>

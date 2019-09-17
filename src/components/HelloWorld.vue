<template>
  <div id="app">

  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
        <h2>Shop-Miner</h2>
      </div>
    </nav>

    <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/config">Configurações</router-link></li>
          <li><router-link to="/site">Sites</router-link></li>
          <li><router-link to="/favorite">Favoritos</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="listSites">

          <h5>Selecione a configuração:</h5>
          <select @change="handleChange" class="browser-default">
            <option value="" disabled selected>Choose your option</option>
            <option v-for="config of configs" :value="config.id" >{{config.name}}</option>
          </select>

          <input type="text" placeholder="Search" v-model="query.search">

          <button class="left waves-effect waves-light btn-small">Buscar<i class="material-icons left">search</i></button>


      </form>
          <button v-on:click="catchData" class="left waves-effect red btn-small">Favoritar<i class="material-icons left">favorite</i></button>
      <form>

          
      </form>

      <table>

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
</style>

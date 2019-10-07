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
    <li style = "margin-bottom:10%"><router-link to="/" class="center sidenav-close"><img class="logo2" src="../assets/logo2Blue.png"></router-link></li>
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


      <table>

        <thead>

          <tr>
            <th>Lista de Produtos</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="sites of site" :key="sites.id" >

            <ul class="collapsible">
                <li>
                  <div class="collapsible-header"><i class="material-icons">shopping_cart</i><span style="margin-right: 1em ">{{sites.site.name}}</span>-<span style="margin-left: 1em">{{sites.price.value}}</span></div>
                  <div class="collapsible-body">
                    <div class="card profile">
                        <div class="card-header pheader">
                          <img v-bind:src="sites.product.img" />
                        </div>
                        <div class="card-content pcontent">
                        <button class="center waves-effect red btn-small"><a class = "siteLink" v-bind:href="sites.site.productLink">Visitar a Loja</a><i class="material-icons right">arrow_forward</i></button>
                          <h3>{{sites.product.name}}</h3>
                          <h4>{{sites.price.value}}</h4>
                          <p>{{sites.product.description}}</p>
                        </div>
                      </div>
                  </div>
                </li>
              </ul>

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

  document.addEventListener('click', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  document.addEventListener('mouseover', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
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

.siteLink{
  color: white;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans);


.profile {
  background-color: #f4f4f4;
  width: 300px;
  margin: 10px auto;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.7);
}

.pheader {
  overflow: hidden;
  width: 100%;
  max-height: 200px;
}

h3{
  margin-top: 0.5em; 
}

h4{
  margin-top: 1em;
}

.pheader img{
  width: 69%;
}

.pcontent {
  width: 85%;
  margin: 35px auto;
}

.pcontent h3 {
  font-size: 30px;
  margin-bottom: 0;
  color: #303F9F;
  font-family: 'Montserrat', sans-serif;
}

.pcontent h4 {
  font-size: 14px;
  color: #FF5252;
  font-family: 'Montserrat', sans-serif;
}

.pcontent p {
  color: #727272;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  
}
</style>

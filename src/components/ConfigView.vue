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

      <h5 class="att">Nome: {{config.name}}</h5>

      <h5 class="att">Descrição: {{config.descrition}}</h5>

      <button class=" pink darken-3 btn-small"><router-link :to="'/site/new/'+ this.id" class="router-link">Adicionar </router-link><i class="material-icons left">add_circle</i></button>

      <table>

        <thead>

          <tr>
            <th>SITE</th>
            <th>URL</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="site of this.sites" :key="site.id" >

            <td>{{site.name}}</td>
            <td>{{site.url}}</td>
            <td>
            <button class=" red darken-3 btn-small"><router-link :to="'/site/update/' + site.id + '/' + id" class="router-link"><i class="material-icons center">create</i></router-link></button>
            <button @click = "deleteSites(site)" class=" blue darken-3 btn-small"><i class="material-icons center">delete</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Configs from '../services/configs'
import Sites from '../services/sites'

export default{

  props:[
  'id'
  ],

  data(){
    return{
      config: {
        id:'',
        name:'',
        descrition: '',
      },
        sites:[]
    }
  },

  mounted(){
    this.findConfig()
  },

  methods:{

    
    findConfig(){
      Configs.findConfig(this.id).then(resp => {
          this.config = resp.data;
           this.listSites()
        })
    },

    listSites(){
            this.sites = [];

        Sites.listSites().then(resp => {
         for (var i = 0; i < resp.data.length; i++) {
                if(resp.data[i].config.id == this.config.id){
                    this.sites.push(resp.data[i])
                }
            }
        })
    },

    deleteSites(SiteDel){
        Sites.deleteSites(SiteDel).then(resp => {
          this.listSites();
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

.att{
    text-align: left
}

</style>
  
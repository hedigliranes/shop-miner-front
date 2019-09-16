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

      <h5 class="att">Nome: {{config.name}}</h5>

      <h5 class="att">Descrição: {{config.descrition}}</h5>

      <table>

        <thead>

          <tr>
            <th>SITE</th>
            <th>URL</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="config of this.sites" :key="config.id" >

            <td>{{config.name}}</td>
            <td>{{config.url}}</td>

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
        Sites.listSites().then(resp => {
         for (var i = 0; i < resp.data.length; i++) {
                if(resp.data[i].config.id == this.config.id){
                    this.sites.push(resp.data[i])
                    console.log(resp.data[i]);
                }
            }
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
  
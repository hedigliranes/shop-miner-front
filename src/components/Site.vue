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


      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>URL</th>
            <th>Configuração</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="site of sites" :key="site.id" >

            <td>{{site.name}}</td>
            <td>{{site.url}}</td>
            <td>{{site.config.id}}</td>
            

          </tr>

        </tbody>
      
      </table>

    </div>



  </div>
</template>

<script>

import Sites from '../services/sites'

export default{

  data(){
    return{
      sites:[]
    }
  },

  mounted(){
    this.listSites()
  },

  methods:{
    listSites(){
        Sites.listSites().then(resp => {
          this.sites = resp.data
        })
    },     
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

.router-link{
  color: white;
}

.pink, darken-3{
	float:left;
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>

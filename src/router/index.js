import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Config from '@/components/Config'
import Site from '@/components/Site'
import Favorite from '@/components/Favorite'
import ConfigNew from '@/components/ConfigNew'
import ConfigUpdate from '@/components/ConfigUpdate'
import ConfigView from '@/components/ConfigView'
import SiteNew from '@/components/SiteNew'
import SiteUpdate from '@/components/SiteUpdate'
import FavoriteUpdate from '@/components/FavoriteUpdate'
import FavoriteView from '@/components/FavoriteView'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/config/new/',
      name: 'ConfigNew',
      component: ConfigNew
    },
    {
      path: '/config/update/:id',
      name: 'ConfigUpdate',
      props: true,
      component: ConfigUpdate
    },
    {
      path: '/config/view/:id',
      name: 'ConfigView',
      props: true,
      component: ConfigView
    },
    {
      path: '/site',
      name: 'Site',
      component: Site
    },
    {
      path: '/site/new/:confId',
      name: 'SiteNew',
      props: true,
      component: SiteNew
    },
    {
      path: '/site/update/:id/:confId',
      name: 'SiteUpdate',
      props: true,
      component: SiteUpdate
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/favorite/update/:id/',
      name: 'FavoriteUpdate',
      props: true,
      component: FavoriteUpdate
    },
    {
      path: '/favorite/view/:idFav/:id/:query',
      name: 'FavoriteView',
      props: true,
      component: FavoriteView
    },
  ]
})
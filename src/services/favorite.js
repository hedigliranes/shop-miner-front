import { http } from './config'

export default{

	listFavorites:() =>{
		return http.get('favorite')
	},

	saveFavorites:(favorite) =>{
		return http.post('favorite',favorite)
	},

	editFavorites:(favorite) =>{
		return http.put('favorite',favorite)
	},

	findFavorite:(id) =>{
		return http.get('favorite/'.concat(id))
	},

	deleteFavorites:(favorite) =>{
		return http.delete('favorite',{data: favorite})
	},

	predict:(config,site) =>{
		return http.get('favorite/'.concat(config) + '/'.concat(site))
	},

	predictPrice:(id,init,end) =>{
		return http.get('predict/'.concat(id) + '/'.concat(init) + '/'.concat(end))
	}

}
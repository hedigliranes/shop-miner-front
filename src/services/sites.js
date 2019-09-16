import { http } from './config'

export default{

	listSites:() =>{
		return http.get('site')
	},

	saveSites:(site) =>{
		return http.post('site',site)
	},

	editSites:(site) =>{
		return http.put('site',site)
	},

	findSite:(id) =>{
		return http.get('site/'.concat(id))
	},

	deleteSites:(site) =>{
		return http.delete('site',{data: site})
	}

}
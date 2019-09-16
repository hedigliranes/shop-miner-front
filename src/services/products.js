import { http } from './config'

export default{

	listSites:(nome,config) =>{
		return http.get('search/'.concat(config) + '/'.concat(nome))
	}

}
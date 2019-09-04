import { http } from './config'

export default{

	listSites:(nome) =>{
		return http.get('search/1/'.concat(nome))
	}

}
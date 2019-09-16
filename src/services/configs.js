import { http } from './config'

export default{

	listConfigs:() =>{
		return http.get('config')
	},

	saveConfigs:(config) =>{
		return http.post('config',config)
	},

	editConfigs:(config) =>{
		return http.put('config',config)
	},

	findConfig:(id) =>{
		return http.get('config/'.concat(id))
	},

	deleteConfigs:(config) =>{
		return http.delete('config',{data: config})
	}

}
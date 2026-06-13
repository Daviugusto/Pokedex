import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    params:{
        language:'pt-br',
        page: 1
    }
})

export default api

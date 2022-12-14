import axios from 'axios'

export const getInstance = () =>
    axios.create({
        baseURL: 'http://localhost:3001'
    })


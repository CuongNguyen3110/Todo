const Axios = require('axios')

const apiFetchPost = () => { 
    return Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data) 
}

const apiAddNewPost = (data) => {
    return Axios.post('https://jsonplaceholder.typicode.com/posts', data).then(response => response.data)
}

module.exports = { apiFetchPost, apiAddNewPost }





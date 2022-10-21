import axios from 'axios'


const mutation = (query) => {
    const options = {
        method: 'POST',
        url: '/api/graphql',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        data: `{"query": "mutation { ${query} }"}`
    }
    console.log(options.data)

    return axios.request(options)
}

export { mutation }

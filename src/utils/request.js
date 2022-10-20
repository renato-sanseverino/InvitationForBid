import axios from 'axios'


const request = (query) => {
    const options = {
        method: 'POST',
        url: '/api/graphql',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        data: `{"query": "query { ${query} }"}`
    }
    console.log(options.data)

    return axios.request(options)
}

export { request }

const url = '/api/graphql'


const mutation = (mutationQuery, mutationVariables) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: `mutation ${mutationQuery}`}),
        variables: mutationVariables
    }

    return fetch(url, options)
}

export { mutation }

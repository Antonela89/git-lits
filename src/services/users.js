const BASE_API = 'https://api.github.com';

const fetchWrapper = async (url, options) => {
    const response = await fetch(url, options)
    if(!response.ok) {
        return {
            data: null,
            isError: true
        }
    }

    const  data = await response.json();

    return {
        data,
        isError: false
    }
}

export const getUser = async (userName) => {
    return fetchWrapper(`${BASE_API}/users/${userName}`)
}

export const getReposUser = async (userName) => {
    return fetchWrapper(`${BASE_API}/users/${userName}/repos`)
}


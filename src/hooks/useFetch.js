import { useState, useEffect } from 'react'
import { BASE_URL } from '../Url_s'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            fetch(BASE_URL + url)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }
    }, [loading])

    const doFetch = () => {
        setLoading(true)
    }

    return [data, error, loading, doFetch]
}

export default useFetch
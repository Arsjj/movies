import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            fetch(url)
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
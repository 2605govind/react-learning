import {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((e) => setError(e.respone.data.message))
        .finally(() => setIsLoading(false))

    }, [url])

    return [data, isLoading, error]
}

export default useFetch;
import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                setLoading(false)
                console.log('response.data', response.data)
                setPosts(response.data[0])
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPosts([])
                setError('Something Went Wrong')
            })
    }, [])

    return (
        <div>
            {
                loading ? 'Loading' :
                    posts.name
            }
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
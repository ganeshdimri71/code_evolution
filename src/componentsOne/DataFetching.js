import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIDFromButtonClick] = useState(1)
    const [id, setID] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick
}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])
    const handleClick = () => {
        setIDFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
            <button type='button'
                onClick={() => handleClick()}
            >Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
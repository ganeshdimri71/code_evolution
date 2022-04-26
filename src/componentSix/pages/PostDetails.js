import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    let { category } = useParams()
    return (
        <>
            <h1>{category} post Details</h1>
            <h3>{category} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt doloribus magnam facilis quae blanditiis qui a, iure molestias, asperiores obcaecati ea similique dolores nemo possimus architecto unde at vel.</h3>
        </>
    )
}

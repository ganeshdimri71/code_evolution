import React from 'react'

const Greet = (props) => {

    const {name,heroName} = props
    return (
        <div>Hello {name} a.k.a {heroName}
        </div>
    )
}


export default Greet
import React from 'react'
import './App17.scss'

const App17 = () => {
    return (
        <div className="wrapper">
            <Card src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Watches2021/June/EOSS/Headers/MW-PC-ENG.jpg"} title={"Recepie 1"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt minima eveniet tenetur impedit rerum error, saepe sunt ipsam a!"} />
            <Card src={"https://m.media-amazon.com/images/I/71hXjKVCszL._SY355_.jpg"} title={"Card Title 2"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt minima eveniet tenetur impedit rerum error, saepe sunt ipsam a!"} />
            <Card src={"https://m.media-amazon.com/images/I/81Kp24E370L._SY355_.jpg"} title={"Card Title 3"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt minima eveniet tenetur impedit rerum error, saepe sunt ipsam a!"} />
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.src} alt="" className='card_image' />
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">
                    {props.description}
                </p>
            </div>
            <div className="card_btn">View Recipie</div>
        </div>
    )
}
export default App17
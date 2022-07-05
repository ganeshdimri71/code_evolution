import React from 'react'
import './cart.css'

const Cart = () => {
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" className='arrow-icon' alt="arrow" />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>7</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items-count'>You have <span>items in shopping cart</span></p>
                <div className="cart-items">
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="" />
                            </div>
                            <div className="title">
                                <h2>Samsung s21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fa-solid fa-minus minus"></i>
                                <input type="text" placeholder='2' />
                                <i class="fa-solid fa-plus add"></i>
                            </div>
                            <div className="price">2000rs</div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
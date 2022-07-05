import React from 'react'
import './App15.css'
import $ from 'jquery';
import image1 from './images/21.jpg'
import image2 from './images/3.jpg'
import image3 from './images/4.jpg'
import image4 from './images/6.jpg'
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }

    // bubbles -----------------


    setInterval(function () {
        // var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' +

            // randomValue(bArray)
            + 'px; width: '
            +
            // size +
            'px; height:'
            +
            // size +
            'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);

}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});
const App15 = () => {
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <span className="section-separator"></span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="testimonials-carousel-wrap">
                <div className="listing-carousel-button listing-carousel-button-next"><i className="fa fa-caret-right" style={{ color: "#fff" }}></i></div>
                <div className="listing-carousel-button listing-carousel-button-prev"><i className="fa fa-caret-left " style={{ color: "#fff" }}></i></div>
                <div className="testimonials-carousel">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testi-item">
                                    <div className="testi-avatar"><img src={image1} /></div>
                                    <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                                    <div className="testimonials-text">
                                        <div className="listing-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" className="text-link"></a>
                                        <div className="testimonials-avatar">
                                            <h3>John Doe</h3>
                                            <h4>Owner</h4>
                                        </div>
                                    </div>
                                    <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testi-item">
                                    <div className="testi-avatar"><img src={image2} /></div>
                                    <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                                    <div className="testimonials-text">
                                        <div className="listing-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" className="text-link"></a>
                                        <div className="testimonials-avatar">
                                            <h3>Doe Boe</h3>
                                            <h4>Director</h4>
                                        </div>
                                    </div>
                                    <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testi-item">
                                    <div className="testi-avatar"><img src={image3} /></div>
                                    <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                                    <div className="testimonials-text">
                                        <div className="listing-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" className="text-link"></a>
                                        <div className="testimonials-avatar">
                                            <h3>Boe Doe</h3>
                                            <h4>Developer</h4>
                                        </div>
                                    </div>
                                    <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testi-item">
                                    <div className="testi-avatar"><img src={image4} /></div>
                                    <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                                    <div className="testimonials-text">
                                        <div className="listing-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" className="text-link"></a>
                                        <div className="testimonials-avatar">
                                            <h3>Doe John</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                    <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tc-pagination"></div>
            </div>
        </section>
    )
}

export default App15
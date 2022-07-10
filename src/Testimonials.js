import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from 'react-bootstrap'

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                interval={2000}
                dataInterval={2000}
                emulateTouch={true}
                stopOnHover={true}
                swipeable={true}
            >
                <div>
                    <div className="myCarousel">
                        <Row>
                            <Col md={4} className="text-center">
                                <div class="profile">
                                    <img className="img-fluid" src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png"
                                        class="user" alt="customer pic" />
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam enim temporibus culpa accusamus sequi eius velit numquam ullam quisquam, et laborum illum mollitia debitis tempora? Voluptates aperiam neque accusantium a corrupti. Iure iusto maxime tempora cum doloremque temporibus sunt a esse repudiandae. Cum eveniet nisi quasi commodi vero nobis. Quasi! </p>
                                    <h3>Alex</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png"
                                        class="user" alt="customer pic" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sequi saepe magni dolores odit mollitia atque, aperiam quidem ut labore sapiente, minima aliquid, tempora sed tenetur voluptas fuga distinctio debitis blanditiis nesciunt? Eligendi, explicabo assumenda molestias corporis a minus voluptate, optio obcaecati enim eum quam sunt distinctio autem fugit ipsum!
                                    </p>
                                    <h3 className="text-center">James</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://assets.chaminade.edu/wp-content/uploads/2018/07/08074029/Testimonial-Photo-Circle-AngieM1a.png" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat deleniti rerum natus ex dicta laudantium fuga numquam, impedit tempora officia ab debitis deserunt. Dolores aut iste voluptates mollitia rem? Accusantium velit, soluta fuga, omnis delectus quas iure odio, veniam iusto atque autem numquam at. Suscipit sequi veniam aliquid illo.
                                    </p>
                                    <h3>Maria</h3>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <Row>
                            <Col md={4} className="text-center">
                                <div class="profile">
                                    <img className="img-fluid" src="http://bgadgroup.com/wp-content/uploads/2016/03/testimonial-circle-.png"
                                        class="user" alt="customer pic" />
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, porro quis. Ad saepe magni quae natus nam nihil mollitia nostrum unde suscipit reiciendis, omnis facilis dolorum quo dicta harum. Eos blanditiis ipsam porro, cumque vero, voluptatum totam ducimus fuga similique amet placeat provident numquam nam officiis debitis perferendis, quos quisquam? </p>
                                    <h3>Sezel</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://www.pinpng.com/pngs/m/127-1275400_paul-circle-testimonial-male-face-icon-png-transparent.png"
                                        class="user" alt="customer pic" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam! Saepe dolor quod nisi cupiditate cumque rem quaerat illum eaque iure dolorem sed doloribus at earum nemo, laudantium corrupti asperiores laboriosam nam unde! Eligendi, maxime debitis illo eaque ut accusamus id ex quas reiciendis quia distinctio minus dolorem! Ratione, totam.
                                    </p>
                                    <h3>Stuard</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://www.seekpng.com/png/detail/906-9060938_testimonial-circle-girl.png"
                                        class="user" alt="customer pic" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt cupiditate voluptate at temporibus maiores iusto illo quam consequuntur consectetur, vel inventore. Perferendis id illum architecto. Eligendi in voluptatibus cum facere. Eius beatae qui magni totam maxime, voluptatum porro itaque nemo vitae dolore aliquid laborum cumque doloremque odio minus corporis.
                                    </p>
                                    <h3>Jimmy</h3>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <Row>
                            <Col md={4} className="text-center">
                                <div class="profile">
                                    <img className="img-fluid" src="https://www.sutherlandglobal.bg/wp-content/uploads/2019/05/Testimonials-circle-photos_Ivan.png"
                                        class="user" alt="customer pic" />
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, porro quis. Ad saepe magni quae natus nam nihil mollitia nostrum unde suscipit reiciendis, omnis facilis dolorum quo dicta harum. Eos blanditiis ipsam porro, cumque vero, voluptatum totam ducimus fuga similique amet placeat provident numquam nam officiis debitis perferendis, quos quisquam? </p>
                                    <h3>Anderson</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://cdn.who.int/media/images/default-source/careers/testimonials/maria-intan-joshi-circle.png?sfvrsn=55d74886_6"
                                        class="user" alt="customer pic" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam! Saepe dolor quod nisi cupiditate cumque rem quaerat illum eaque iure dolorem sed doloribus at earum nemo, laudantium corrupti asperiores laboriosam nam unde! Eligendi, maxime debitis illo eaque ut accusamus id ex quas reiciendis quia distinctio minus dolorem! Ratione, totam.
                                    </p>
                                    <h3>Jennifer</h3>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="profile">
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUKYMIfG34OIA2f0C7gj9aqRVxoUBzOgfMQ&usqp=CAU"
                                        class="user" alt="customer pic" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt cupiditate voluptate at temporibus maiores iusto illo quam consequuntur consectetur, vel inventore. Perferendis id illum architecto. Eligendi in voluptatibus cum facere. Eius beatae qui magni totam maxime, voluptatum porro itaque nemo vitae dolore aliquid laborum cumque doloremque odio minus corporis.
                                    </p>
                                    <h3>Andrew</h3>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>

            </Carousel>
        );
    }
}
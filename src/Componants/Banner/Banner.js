import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section id="showcase" class="container pl-0 pr-0">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-slide-to="0" data-target="#myCarousel" class="active"></li>
                    <li data-slide-to="1" data-target="#myCarousel"></li>
                    <li data-slide-to="2" data-target="#myCarousel"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item carousel-img-1 active">
                        <div class="container">
                            <div class="carousel-caption d-block d-lg-none mb-5 pb-5">
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, repudiandae.
                                Nulla veritatis quis nisi nam. Nesciunt veritatis praesentium sed eius?</p>
                                <a href="#" class="btn btn-danger">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-img-2">
                        <div class="container">
                            <div class="carousel-caption d-block d-lg-none mb-5 pb-5 text-right">
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, repudiandae.
                                Nulla veritatis quis nisi nam. Nesciunt veritatis praesentium sed eius?</p>
                                <a href="#" class="btn btn-warning">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-img-3">
                        <div class="container">
                            <div class="carousel-caption d-block d-lg-none mb-5 pb-5 text-left">
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, repudiandae.
                                Nulla veritatis quis nisi nam. Nesciunt veritatis praesentium sed eius?</p>
                                <a href="#" class="btn btn-secondary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#myCarousel" class="carousel-control-prev" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a href="#myCarousel" class="carousel-control-next" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Banner;
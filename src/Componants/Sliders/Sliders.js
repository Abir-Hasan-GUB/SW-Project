import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sliders.css';
import carousel1 from '../../images/banner1.jpg';
import carousel2 from '../../images/banner2.jpg';
import carousel3 from '../../images/banner3.jpg';
import carousel5 from '../../images/banner2.jpg';
import carousel4 from '../../images/banner1.jpg';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };

    return (
        <div id="ourworks" className="container bg-dark text-light px-0">
            <div className="serviceTitle text-center py-5 pb-3">
                <h2>Sample of <span className="text-warning"> our Products</span></h2>
            </div>
            <div className="ourWorks">
                <Slider {...settings}>

                    <div className="sliderComponant">
                        <img src={carousel1} alt="" className="img-fluid" />
                    </div>
                    <div className="sliderComponant">
                        <img src={carousel2} alt="" className="img-fluid" />
                    </div>
                    <div className="sliderComponant">
                        <img src={carousel3} alt="" className="img-fluid" />
                    </div>
                    <div className="sliderComponant">
                        <img src={carousel4} alt="" className="img-fluid" />
                    </div>
                    <div className="sliderComponant">
                        <img src={carousel5} alt="" className="img-fluid" />
                    </div>

                </Slider>
            </div>

        </div>
    );
};

export default Sliders;
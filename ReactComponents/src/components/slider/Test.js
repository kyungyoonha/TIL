import React from "react";
import ReactSlick from "react-slick";

const Test = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
    };
    return (
        <ReactSlick {...settings}>
            <div>
                <h1>321</h1>
            </div>
        </ReactSlick>
    );
};

export default Test;

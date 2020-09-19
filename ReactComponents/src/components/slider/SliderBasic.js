// CSS 추가
/* prettierignore */
// <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
// <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

import React, { useState } from "react";
import ReactSlick from "react-slick";
import styled from "styled-components";

import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";

const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    width: 1200px;
    text-align: center;
    font-weight: bold;
`;

const ContainerButton = styled.div`
    display: flex;
    button {
        flex: 1;
    }
`;

const InnerImg = styled.div`
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
`;

const SliderBasic = () => {
    const [slider, setSlider] = useState(null);

    const handleButtonPrev = () => {
        slider.slickPrev();
    };
    const handleButtonNext = () => {
        slider.slickNext();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
    };
    const Images = [
        { src: img1, fileName: "", file: null },
        { src: img2, fileName: "", file: null },
        { src: img3, fileName: "", file: null },
        { src: img4, fileName: "", file: null },
    ];
    return (
        <Conatiner>
            <h2>슬라이더</h2>
            <ReactSlick ref={(c) => setSlider(c)} {...settings}>
                {[...new Array(4)].map((_, idx) => (
                    <InnerImg key={idx}>
                        <img src={Images[idx] && Images[idx].src} alt="" />
                    </InnerImg>
                ))}
            </ReactSlick>
            <ContainerButton>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleButtonPrev}
                >
                    이전
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleButtonNext}
                >
                    다음
                </button>
            </ContainerButton>
        </Conatiner>
    );
};

export default SliderBasic;

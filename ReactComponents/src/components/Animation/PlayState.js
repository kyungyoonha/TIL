import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/cat.jpg";

const Animation = styled.div`
    position: relative;
    transition: 4s 0.2s cubic-bezier(0.3, 1.01, 0.51, 1.04);
    margin-bottom: 30px;
    width: 300px;

    &:after {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        content: "";
        background-color: #fff;
        transition: 2s 0.3s cubic-bezier(0.3, 1.01, 0.51, 1.04);
    }

    &.active {
        &:after {
            width: 0px;
        }
    }
    img {
        width: 100%;
    }
`;

const Translate = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
            >
                {active ? "없애기" : "나타내기"}
            </button>
            <Animation className={active && "active"}>
                <img src={img} alt="" />
            </Animation>
        </div>
    );
};

export default Translate;

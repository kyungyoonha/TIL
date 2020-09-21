import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/cat.jpg";

const Animation = styled.div`
    position: relative;
    transition: 4s 0.2s cubic-bezier(0.3, 1.01, 0.51, 1.04);
    /* 애니메이션 가속도 설정 
        1. linear : 애니메이션 효과가 처음부터 끝까지 일정한 속도로 진행됩니다.
        2. ease : 기본값으로, 애니메이션 효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 다시 느려집니다.
        3. ease-in : 애니메이션 효과가 천천히 시작됩니다.
        4. ease-out : 애니메이션 효과가 천천히 끝납니다.
        5. ease-in-out : 애니메이션 효과가 천천히 시작되어, 천천히 끝납니다.
        6. cubic-bezier(n,n,n,n) : 애니메이션 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됩니다.
        => 개발자 도구에서 변경 가능함
     */
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

import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/cat.jpg";

const Animation = styled.div`
    margin-bottom: 30px;
    animation-name: move_cat;
    /* 한번 재생시 걸리는 시간 */
    animation-duration: 4s;
    /* 애니메이션 지연 */
    animation-delay: 0s;
    /* alternate: 순방향 (0% -> 100%) / reverse: 역방향 (100% -> 0%) */
    animation-direction: alternate;
    /* 애니메이션 재생 횟수 */
    animation-iteration-count: infinite;
    /* 애니메이션 재생 여부 paused / running  */
    animation-play-state: paused;
    /* 애니메이션 가속도 설정 
        1. linear : 애니메이션 효과가 처음부터 끝까지 일정한 속도로 진행됩니다.
        2. ease : 기본값으로, 애니메이션 효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 다시 느려집니다.
        3. ease-in : 애니메이션 효과가 천천히 시작됩니다.
        4. ease-out : 애니메이션 효과가 천천히 끝납니다.
        5. ease-in-out : 애니메이션 효과가 천천히 시작되어, 천천히 끝납니다.
        6. cubic-bezier(n,n,n,n) : 애니메이션 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됩니다.
     */
    animation-timing-function: linear;
    /* 애니메이션 끝난 후 상태
        1. forwords: 끝나면 그지점에 머뭄
        2. backwords: 끝나고 시작지점으로 돌아감
        3. both: 애니메이션의 앞뒤 결과를 조합하여 설정
     */
    animation-fill-mode: both;
    img {
        width: 300px;
    }
    &.active {
        animation-play-state: running;
    }

    @keyframes move_cat {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(200px, 0px);
        }
        100% {
            transform: translate(600px, 200px);
        }
    }
`;

const Translate = () => {
    const [active, setActive] = useState(false);
    console.log(active);

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
                {active ? "멈추기" : "움직이기"}
            </button>
            <Animation className={active && "active"}>
                <img src={img} alt="" />
            </Animation>
        </div>
    );
};

export default Translate;

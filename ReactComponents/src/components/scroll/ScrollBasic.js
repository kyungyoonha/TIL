import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 2000px;
`;

const ScrollInfo = styled.div`
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30%;
`;

const Text = styled.h1`
    font-size: 8rem;
    margin-bottom: 30px;
`;

const ScrollBasic = () => {
    const [scroll, setScroll] = useState({
        scrollHeight: 0,
        clientHeight: 0,
        scrollTop: 0,
        realHeight: 0,
        percent: 0,
    });

    const handleScroll = () => {
        const el = document.documentElement;
        const body = document.body;

        const scrollHeight = Math.max(el.scrollHeight, body.scrollHeight);
        const scrollTop = Math.max(el.scrollTop, body.scrollTop);
        const clientHeight = el.clientHeight;
        const realHeight = scrollHeight - clientHeight;
        const percent = Math.floor((scrollTop / realHeight) * 100);

        setScroll({
            scrollHeight,
            scrollTop,
            clientHeight,
            realHeight,
            percent,
        });
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, true);
        return window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container>
            <Text>스</Text>
            <Text>크</Text>
            <Text>롤</Text>
            <Text>내</Text>
            <Text>려</Text>
            <Text>가</Text>
            <Text>는</Text>
            <Text>중</Text>
            <Text>입</Text>
            <Text>니</Text>
            <Text>다</Text>

            <ScrollInfo className="card">
                <div className="card-header">※ 스크롤 높이 구하기</div>
                <div className="card-body">
                    <h5>- ScrollHeight: {scroll.scrollHeight}</h5>
                    <h5>- ClientHeight: {scroll.clientHeight}</h5>
                    <h5>--------------------------------------</h5>
                    <h5>- RealHeight: {scroll.realHeight}</h5>
                    <h5>- ScrollTop: {scroll.scrollTop}</h5>

                    <div className="card-footer">
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped"
                                role="progressbar"
                                style={{ width: `${scroll.percent}%` }}
                                aria-valuenow={scroll.percent}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {scroll.percent}
                                {"%"}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollInfo>
        </Container>
    );
};

export default ScrollBasic;

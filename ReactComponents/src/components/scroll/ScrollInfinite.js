import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    margin: 30px;
`;

const ImgBox = styled.div`
    width: 100%;
    height: 500px;
    line-height: 500px;
    background: ${(props) => props.color};
    font-size: 5rem;
    text-align: center;
`;

const ScrollInfinite = () => {
    const [state, setState] = useState({
        apiData: [],
        scrolling: true,
        startIdx: 0,
        endIdx: 4,
        size: 4,
    });

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, true);

        insertApiData();

        return window.removeEventListener("scroll", handleScroll);
    }, []);

    const insertApiData = async () => {
        try {
            const apiUrl = "http://localhost:3001/apiData.json";
            const res = await axios.get(apiUrl);
            const length = res.data.length;

            setState((state) => {
                const { apiData, startIdx, endIdx } = state;
                if (length < startIdx) {
                    return {
                        ...state,
                        scrolling: false,
                    };
                } else if (length < endIdx) {
                    return {
                        ...state,
                        apiData: [
                            ...apiData,
                            ...res.data.slice(startIdx, length),
                        ],
                        scrolling: false,
                    };
                } else {
                    return {
                        ...state,
                        apiData: [
                            ...apiData,
                            ...res.data.slice(startIdx, endIdx),
                        ],
                        scrolling: false,
                    };
                }
            });
        } catch (e) {
            console.error(e);
        }
    };

    const handleScroll = () => {
        const elem = document.documentElement;
        const body = document.body;

        const scrollHeight = Math.max(elem.scrollHeight, body.scrollHeight);
        const scrollTop = Math.max(elem.scrollTop, body.scrollTop);
        const clientHeight = elem.clientHeight;
        const realHeight = scrollHeight - clientHeight;
        const percent = Math.floor((scrollTop / realHeight) * 100);

        if (percent > 90) {
            setState((state) => ({
                ...state,
                startIdx: state.endIdx,
                endIdx: state.endIdx + state.size,
            }));
            if (state.scrolling) {
                insertApiData();
            }
        }
    };

    return (
        <Container>
            <div className="row row-cols-1 row-cols-md-3">
                {state.apiData.map((item, idx) => (
                    <div className="col mb-4" key={idx}>
                        <div className="card">
                            <ImgBox color={item.color}>{item.id}</ImgBox>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ScrollInfinite;

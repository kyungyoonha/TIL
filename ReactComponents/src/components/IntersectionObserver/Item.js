import React, { useState, useEffect } from "react";

const Item = ({ item, idx }) => {
    const imgRef = React.createRef();

    const options = {
        threshold: 0, // 0 ~ 1, 0: 타켓 보이는 순간, 1: 타켓 완전히 다 나타날때
        // rootMargin: "50px", // 타켓 보이기 50px 전
    };

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries, observer) => {
                console.log("?");
                if (entries[0].isIntersecting) {
                    console.log("?");
                    // observer.unobserve(entries[0].target);
                    // entries[0].target.src = entries[0].target.dataset.src;
                }
            },
            options
        );
        observer.observe(imgRef.current);

        return observer && observer.disconnect();
    }, []);

    return (
        <div key={idx} style={{ width: "51%", height: "300px" }}>
            <h2>{item.title}</h2>
            <img
                src={item.src}
                style={{ width: "100%", height: "80%" }}
                ref={imgRef}
            />
        </div>
    );
};

export default Item;

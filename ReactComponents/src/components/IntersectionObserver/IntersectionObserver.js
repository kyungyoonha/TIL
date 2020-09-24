import React, { useState, useEffect } from "react";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import cat from "../../img/cat.jpg";
import Item from "./Item";

const imgList = [img1, img2, img3, img4];

const data = [...new Array(20)].map((_, i) => {
    if (i < 5) {
        return {
            title: i,
            src: cat,
        };
    }
    return {
        title: i,
        src: imgList[i % 4],
    };
});

const IntersectionObserver = () => {
    const [target, setTarget] = useState(null);
    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        let observer;
        if (target) {
            observer = new window.IntersectionObserver(_onIntersect, {
                threshold: 1,
            });
            observer.observe(target);
        }

        return () => observer && observer.disconnect();
    }, [target]);

    const _onIntersect = ([entry]) => {
        if (entry.isIntersecting) {
            fetchData();
        }
    };

    const fetchData = () => {
        setDataList((state) => [...state, data]);
    };

    return (
        <div className="card d-flex flex-row flex-wrap justify-content-between">
            {dataList.map((item, idx) => (
                <Item key={idx} item={item} idx={idx} />
            ))}
        </div>
    );
};

export default IntersectionObserver;

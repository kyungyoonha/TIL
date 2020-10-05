import React from "react";

// DOC. http://postcode.map.daum.net/guide#sample
// embed: 활성화시 넣어줄 위치
// creatRef() 이용해서 위치를 지정해준다.

const DaumPostCode = () => {
    const [address, setAddress] = React.useState({
        postCode: "",
        roadAddress: "",
    });
    const embedLocation = React.createRef();

    const handleDaumAddress = () => {
        const daum = window.daum;
        new daum.Postcode({
            oncomplete: (data) => {
                setAddress({
                    postCode: data.zonecode,
                    roadAddress: data.roadAddress,
                });
            },
        }).embed(embedLocation.current); // 어디다가 넣어줄지
    };

    return (
        <div>
            <div className="card">
                <div
                    className="card-header bg-primary text-white"
                    ref={embedLocation}
                >
                    <h4>※ 다음 우편번호 검색하기</h4>
                </div>
                <div className="card-body">
                    <div className="label">우편번호</div>

                    <input
                        type="text"
                        value={address.postCode}
                        placeholder="우편번호를 입력해 주세요"
                        readOnly
                    />
                    <button onClick={handleDaumAddress}>우편번호 검색</button>
                </div>
                <div className="card-footer bg-white">
                    <span>우편번호: {address.postCode}</span>
                    <br />

                    <span>도로명 주소: {address.roadAddress}</span>
                </div>
            </div>
        </div>
    );
};

export default DaumPostCode;

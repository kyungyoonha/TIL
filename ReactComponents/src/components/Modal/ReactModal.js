import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 30px;
    > div {
        margin: 0 20px;
        width: 500px;
        height: 500px;
        border: 1px solid #dfdfdf;
    }
`;
const MainImg = styled.div`
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
`;

const InnerImg = styled.div`
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border: 1px solid #dfdfdf;
    }
`;

const ButtonContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

ReactModal.setAppElement("#root");

const ReactModalComponent = ({ isModalOpen, handleModalClose }) => {
    return (
        <div>
            <ReactModal
                isOpen={isModalOpen}
                contentLabel="Minimal Modal Example"
                style={modalStyle}
                onRequestClose={() => handleModalClose()}
            >
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleModalClose}
                >
                    닫기
                </button>
            </ReactModal>
        </div>
    );
};

export default ReactModalComponent;

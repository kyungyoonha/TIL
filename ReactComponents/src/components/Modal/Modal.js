import React, { useState } from "react";
import ReactModal from "./ReactModal";
import styled from "styled-components";

const Container = styled.div`
    margin: 30px auto;
    width: 1200px;
`;

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Container>
            <div>
                <h2>react-modal</h2>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleModalOpen}
                >
                    react-modal
                </button>{" "}
            </div>

            <ReactModal
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
            />
        </Container>
    );
};

export default Modal;

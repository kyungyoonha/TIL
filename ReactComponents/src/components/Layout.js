import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 30px;
`;

const Layout = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Layout;

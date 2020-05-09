import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
    padding: 18px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #777;
    background-color: #1a2634;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ChangeThemeBtn = styled.button`
    outline: none;
    color: #0d1219;
    background-color: #26d9ca;
    border: none;
    border-radius: 4px;
    padding: .5rem 1rem;
    font-size: 1rem;
`;

export default ({ invertTheme }) => (
    <NavWrapper>
        Work-cases
        <ChangeThemeBtn onClick={invertTheme}>Change theme</ChangeThemeBtn>
    </NavWrapper>
)
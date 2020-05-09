import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
    padding: 18px;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.tertiary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid ${props => props.theme.border};
`;

const ChangeThemeBtn = styled.button`
    outline: none;
    font-weight: inherit;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.quaternary};
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
import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    border-radius: 4px;
    padding: 8px 24px;
    margin-bottom: 24px;
`;

const Title = styled.h2`
    margin: 0;
    padding: 20px 0;
`;

const Text = styled.p`
    font-size: 1.2rem;
    line-height: 1.3rem;
    margin: 0;
    padding: 12px 0;
`;

const Example = styled.pre`
    padding: 12px;
    margin: 0 0 12px;
    border-radius: 4px;
    background-color: ${props => props.theme.secondary};
    overflow-y: auto;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: inherit;
        border-radius: 4px;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${props => props.theme.hightlight};
    }
`

export default ({ title, text, example }) => (
    <ArticleWrapper>
        <Title>{title}</Title>
        {text.length ? (<Text>{text}</Text>) : null}
        <Example>{example}</Example>
    </ArticleWrapper>
)

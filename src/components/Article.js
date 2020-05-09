import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
    color: ${props => props.theme.primary};
    padding-bottom: 24px;
`;

const Title = styled.h2`
    margin: 0;
    padding: 24px 0;
`;

const Text = styled.p`
    font-size: 1.2rem;
    line-height: 1.3rem;
    margin: 0;
    padding: 12px 0;
`;

const Example = styled.pre`
    padding: 12px;
    border-radius: 4px;
    background-color: ${props => props.theme.secondary};
    overflow-y: auto;
`

export default ({ title, text, example }) => (
    <ArticleWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Example>{example}</Example>
    </ArticleWrapper>
)

import './layout.css';
import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../colors';
import FontBasis from "./fonts/basis/basis-grotesque-medium-pro.eot";
import FontBasisWoff2 from "./fonts/basis/basis-grotesque-medium-pro.woff2";
import FontBasisWoff from "./fonts/basis/basis-grotesque-medium-pro.woff";
import FontBasisTtf from "./fonts/basis/basis-grotesque-medium-pro.ttf";

import FontBasisRegular from "./fonts/basis/basis-grotesque-regular-pro.eot";
import FontBasisWoff2Regular from "./fonts/basis/basis-grotesque-regular-pro.woff2";
import FontBasisWoffRegular from "./fonts/basis/basis-grotesque-regular-pro.woff";
import FontBasisTtfRegular from "./fonts/basis/basis-grotesque-regular-pro.ttf";

export const MAX_WIDTH = '120rem';
export const MOBILE_PADDING = '3rem';
export const DESKTOP_PADDING = '6rem';

export const Container = (props) => {
    const { backgroundColor, textColor } = useContext(ColorContext);

    return <>
        <GlobalStyle/>
        <ColoredContainer {...props} $backgroundColor={backgroundColor} $textColor={textColor}/>
    </>;
};

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'basis-grotesque-medium-pro';
        src: url(${FontBasis});
        src: url('/fonts/basis/basis-grotesque-medium-pro.eot?#iefix') format('embedded-opentype'),
        url(${FontBasisWoff2}) format('woff2'),
        url(${FontBasisWoff}) format('woff'),
        url(${FontBasisTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'basis-grotesque-regular-pro';
        src: url(${FontBasisRegular});
        src: url('/fonts/basis/basis-grotesque-medium-pro.eot?#iefix') format('embedded-opentype'),
        url(${FontBasisWoff2Regular}) format('woff2'),
        url(${FontBasisWoffRegular}) format('woff'),
        url(${FontBasisTtfRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-size: 16px;
    }

    body {
        margin: 0;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
    }

    audio,
    canvas,
    progress,
    video {
        display: inline-block;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    progress {
        vertical-align: baseline;
    }

    [hidden],
    template {
        display: none;
    }

    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:active,
    a:hover {
        outline-width: 0;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: inherit;
        font-weight: bolder;
    }

    dfn {
        font-style: italic;
    }

    h1 {
        font-size: 3.75rem;
        line-height: 3.75rem;
        font-weight: 500;
        margin: 0.67rem 0;
    }

    mark {
        background-color: #ff0;
        color: #000;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    code,
    kbd,
    pre,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    figure {
        margin: 1em 40px;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font: inherit;
        margin: 0;
    }

    optgroup {
        font-weight: 700;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
        -webkit-appearance: button;
    }

    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    textarea {
        overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
        box-sizing: border-box;
        padding: 0;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    * {
        box-sizing: inherit;
    }

    *:before {
        box-sizing: inherit;
    }

    *:after {
        box-sizing: inherit;
    }

    body {
        color: hsla(0, 0%, 0%, 0.8);
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        object-fit: cover;
        
    }

    h1 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        text-rendering: optimizeLegibility;
        font-size: 3.75rem;
        line-height: 1.2;
    }

    h2 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        text-rendering: optimizeLegibility;
        font-size: 3rem;
        line-height: 3.75rem;
        font-weight: 500;
    }

    h3 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        text-rendering: optimizeLegibility;
        font-size: 2.25rem;
        line-height: 3rem;
        font-weight: 500;
    }

    h4 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        text-rendering: optimizeLegibility;
        font-size: 1.5rem;
        line-height: 2.0625rem;
        font-weight: 500;
    }

    hgroup {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    ul {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
    }

    ol {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
    }

    dl {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    dd {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    figure {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.45rem;
        font-size: 0.85rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.45rem;
    }

    table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
    }

    fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    blockquote {
        margin-left: 1.45rem;
        margin-right: 1.45rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    form {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    noscript {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0;
    }

    hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
    }

    address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    b {
        font-weight: bold;
    }

    strong {
        font-weight: bold;
    }

    dt {
        font-weight: bold;
    }

    th {
        font-weight: bold;
    }

    li {
        margin-bottom: calc(1.45rem / 2);
    }

    ol li {
        padding-left: 0;
    }

    ul li {
        padding-left: 0;
    }

    li > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
    }

    li > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
    }

    blockquote *:last-child {
        margin-bottom: 0;
    }

    li *:last-child {
        margin-bottom: 0;
    }

    p *:last-child {
        margin-bottom: 0;
    }

    li > p {
        margin-bottom: calc(1.45rem / 2);
    }

    code {
        font-size: 0.85rem;
        line-height: 1.45rem;
    }

    kbd {
        font-size: 0.85rem;
        line-height: 1.45rem;
    }

    samp {
        font-size: 0.85rem;
        line-height: 1.45rem;
    }

    abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
    }

    acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
    }

    abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
    }

    thead {
        text-align: left;
    }

    td,
    th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: 'tnum';
        -moz-font-feature-settings: 'tnum';
        -ms-font-feature-settings: 'tnum';
        -webkit-font-feature-settings: 'tnum';
        padding-left: 0.96667rem;
        padding-right: 0.96667rem;
        padding-top: 0.725rem;
        padding-bottom: calc(0.725rem - 1px);
    }

    th:first-child,
    td:first-child {
        padding-left: 0;
    }

    th:last-child,
    td:last-child {
        padding-right: 0;
    }

    tt,
    code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
    }

    pre code {
        background: none;
        line-height: 1.42;
    }

    code:before,
    code:after,
    tt:before,
    tt:after {
        letter-spacing: -0.2em;
        content: ' ';
    }

    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
        content: '';
    }

    button,
    a,
    div,
    span,
    textarea {
        font-family: 'basis-grotesque-regular-pro', Fallback, sans-serif;
        line-height: 1.3;
        font-size: 1.125rem;
    }

    p {
        font-size: 1.5rem;
        line-height: 2.0625rem;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: 'basis-grotesque-medium-pro', Fallback, sans-serif;
    }

    @media only screen and (max-width: 720px) {
        h1 {
            font-size: 2.25rem;
            line-height: 3rem;
        }

        h2 {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        h3 {
            font-size: 1.5rem;
            line-height: 2.0625rem;
        }

        h4 {
            font-size: 1.5rem;
            line-height: 2.0625rem;
        }

        p {
            font-size: 1.125rem;
            line-height: 1.5625rem;
        }
    }

    .CustomParagraph{
        margin-bottom: 0;
    }
    
`;


Container.Content = styled.div`
    margin: 0 auto;
    max-width: ${MAX_WIDTH};
`;

export const Section = styled.section`
    max-width: 1280px;

    @media screen and (min-width: 720px) {
    flex: 1 1 1280px;
  }
`;

export const Aside = styled.aside`
    flex: 1 0 40%;
    order: 1;
    display: flex;
    padding: ${MOBILE_PADDING} 0;

    @media screen and (min-width: 720px) {
    order: 0;
    padding: 0 ${DESKTOP_PADDING} 0 0;
  }
`;

const EmptyAsidePadding = styled.aside`
    flex: 1 0 40%;
    order: 1;
    display: flex;

    @media screen and (min-width: 720px) {
  order: 0;
}`;

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${MOBILE_PADDING};

    @media screen and (min-width: 720px) {
    padding: ${DESKTOP_PADDING};
    flex-direction: row;
  }
`;

export const ColorContext = React.createContext({
    backgroundColor: COLOR_CLAVE_PEACH,
    textColor: COLOR_CLAVE_GREEN,
});

export function ContentColumn({ asideContent, children, className }) {
    const AsideWrapper = asideContent ? Aside : EmptyAsidePadding;
    return (
        <LayoutWrapper className={className}>
            <AsideWrapper>{asideContent}</AsideWrapper>
            <Section>{children}</Section>
        </LayoutWrapper>
    );
}

const Layout = ({ asideContent, children, className }) => {
    return (
        <Container className={className}>
            <Container.Content>
                <ContentColumn asideContent={asideContent}>{children}</ContentColumn>
            </Container.Content>
        </Container>
    );
};

const ColoredContainer = styled.div`
    background-color: ${props => props.$backgroundColor};
    color: ${props => props.$textColor};
`;

export default Layout;

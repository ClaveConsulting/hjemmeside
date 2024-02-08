import styled from 'styled-components';

export const Ingress = styled.p`
    &,
    & span,
    & a {
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 400;
        @media only screen and (max-width: 719px) {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
`;

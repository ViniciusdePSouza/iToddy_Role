import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 2rem;

    margin-top: 8rem;

    gap: 3rem;
`

export const Header = styled.header`
    width: 100%;

    display: flex;
    justify-content:space-between;
    align-items: center;

    margin-bottom: 2rem;

    >div {
        width: 20%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const Title = styled.h2`
    color: ${({theme}) => theme.COLORS.SECONDARY};

    font-family: 'Nunito', sans-serif;
    font-size: 1.8rem;
`
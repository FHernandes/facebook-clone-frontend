import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: fit-content;
    width: 100%;
    background: linear-gradient(#d4d5d6, #242526);

    .container {
        width: 940px;
    }

    .banner {
        width: 100%;
        height: 350px;
        border-radius: 10px;
        object-fit: cover;
    }
`;

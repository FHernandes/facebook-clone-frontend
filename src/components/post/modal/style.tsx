import styled from "styled-components";

export const Container = styled.div`
    z-index: 2;

    position: fixed;
    top: 20%;
    bottom: auto;
    left: 35%;
    right: 35%;
    margin: auto auto auto auto;
    padding: 16px 0;

    width: 468px;
    height: fit-content;
    
    color: #ffffff;
    border-radius: 8px;
    background-color: #242526;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 16px 40%;

        font-size: 24px;
        font-weight: bold;

        border-bottom: 1px solid #3a3b3c;
    }

    .profile {
        display: flex;
        align-items: center;

        margin: 16px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            border-radius: 50%;
        }
        .username {
            font-size: 16px;
        }
        .privacy {
            display: flex;
            align-items: center;
            margin-top: 3px;
            font-size: 12px;

            svg {
                margin-right: 10px;
            }
        }
    }

    .description {
        height: 150px;
        padding: 0 16px;
        color: #b1b2b3
    }

    .addToPost {
        margin: 16px;
        padding: 16px;
        border: 1px solid #3a3b3c;
        border-radius: 8px;
    }

    .addPost {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 24px 16px 0 16px;
        padding: 16px;

        font-weight: bold;
        color: #b1b2b3;
        
        background-color: #3a3b3c;
        border-radius: 8px;
    }
`;

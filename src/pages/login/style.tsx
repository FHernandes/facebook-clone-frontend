import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: #f0f2f5;

    .login {
        width: 70%;
        height: 70%;
        display: flex;
        gap: 40px;
    }

    .loginLeft .loginRight {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .loginLeft {
        max-width: 550px;
    }

    .loginLogo {
        font-size: 50px;
        font-weight: 800;
        color: #1877f2;
        margin-bottom: 10px;
    }

    .loginDescription{
        font-size: 24px;
    }

    .loginBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 320px;
        height: 300px;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
    }

    .loginInput {
        height: 50px;
        border-radius: 8px;
        border: 1px solid gray;
        font-size: 18px;
        padding-left: 20px;

        :focus {
            outline: none;
        }
    }

    .loginButton {
        height: 50px;
        border-radius: 8px;
        border: none;

        background-color: #1877f2;

        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .loginForgot {
        text-align: center;
        color: #1877f2;
    }

    .loginRegisterButton {
        width: 60%;
        height: 50px;
        align-self: center;
        
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
        
        cursor: pointer;

        border-radius: 8px;
        border: none;
        background-color: #42b72a;
    }
`;

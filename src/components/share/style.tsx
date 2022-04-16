import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    
    border-radius: 8px;
    background-color: #242526;

    .share {
        padding: 10px;

        .createPost {
            display: flex;
            justify-content: space-between;

            .profile {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }

            .buttonCreatePost {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                border-radius: 8px;
                margin-left: 16px;

                font-size: 16px;
                font-weight: bold;
                color: #ffffff;

                background-color: #3a3b3c;
            }
        }
        .addMedia {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            padding: 20px 10px;

            font-weight: bold;
            color: #b0b1b2;

            .btn {
                display: flex;
                align-items: center;

                width: 156px;
            }

            .buttonMedia svg{
                margin-right: 10px;
                color: #45bd62;
            }

            .buttonCheckin svg{
                margin-right: 10px;
                color: #e04c60;
            }

            .buttonTagFriend svg{
                margin-right: 10px;
                color: #1877f2;
            }
        }
    }
`;

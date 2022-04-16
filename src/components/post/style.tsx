import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    
    border-radius: 8px;
    background-color: #242526;

    .post {
        padding: 10px 0;

        color: #ffffff;

        .postHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 20px;

            .profile {
                display: flex;
                align-items: center;
                img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    border-radius: 50%;
                }
                .title {
                    font-size: 16px;
                }
                .date {
                    margin-top: 3px;
                    font-size: 12px;
                }
            }

            .more {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 36px;
                height: 36px;

                font-size: 20px;
                border-radius: 50%;

                :hover {
                    background-color: #3a3b3c;
                }
            }
        }

        .description {
            margin: 10px 0;
            padding: 0 20px;

            font-size: 12px;
            letter-spacing: .7px;
        }

        .imagePost {
            width: 100%;
            max-width: 500px;
            height: 100%;
            max-height: 500px;

        }

        .countReaction {
            margin: 0 20px;
            padding: 10px 0;

            border-bottom: 1px solid #3a3b3c;
        }

        .reaction {
            display: flex;
            justify-content: space-around;
            gap: 20px;

            font-size: 14px;

            margin: 0 20px;

            border-bottom: 1px solid #3a3b3c;
            
            .button {
                display: flex;
                align-items: center;

                padding: 10px;

                svg {
                    margin-right: 10px;
                    font-size: 20px;
                }
            }
        }
        .comment {
            display: flex;
            align-items: center;
            margin-top: 10px;
            padding: 0 20px;

            .userProfile img {
                width: 32px;
                height: 32px;
                margin-right: 10px;
                border-radius: 50%;
            }

            .userComment {
                display: flex;
                align-items: center;

                padding: 0 16px;

                width: 100%;
                height: 36px;
                border-radius: 36px;
                background-color: #3a3b3c;

                color: #b0b1b2;
            }
        }
    }
`;

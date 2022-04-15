import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 60vh;
    width: 100%;
    background: linear-gradient(to bottom, #d4d5d6, #6a6b6c, #474849, #242526);

    .container {
        display: flex;
        flex-direction: column;
        width: 940px;
    }

    .banner {
        width: 100%;
        height: 55%;
        border-radius: 10px;
        object-fit: cover;
    }

    .aboutPage {
        padding: 0 20px;
        margin-top: -15px;

        .primaryHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid #4d4e4f;
        }

        .profile {
            display: flex;
            align-items: center;

            color: #ffffff;

            img {
                width: 132px;
                height: 132px;
                object-fit: cover;
                border: 6px solid #242526;
                border-radius: 50%;
            }
            .titlePage {
                margin-left: 20px;
                font-size: 26px;
                font-weight: bold;
            }
            .subtitle {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                
                width: 275px;
                margin-top: 10px;

                line-height: 20px;
                font-size: 16px;
                font-weight: normal;

                svg {
                    font-size: 2px;
                    margin: 0 4px;
                }

                .star {
                    font-size: 20px;
                    color: #ffb300;
                }
            }
        }

        .learnMore {
            margin-top: 80px;

            .css-sghohy-MuiButtonBase-root-MuiButton-root {
                text-transform: none;
                padding: 6px 60px;

                svg {
                    margin-right: 15px;
                }
            }

            .link {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;

                color: #ffffff;
                font-size: 12px;

                svg {
                    margin-right: 10px;
                    font-size: 16px;
                }
            }
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;
    width: 100%;
    background-color: #242526;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 940px;

        color: #ffffff;
    }

    .pageRedirects {
        display: flex;
        align-items: center;
        margin-left: 20px;

        font-weight: bold;
        color: #b3b4b5;

        .pageRedirect {            
            padding: 16px;

            cursor: pointer;

            :hover {
                border-radius: 8px;
                background-color: #3a3b3c;
            }
        }

        .pageDropdown {
            display: flex;
            align-items: center;
            padding: 16px;

            cursor: pointer;

            svg {
                margin-left: 5px;
            }

            :hover {
                border-radius: 8px;
                background-color: #3a3b3c;
            }
        }
    }

    .pageRedirects .active {
        color: #1976d2;
        border-bottom: 3px solid #1976d2;

        :hover {
            border-radius: 0 !important;
            background-color: #242526;
        }        
    }

    .rightButtons {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;

        margin-right: 20px;

        .likeButton {
            display: flex;
            align-items: center;
            padding: 8px 16px;
            color: #1976d2;
            border-radius: 8px;
            background-color: #233951;

            svg {
                margin-right: 5px;
                font-size: 20px;
            }
        }

        .button {
            display: flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: #3a3b3c;

            span{
                margin-left: 5px;
            }

            svg {
                font-size: 20px;
            }
        }
    }
`;

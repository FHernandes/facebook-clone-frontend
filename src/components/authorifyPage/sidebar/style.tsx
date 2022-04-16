import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    align-items: center;

    height: fit-content;
    width: 360px;
    margin-left: 20px;

    .card {
        width: 100%;
        padding: 10px 16px;

        border-radius: 8px;
        background-color: #242526;

        .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 16px;
        }

        .buttonContainer {
            display: flex;
            justify-content: space-between;
            gap: 15px;

            .button {
                text-align: center;

                width: 100%;
                padding: 8px;
                margin-top: 16px;
                border-radius: 8px;
                background-color: #3a3b3c;

                :hover {
                    background-color: #545556;
                }
            }
        }
    }
`;

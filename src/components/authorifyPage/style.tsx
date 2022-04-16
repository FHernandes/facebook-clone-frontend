import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #18191a;
    align-items: center;
    padding-bottom: 20px;

    .bodyContainer {
        display: flex;
        justify-content: center;

        .centerDiv {
            display: flex;            
            justify-content: space-between;

            width: 940px;
            margin-top: 16px;   

            color: #ffffff;
        }        
    }
`;

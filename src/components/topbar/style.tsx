import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 56px;
    width: 100%;
    background-color: #242526;
    /* background-color: #2374e1; */

    .topbarLeft {
        width: 20%;

        display: flex;
        align-items: center;
        margin-left: 20px;

        img{
            height: 40px;
            cursor: pointer;
        }

        .searchbar {
            display: flex;
            align-items: center;

            width: fit-content;
            height: 38px;
            margin-left: 10px;
            padding-right: 5px;
            background-color: #3a3b3c;
            border-radius: 30px;
        }

        .searchIcon {
            font-size: 20px !important;
            color: #ffffff;
            margin-left: 12px;
        }

        .searchInput {
            font-size: 16px;
            color: #ffffff;

            width: 130px;
            margin-left: 8px;
            background-color: #3a3b3c;
            border: none;
        }
        .searchInput:focus {
            outline: none;
        }
    }

    .topbarCenter {
        width: 60%;
        margin: 0 10%;

        .topbarIconItem {
            color: white;
            
            padding: 8px 30px;
            margin: 0 8px;
            border-radius: 8px;
            cursor: pointer;

            :hover {
                background-color: #3a3b3c;
            }
        }             
    }

    .topbarIcons {
            display: flex;
            justify-content: center;

            max-width: 550px;
        }
    
    .topbarRight{
        width: 20%;

        display: flex;
        align-items: center;

        .topbarProfile {
            display: flex;
            align-items: center;
            margin-right: 10px;

            .topbarImage{
                height: 35px;
                width: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
            .topbarUser{
                color: #ffffff;
                margin-left: 10px;
            }
        }

        .topbarIconItem {
            display: flex;
            align-items: center;

            color: white;
            
            padding: 10px 10px;
            margin: 0 8px;
            border-radius: 50%;
            cursor: pointer;
            background-color: #3a3b3c;
            
        } 
    }
`

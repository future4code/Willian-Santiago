import styled from "styled-components"

export const HomeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 280px;
    border: 2px solid #CCC;
    padding: 20px;
    margin: 20px;
    h2{
        width: 200px;
    }
    p{
        text-align: center;
        height: 80px;
        float: left;
    }
    button{
        margin: 10px;
        width: 50px;
        height: 50px;
        border-radius: 8px;
        cursor: pointer;
    }
`;

export const ProfileImagem = styled.img`
    width: 280px;
    height: 280px;
    border-radius: 10px;
`;
export const ContainerList = styled.div`
    display: flex;
    justify-content: center;

`;
export const ListasStyled = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const ListasContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #CCC;
    padding: 10px;
    width: 280px;
    justify-content: space-between;
    img{
    width: 60px;
    height: 60px;
    border-radius: 28px;
    margin: 10px;
    }
    h2{
        margin: 10px;

    }
    
`;

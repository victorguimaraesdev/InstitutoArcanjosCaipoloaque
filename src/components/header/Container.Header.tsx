import styled from "styled-components"

const ContainerMaster = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 220px;
    width: 100%;
    /* background: linear-gradient(0deg,rgba(0, 38, 204, 1) 0%, rgba(1, 5, 20, 1) 100%); */
    background-image: url("/assets/imgs/ban2.jpg");
    background-size: cover;        /* cobre toda a área */
    background-position: center;   /* centraliza a imagem */
    background-repeat: no-repeat;  /* evita repetição */
`
const Logo = styled.img`
    width: 150px;
    height: auto;
`


export const ContainerHeader = () => {
    return (
        <ContainerMaster>
            <Logo src="/assets/logo/logo.png" alt="logo" />
        </ContainerMaster>
    )
}
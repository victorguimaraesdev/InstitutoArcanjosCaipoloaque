import styled from "styled-components"

const ContainerMaster = styled.nav`
    display: flex;
    padding: 0 100px;
    gap: 100px;
    height: 50px;
    width: 50%;
    /* border-radius: 0 50px 50px 0; */
    background-color: rgba(0, 0, 0, 0.2);
`


const Link = styled.a`
    font-size: 15px;
    display: flex;              
    justify-content: center;    
    align-items: center;        
    text-decoration: none;  
    font-weight: 500;
    color: #ffffff; 
    cursor: pointer;            
`




export const ContainerNav = () => {
    return (
        <ContainerMaster>
            <Link>Home</Link>
            <Link>Galeria</Link>
            <Link>Campeonatos</Link>
            <Link>Sobre Nós</Link>
        </ContainerMaster>
    )
}
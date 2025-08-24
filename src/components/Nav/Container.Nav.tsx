import styled from "styled-components"

const ContainerMaster = styled.nav`
    display: flex;
    padding: 0 100px;
    gap: 100px;
    height: 50px;
    width: 50%;
    border-radius: 0 50px 50px 0;
    background-color: #f4f800;
`
//#fdff98

const Link = styled.a`
    font-size: 15px;
    display: flex;              
    justify-content: center;    
    align-items: center;        
    text-decoration: none;  
    font-weight: 700;
    color: #040d58; 
    cursor: pointer;            
`




export const ContainerNav = () => {
    return (
        <ContainerMaster>
            <Link>Home</Link>
            <Link>Galeria</Link>
            <Link>Campeonatos</Link>
            <Link>Sobre</Link>
        </ContainerMaster>
    )
}
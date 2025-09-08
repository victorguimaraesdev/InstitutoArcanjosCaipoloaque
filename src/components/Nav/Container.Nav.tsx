import styled from "styled-components"

const ContainerMaster = styled.nav`
    display: flex;
    justify-content: space-around;
    gap: 50px;
    height: 50px;
    width: 100%;
    background-color: #002063;
`
const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    /* border: 1px solid red; */
    gap: 30px;
`
const SubcontainerIcon = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;   
    flex-direction: column;     
    font-size: 0.7rem; 
    font-weight: 500;
    color: #ffffff; 
    gap: 5px;
    /* border: 2px solid red; */
    cursor: pointer;            
`
const Icon = styled.img`    
    width: 35px;
    height: auto;
`
const ContainerLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 400px;
    height: 100%;
`

const Link = styled.a`
    font-size: 17px;
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
            <ContainerLink>
                <Link>Home</Link>
                <Link>Galeria</Link>
                <Link>Campeonatos</Link>
                <Link>Sobre Nós</Link>
            </ContainerLink>
            <ContainerIcon>
                <SubcontainerIcon>
                    <Icon src="/assets/icons/contato.png" alt="contato" />
                </SubcontainerIcon>
                <SubcontainerIcon>
                    <Icon src="/assets/icons/insta.png" alt="contato" />
                </SubcontainerIcon>
                <SubcontainerIcon>
                    <Icon src="/assets/icons/face.png" alt="contato" />
                </SubcontainerIcon>
            </ContainerIcon>
        </ContainerMaster>
    )
}
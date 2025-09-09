import styled from "styled-components"

const ContainerMaster = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 500px;
    border-top: 50px solid #002063;
    padding: 0 10px;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px 10px;
    }
`

const ContainerCard = styled.div`
    display: flex;
    width: 45%;
    min-width: 300px;
    height: 250px;
    border: 4px solid #002063;

    @media (max-width: 1024px) {
        width: 70%;
        height: 240px;
    }

    @media (max-width: 768px) {
        width: 90%;
        height: 230px;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 480px) {
        height: auto;
        padding: 10px 0;
    }
`

const ContainerImage = styled.img`
    width: 30%;
    height: auto;
    border-right: 4px solid #002063;

    @media (max-width: 1024px) {
        width: 35%;
    }

    @media (max-width: 768px) {
        width: 50%;
        border-right: none;
        border-bottom: 4px solid #002063;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        width: 60%;
    }
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 70%;
    height: 100%;
    overflow: hidden;
    word-break: break-word;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`

const CardTitle = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: #002063;
    word-break: break-word;

    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`

const CardSubtitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 400;
    color: #002063;
    word-break: break-word;

    @media (max-width: 1024px) {
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`

const CardText = styled.p`
    font-size: 0.95rem;
    max-width: 100%;
    line-height: 1.5;
    color: #333;
    word-break: break-word;

    @media (max-width: 1024px) {
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`
const Ball = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 30px;
`

export const ContainerCardHome = () => {
    return (
        <ContainerMaster>
            <Ball src="/assets/icons/ball.png" />
            <ContainerCard>
                <ContainerImage src="/assets/imgs/diretor2.png" />
                <ContainerInfo>
                    <CardTitle>Fernando de Lima Carazatto</CardTitle>
                    <CardSubtitle>Diretor do Instituto Arcanjo Caiaque Polo</CardSubtitle>
                    <CardText>Técnico da Seleção Brasileira Sênior de Caiaque Polo</CardText>
                    <CardText>Apoiador Técnico do Instituto Arcanjo Caiaque Polo</CardText>
                </ContainerInfo>
            </ContainerCard>
        </ContainerMaster>
    )
}

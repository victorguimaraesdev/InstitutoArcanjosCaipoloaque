import styled from "styled-components";

const ContainerMaster = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 400px;

    border-top: 50px solid #002063;
    /* border: 2px solid green; */
`
const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  width: 100%;
  min-height: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #002063;

    @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`
const SubTitle = styled.h2`
    font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 400;
  color: #002063;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  max-width: 700px;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const Icon = styled.img`
  width: 70px;
  height: auto;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 80px;
  }
`;
const ButtonInfo = styled.button`
  background-color: #002063;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00ffea;
  }
`;

export const ContainerCampeonato = () => {
  return (
    <ContainerMaster>
      <ContainerInfo>
        <Icon src="/assets/icons/trofeu.png" alt="logo" />
        <Title>Nossos Campeonatos</Title>
        <SubTitle>Histórias escritas dentro d’água</SubTitle>
        <Text>
          Ao longo da nossa trajetória, tivemos a honra de participar de torneios que
          desafiaram nossa resistência, união e paixão pelo caiaque polo. Cada
          campeonato foi uma oportunidade de aprender, crescer e mostrar a força da
          nossa equipe dentro e fora da água.
        </Text>
        <ButtonInfo>Ver Campeonatos</ButtonInfo>
      </ContainerInfo>
    </ContainerMaster>
  )
}
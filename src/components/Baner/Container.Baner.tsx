import styled from "styled-components";

const ContainerBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
const BannerImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 80px;
  }
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #002063;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const BannerSubtitle = styled.h2`
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

const BannerText = styled.p`
  font-size: 1rem;
  max-width: 700px;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

export const ContainerBaner = () => {
  return (
    <ContainerBanner>
      <BannerImage src="/assets/icons/caiaque.png" alt="Ícone de caiaque" />
      <BannerTitle>Instituto Arcanjo Caiaque Polo</BannerTitle>
      <BannerSubtitle>Promovendo o caiaque polo em São Miguel Arcanjo</BannerSubtitle>
      <BannerText>
        Fundado legalmente em 26/04/2021, o Instituto é uma organização sem fins lucrativos criada por
        pais e pelo diretor do comitê brasileiro de caiaque polo. Nossa missão é formar atletas,
        organizar a escolinha de caiaque e representar São Miguel Arcanjo nas principais competições
        nacionais de canoagem.
      </BannerText>
      <ButtonInfo>Conhecer mais</ButtonInfo>
    </ContainerBanner>
  );
};

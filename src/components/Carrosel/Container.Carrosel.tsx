import { useState } from "react";
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ContainerMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  border-top: 50px solid #002063;
`;

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
`;

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

/* -------- CARROSSEL RESPONSIVO -------- */
const Carrosel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin-top: 20px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const ContainerMain = styled.div`
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const ArrowLeft = styled(SlArrowLeft)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: #002063;
  cursor: pointer;
  margin-right: 15px;

  @media (max-width: 480px) {
    margin-right: 8px;
  }
`;

const ArrowRight = styled(SlArrowRight)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: #002063;
  cursor: pointer;
  margin-left: 15px;

  @media (max-width: 480px) {
    margin-left: 8px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
  }
`;

/* -------- COMPONENTE -------- */
export const ContainerCarrosel = () => {
  const imagens = [
    "/assets/imgs/img1.png",
    "/assets/imgs/img2.png",
    "/assets/imgs/img3.png",
    "/assets/imgs/img4.png",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <ContainerMaster>
      <ContainerInfo>
        <Icon src="/assets/icons/gallery.png" alt="logo" />
        <Title>Descubra Nossa Galeria</Title>
        <SubTitle>Cada imagem conta uma história única</SubTitle>
        <Text>
          Navegue pelas fotos e vídeos da nossa equipe em ação e sinta de perto a
          dedicação que colocamos em cada remada, passe e gol.
        </Text>
        <ButtonInfo>Explorar Galeria</ButtonInfo>
      </ContainerInfo>

      <Carrosel>
        <ArrowLeft onClick={prevImage} />
        <ContainerMain>
          <Img src={imagens[index]} alt={`Imagem ${index + 1}`} />
        </ContainerMain>
        <ArrowRight onClick={nextImage} />
      </Carrosel>
    </ContainerMaster>
  );
};

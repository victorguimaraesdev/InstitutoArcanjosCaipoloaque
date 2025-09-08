import styled from "styled-components";

const ContainerBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 400px;

  background-image: url("/assets/imgs/banner.jpg"); /* troca quando quiser */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

const BannerImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 90px;
  }
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #002063; /* cor principal */

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const BannerSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 400;
  color: #002063; /* cor principal */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BannerText = styled.p`
  font-size: 1rem;
  max-width: 700px;
  line-height: 1.5;
  color: #333; /* cor neutra para boa leitura sobre fundo branco */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Banner = () => {
    return (
        <ContainerBanner>
            <BannerImage src="/assets/icons/caiaque.png" alt="icone" />
            <BannerTitle>Bem-vindo ao Nosso Site</BannerTitle>
            <BannerSubtitle>Subtítulo de destaque</BannerSubtitle>
            <BannerText>
                Aqui você pode colocar uma descrição breve do seu projeto, serviço ou
                empresa. Esse espaço é perfeito para passar a mensagem principal.
            </BannerText>
        </ContainerBanner>
    );
};

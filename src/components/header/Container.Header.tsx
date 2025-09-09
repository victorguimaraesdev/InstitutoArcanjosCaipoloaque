import styled from "styled-components";

const ContainerMaster = styled.header`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 400px;
  padding: 0 2rem;

  background-image: url("/assets/imgs/ba.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 1;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const ContainerHeader = () => {
  return (
    <ContainerMaster>
      <Logo src="/assets/logo/logo.png" alt="logo" />
    </ContainerMaster>
  );
};

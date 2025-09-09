import { useState } from "react";
import styled from "styled-components";

const ContainerMaster = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%; 
  height: 70px;
  width: 100%;

  background-color: #002063;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const ContainerLink = styled.div<{ open: boolean }>`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background: #002063;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    gap: 20px;

    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffea;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -4px;
    background: #00ffea;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubcontainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 500;
  color: #ffffff;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #00ffea;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: auto;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    transition: 0.3s;
  }
`;
const H1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ContainerNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerMaster>
      <H1>IACP</H1>

      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <ContainerLink open={open}>
        <Link href="#">Home</Link>
        <Link href="#">Galeria</Link>
        <Link href="#">Campeonatos</Link>
        <Link href="#">Sobre Nós</Link>
      </ContainerLink>

      <ContainerIcon>
        <SubcontainerIcon>
          <Icon src="/assets/icons/contato.png" alt="contato" />
        </SubcontainerIcon>
        <SubcontainerIcon>
          <Icon src="/assets/icons/insta.png" alt="Instagram" />
        </SubcontainerIcon>
        <SubcontainerIcon>
          <Icon src="/assets/icons/face.png" alt="Facebook" />
        </SubcontainerIcon>
      </ContainerIcon>
    </ContainerMaster>
  );
};

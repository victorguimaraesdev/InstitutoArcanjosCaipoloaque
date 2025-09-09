import styled from "styled-components";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #002063;
  color: #fff;
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;

  h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p, a {
    font-size: 0.9rem;
    color: #ddd;
    text-decoration: none;
    line-height: 1.6;

    &:hover {
      color: #00ffea;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 15px;

  a {
    font-size: 1.5rem;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffea;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 15px;
  font-size: 0.8rem;
  color: #bbb;
  width: 100%;
  text-align: center;
`;

export const ContainerFooter = () => {
    return (
        <FooterContainer>
            <FooterTop>
                {/* Sobre */}
                <FooterSection>
                    <h3>Caique Polo</h3>
                    <p>
                        Nosso time de polo aquático é movido pela paixão, dedicação e trabalho em equipe.
                        Cada treino, cada remada e cada gol é parte da nossa história.
                    </p>
                </FooterSection>

                {/* Links rápidos */}
                <FooterSection>
                    <h3>Links</h3>
                    <a href="#galeria">Galeria</a> <br />
                    <a href="#sobre">Sobre Nós</a> <br />
                    <a href="#contato">Contato</a>
                </FooterSection>

                {/* Contato */}
                <FooterSection>
                    <h3>Contato</h3>
                    <p>Email: <a href="mailto:caiquepolo@email.com">caiquepolo@email.com</a></p>
                    <p>São Miguel Arcanjo - SP</p>
                    <SocialIcons>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="mailto:caiquepolo@email.com"><FaEnvelope /></a>
                    </SocialIcons>
                </FooterSection>
            </FooterTop>

            <FooterBottom>
                © {new Date().getFullYear()} Caique Polo. Todos os direitos reservados.
            </FooterBottom>
        </FooterContainer>
    );
};

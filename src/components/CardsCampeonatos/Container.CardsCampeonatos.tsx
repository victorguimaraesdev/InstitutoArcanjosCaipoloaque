import styled from "styled-components";
import { cardsData } from "../../utils/cardsData";

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 40px auto;
  max-width: 1200px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 280px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #002063;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
`;

const ButtonCard = styled.button`
  background-color: #002063;
  color: #fff;
  border: none;
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00ffea;
    color: #002063;
  }
`;


export const ContainerCardsCampeonatos = () => {
  return (
    <ContainerCards>
      {cardsData.map((card) => (
        <Card key={card.id}>
          <CardImage src={card.img} alt={card.title} />
          <CardBody>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
            <ButtonCard>Saiba Mais</ButtonCard>
          </CardBody>
        </Card>
      ))}
    </ContainerCards>
  );
};

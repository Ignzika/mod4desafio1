import Card from "react-bootstrap/Card";
import BackGround from "./tags";
import Image from "react-bootstrap/Image";

const CardBoost = ({
  UrlImage,
  ALTimg,
  CardTitle,
  CardText,
  CardBorder,
  CardBg,
  ColorBttnTxt,
  ColorButtonBg,
  Bttntxt,
}) => {
  return (
    <>
      <Card
        className="cardcss"
        style={{ width: "18rem" }}
        bg={CardBg}
        border={CardBorder}
      >
        <Card.Img variant="top" src={UrlImage} alt={ALTimg} rounded="True" />

        <Card.Body>
          <Card.Title className="title">{CardTitle}</Card.Title>
          <Card.Text className="txt">{CardText}</Card.Text>

          <BackGround
            ColorBttnTxt={ColorBttnTxt}
            ColorButtonBg={ColorButtonBg}
            Bttntxt={Bttntxt}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBoost;

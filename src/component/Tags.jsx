import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const BackGround = ({ ColorBttnTxt, ColorButtonBg, Bttntxt }) => {
  return (
    <>
      <Stack direction="horizontal" className="justify-content-center">
        <Badge as={Button} bg={ColorButtonBg} text={ColorBttnTxt}>
          <p> {Bttntxt}</p>
        </Badge>
      </Stack>
    </>
  );
};

export default BackGround;

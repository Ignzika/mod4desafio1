import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import Partearriba from "./component/header";
import Footer from "./component/Footer";
import CardBoost from "./component/CardObj";

function App() {
  // asca va javascrypt que se quiera agregar
  // debe tener los <> </> para poder imprimirse // en ves de ` `
  return (
    <>
      <header>
        <Partearriba title="Aire Libre" />
      </header>

      <main className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={3} className="row row-cols-4">
          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            //text
            ALTimg="carpa para camping"
            CardTitle="Carpa"
            CardText="Ideal para camping"
            Bttntxt="Comprar"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="success"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            //text
            ALTimg="casa rodante"
            CardTitle="Trailer ovalado"
            Bttntxt="Cotizar"
            //styles
            CardText="Solo a pedido, no insista"
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="warning"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            //text
            ALTimg="Jarro metalico"
            CardTitle="Jarra metalica"
            CardText="NO tomar con manos desnudas"
            Bttntxt="Comprar"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="success"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1632088563376-d714bff9c2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            //text
            ALTimg="cocinilla"
            CardTitle="Mini-Anafe a gas"
            CardText="compacta, liviana , elegante, y con solo 5% de riesgo de explosion"
            Bttntxt="Comprar"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="success"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1444228250525-3d441b642d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            //text
            ALTimg="Axe no desodorante"
            CardTitle="Hacha de mano"
            CardText="NO usar para lanzamiento. enserio, dejen de hacerlo"
            Bttntxt="Solicitar informacion"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="secondary"
          />
          <CardBoost
            UrlImage="https://images.unsplash.com/flagged/photo-1562307294-4060df701fa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80"
            //text
            ALTimg="linterna de cabeza"
            CardTitle="Faro de cabeza...rlly"
            CardText="Por que nadie lo pidio, nadie lo solicito y a nadie le interesa."
            Bttntxt="De quien seria la `Brillante` idea"
            //styles
            CardBg="secondary"
            CardBorder="danger"
            ColorBttnTxt="ligth"
            ColorButtonBg="danger"
          />
          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1620764803510-e6007eb5b10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80"
            //text
            ALTimg="Radio am/fm de supervivencia"
            CardTitle="Radio de supervivencia"
            CardText="perfecta para psicofonias"
            Bttntxt="Owgqj4$#4 wef"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="white"
          />
          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1525513688408-aef73a11a340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            //text
            ALTimg="notebook"
            CardTitle="Notebook de trabajo"
            CardText="Nada más necesario para desconectarte del trabajo...que más trabajo"
            Bttntxt="Rlly ngga?"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="dark"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1619115288679-b4e581327883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            //text
            ALTimg="quirofano"
            CardTitle="Pabellon portatil"
            CardText="Esencial para las peliculas de terror y las peritonitis"
            Bttntxt="Agendar hora"
            //styles
            CardBg="danger"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="warning"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1579684288402-e3e337bcc7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            //text
            ALTimg="Ma  quinaria medica de resonancia"
            CardTitle="Resonancia MAgnetica"
            CardText="Unsplash por algun motivo lo mezclo con el equipamiento de camping"
            Bttntxt="interesante... pero bue"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="success"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1574687357639-60df588aaab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1311&q=80"
            //text
            ALTimg="vintage camping"
            CardTitle="Fisura temporal de camping"
            CardText="El azathot esta haciendo de las suyas"
            Bttntxt="Tiem Travel here"
            //styles
            CardBg="black"
            CardBorder="warning"
            ColorBttnTxt="ligth"
            ColorButtonBg="black"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80"
            //text
            ALTimg="dron"
            CardTitle="Dron de vigilancia"
            CardText="los depredadores acechan"
            Bttntxt="RUN!"
            //styles
            CardBg="info"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="white"
          />

          <CardBoost
            UrlImage="https://images.unsplash.com/photo-1666013751273-7b8554f187e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            //text
            ALTimg="doggo doggo dogus"
            CardTitle="Este es un perro"
            CardText="esta es la tarjeta modelo... la dejo por que me gusto el perro"
            Bttntxt="adoptar"
            //styles
            CardBg="secondary"
            CardBorder="warning"
            ColorBttnTxt="dark"
            ColorButtonBg="primary"
          />
        </Stack>
      </main>

      <footer>
        <Footer text="No me queda creatividad para un texto aqui asi que aca va un hermoso lorem: " />
      </footer>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

import styled from "styled-components";
import {
  ButtonCheck,
  ButtonGenerate,
  ButtonMinus,
  ButtonPlus,
} from "./components/buttons";
import generatePassword from "./hook/generatePassword";

const App = () => {
  const [config, setConfig] = useState({
    charactersNumber: 7,
    symbols: true,
    numbers: true,
    capitalLetters: true,
  });

  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);

  const incrementCharacter = () => {
    setConfig({
      ...config,
      charactersNumber: config.charactersNumber + 1,
    });
  };

  const decrementCharacter = () => {
    if (config.charactersNumber > 1) {
      setConfig({
        ...config,
        charactersNumber: config.charactersNumber - 1,
      });
    }
  };

  const toggle = (option) => {
    switch (option) {
      case "symbol":
        setConfig({
          ...config,
          symbols: !config.symbols,
        });
        break;
      case "number":
        setConfig({
          ...config,
          numbers: !config.numbers,
        });
        break;
      case "cLetter":
        setConfig({
          ...config,
          capitalLetters: !config.capitalLetters,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(generatePassword(config));
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);

    if(copy){
      setCopy(false);
    }
    setCopy(true);  
  };

  useEffect(() => {
    setPassword(generatePassword(config));
  }, []);

  

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <Fields>
            <label>Numero de caracteres:</label>
            <Control>
              <ButtonMinus click={decrementCharacter} />
              <span>{config.charactersNumber}</span>
              <ButtonPlus click={incrementCharacter} />
            </Control>
          </Fields>

          <Fields>
            <label>¿Incluir Símbolo?</label>
            <ButtonCheck
              selected={config.symbols}
              toggle={toggle}
              type="symbol"
            />
          </Fields>

          <Fields>
            <label>¿Incluir Numeros?</label>
            <ButtonCheck
              selected={config.numbers}
              toggle={toggle}
              type="number"
            />
          </Fields>

          <Fields>
            <label>¿Incluir Mayusculas?</label>
            <ButtonCheck
              selected={config.capitalLetters}
              toggle={toggle}
              type="cLetter"
            />
          </Fields>

          <Fields>
            <ButtonGenerate />

            <Input
              onClick={copyPassword}
              type="text"
              readOnly={true}
              value={password}
            />
            <p>Click para copiar la contraseña generada.</p>
          </Fields>
        </form>
      </Card>
     {copy?  <Toast>Contraseña copiada!</Toast> : null}
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 500px;
  width: 90%;
  margin: 3rem auto;
`;

const Card = styled.div`
  background-color: #0000002b;
  border-radius: 5px;
  padding: 1rem;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  p {
    text-align: center;
    margin-top: 1rem;
  }
`;

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }
  span {
    line-height: 40px;
    background-color: #4e187c;
  }
`;

const Toast = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 200px;
  padding: 1rem;
  text-align: center;
  background: #297ea6;
  border-radius: 4px;
  -webkit-animation: Toast 0.6s ease;
  animation: Toast 0.6s ease;
  font-weight: bold;

  @keyframes Toast {
    0% {
      right: -1000px;
    }

    100% {
      right: 5px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    border: 1px solid rgba(102, 102, 102, 0.5);
  }
  &::selection {
    background-color: #4389a2;
  }
  &::-moz-selection {
    background-color: #4389a2;
  }
`;

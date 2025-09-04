import { useState } from "react";
import Header from "./components/Header"
import Resultado from "./components/Resultado"
import "./css/style.css"
import "./css/global.css"

function App() {

  //HOOK - useState - Manipula o estado da variável
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState();
  const [mostrarResultado, setMostrarResultado] = useState(false);

  //CRIANDO A FUNÇÃO CALCULAR IMC
  const calcularIMC = (e) => {
    e.preventDefault(); //evita o recarregamento da página
    if (altura > 0 && peso > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); //arredonda para 2 casas decimais
      setMostrarResultado(true);
    } else {
      alert("Por favor digite valores válidos");
      setMostrarResultado(false);
    }
  }
  
  return (
    <div className ="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura"><span>(exemplo: 1.80)</span></label>
            <input
              type="number"
              id="altura"
              placeholder="Digite sua altura (em metros)"
              value={altura}
              onChange={(e) => setAltura(parseFloat (e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="peso"><span>(exemplo: 80)</span></label>
            <input
              type="number"
              id="peso"
              placeholder="Digite seu peso (em kg)"
              value={peso}
              onChange={(e) => setPeso(parseFloat (e.target.value))}
            />
          </div>
          <button id="botao" onClick={calcularIMC}>Calcular</button>
        </form>
      </div>
      {mostrarResultado &&(
        <Resultado resultado = {resultado}/>
      )}
    </div>
  )
}

export default App

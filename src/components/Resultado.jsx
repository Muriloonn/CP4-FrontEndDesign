import "../css/global.css"
import "../css/resultado.css"
import TabelaIMC from "./TabelaIMC"

//destruct - Desestruturação - acessa os dados de outro componente
function Resultado({resultado}){
    return (
        <div>
            <div className="tabela">
                <h2>
                    Seu IMC é de: <span class name="imcSpan">{resultado}</span>
                </h2>

            </div>

            <table className='tabelaResultado'>
                <thead className='tabelaHeader'>
                    <tr>
                        <th id="classificacao">Classificação</th>
                        <th id="imc">IMC</th>
                    </tr>
                </thead>
                <tbody className="tabelaBody">
                    <tr>{TabelaIMC(resultado)}</tr>
                </tbody>

            </table>
        </div>
    )
}
export default Resultado

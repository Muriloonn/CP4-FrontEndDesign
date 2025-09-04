const TabelaIMC=(resultado)=>{
    if(resultado<18){
        return (
            <>
            <td className="baixoPeso">Abaixo do peso</td>
            <td>&lt; 18</td>
            </>
        );
    }else if (resultado >18 && resultado <25){
        return(
            <>
            <td className="pesoNormal">Peso Normal</td>
            <td>18 - 24.9</td>
            </>
        );
    }else if(resultado>24 && resultado<30){
        return(
            <>
            <td className="sobrePeso">Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        );
    }else if (resultado > 29 && resultado <35){
        return(
            <>
            <td className="obesidade1">Obesidade Grau-1</td>
            <td>30 - 34.9</td>
            </>
        );
    }else{
        return(
            <>
            <td className="obesidadeMorbida">Obesidade Mórbida</td>
            <td>&gt; 40</td>
            </>
        );
    }
}

export default TabelaIMC
import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return() =>{
            console.log("O componene finalizou")
        }
    }, []);    

    useEffect(() => {
        console.log("O estado Mudou")
    }, [nome]);

    useEffect(() => {
        console.log("materiaA mudou para: " + materiaA)
    }, [materiaA,materiaB, materiaC ]);

    const alteraNome = (evento) =>{
        ///console.log(evento.target.value);
        /// setNome (evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3;

        if (media >= 7){
            return (
                <p> Ola {nome} Voce foi aprovado</p>
            )
        }else{
            return(
                <p>Ola {nome} Voce NAO foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()} 
        </form>
    );
}

export default Formulario;

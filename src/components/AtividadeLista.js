import React from "react"
import Atividade from './Atividade';


export default function AtividadeLista(props) {

    return (
        <>
            <div>
                <div className='mt-3'   >
                    {props.atividades.map(ativi => (
                        <Atividade ativi={ativi} deletarAtividades={props.deletarAtividades} editarAtividades={props.editarAtividades} atividadeSelecionada={props.atividadeSelecionada} />
                    ))}
                    
                </div >
            </div>
        </>
    )
}
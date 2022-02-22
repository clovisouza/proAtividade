import React from "react"


export default function Atividade(props) {

  function prioridadeLabel(param) {
            switch (param) {
              case '1':
                return 'Baixa';
              case '2':
                return 'Normal';
              case '3':
                return 'Alta';
              default:
                return 'Não definido';
            }
          }
        
          function prioridadeStyle(param, icone) {
            switch (param) {
              case '1':
                return icone ? 'smile' : 'sucess';
              case '2':
                return icone ? 'meh' : 'dark';
              case '3':
                return icone ? 'frown' : 'warning';
              default:
                return 'Não definido';
            }
          }
    
  return (
    <>
        <div>
            <div key={props.ativi.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(props.ativi.prioridade)}>
                <div className="card-body" >
                    <div className="d-flex justify-content-between">
                        <h5 className='card-title'>
                            <span className="badge bg-secondary me-1">{props.ativi.id}</span>
                            -{props.ativi.titulo}
                        </h5>
                        <h6>
                            Prioridade:
                            <span className={'ms-1 text-' + prioridadeStyle(props.ativi.prioridade)}>
                                <i className={'me-1 far fa-' + prioridadeStyle(props.ativi.prioridade, true)}></i>
                                -{prioridadeLabel(props.ativi.prioridade)}
                            </span>
                        </h6>
                    </div>

                    <p className="card-text">{props.ativi.id} - {props.ativi.descricao}
                    </p>
                    <div className="d-flex justify-content-end pt-2 m-0 border-top">
                        <button 
                        className="btn btn-sm btn-outline-primary me-2 "
                        onClick={() => props.editarAtividades(props.ativi.id)}
                        >
                            <i className='fas fa-pen me-2'></i>
                            editar
                        </button>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => props.deletarAtividades(props.ativi.id)}>
                            <i className='fas fa-trash me-2'></i>
                            Deletar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>
)
}
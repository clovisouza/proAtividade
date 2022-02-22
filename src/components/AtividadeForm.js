import {React,useState, useEffect } from "react"

const atividadeInicial={
    id:0,
    titulo:'',
    prioridade:0,
    descricao:''
}

export default function AtividadeForm(props) {

    const [atividade,setAtividade]=useState(atividadeAtual());



    const inputTextHandler=(e)=>{
        const {name,value} = e.target;
        console.log(name);
        console.log(value);

        setAtividade({...atividade,[name]:value});

    }

    function atividadeAtual(){
        if(props.atividadeSelecionada.id>0){
            return props.atividadeSelecionada;
        }
        else{
            return atividadeInicial;

        }

    }

    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(props.atividadeSelecionada.id!==0)
        {
            props.atualizarAtividade(atividade);
        }
        else
        {
            props.addAtividade(atividade);
        }
        setAtividade(atividadeInicial);
    }

    useEffect(()=>{
        if(props.atividadeSelecionada.id>0){
            setAtividade(props.atividadeSelecionada)
        }
    },[props.atividadeSelecionada]);

    

    return (
        <>
        <h1>Atividade {atividade.id !==0? atividade.id:''} </h1>
            <div>
                <form className="row g-3" onSubmit={handleSubmit}>
                   
                    <div className="col-md-6">
                        <label className="form-label">
                            Título
                        </label>
                        <input id="titulo"
                            type="text"                            
                            className="form-control"
                            value={atividade.titulo}
                            onChange={inputTextHandler}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Prioridade</label>
                        <select 
                        name="prioridade" 
                        id="prioridade" 
                        className="form-select"
                        value={atividade.prioridade}
                        onChange={inputTextHandler}>
                            <option defaultValue="0">Selecione</option>
                            <option value="1">Baixa</option>
                            <option value="2">Normal</option>
                            <option value="3">Alta</option>
                        </select>
                    </div>
                   
                    <div className="col-md-12">
                        <label className="form-label">
                            Descrição
                        </label>
                        <textarea id="descricao"
                            name="descricao"
                            type="text"
                            value={atividade.descricao}
                            className="form-control"
                            onChange={inputTextHandler}
                        />
                    </div>
                    <hr />
                    {
                        atividade.id===0?
                        <button className="btn btn-outline-secondary"
                        type="submit" >
                        <i className='fas fa-plus me-2'></i>
                           Atividade
                        </button>
                        :
                        <>
                        <button className="btn btn-outline-secondary me-2"
                            type="submit" >
                            <i className='fas fa-plus me-2'></i>
                            Salvar
                        </button>
                        <button className="btn btn-outline-secondary"
                            onClick={handleCancelar} >
                         <i className='fas fa-plus me-2'></i>
                            Cancelar
                        </button>
                        </>
                    }
                </form>
            </div>
        </>
    )
}
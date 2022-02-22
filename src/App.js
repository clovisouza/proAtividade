
import './App.css';

import { useState, useEffect } from 'react';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialstate = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'Teste',
    descricao: 'Teste de descricao',
  },
  {
    id: 2,
    prioridade: '3',
    titulo: 'Teste22',
    descricao: 'Teste de descricao22',
  },
]

function App() {

  const [atividades, setAtividades] = useState(initialstate)
  const [atividade, setAtividade] = useState(initialstate)

  const[index,setIndex] = useState(0);


  useEffect(()=>{
    atividades.length <= 0 ? setIndex(1): 
    setIndex(Math.max.apply(Math, atividades.map((item) => item.id))+1);
  },[atividades])

  function addAtividade(ativi) {        
    setAtividades([...atividades, { ...ativi,id:index }])
    console.log(atividades);
  }

  function deletarAtividades(id) {
    const atividadesFIltradas = atividades.filter(atividades => atividades.id !== id);
    setAtividades([...atividadesFIltradas])

  }

  function editarAtividades(id){
    const atividade = atividades.filter(atividades => atividades.id === id);
    setAtividade(atividade[0]);
  }

  function atualizarAtividade(ativ)
  {
    setAtividades(atividades.map(item=> item.id=== ativ.id ? ativ:item ));
    setAtividade({id:0});
  }

  function cancelarAtividade(){
    setAtividade({id:0});
  }

  return (
    <>

      <AtividadeForm 
      addAtividade={addAtividade}  
      atividadeSelecionada={atividade}
      cancelarAtividade={cancelarAtividade}
      atualizarAtividade={atualizarAtividade}
      />


      <div>
       <AtividadeLista deletarAtividades={deletarAtividades} atividadeSelecionada={atividade} atividades={atividades} editarAtividades={editarAtividades}/>
      </div>
    </>
  );
}

export default App;

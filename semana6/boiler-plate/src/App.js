import React from 'react'
import styled from 'styled-components'
import { formatDiagnostic } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      
      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: 'Texto da tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Texto da segunda tarefa',
        completa: true // Indica se a tarefa está completa (true ou false)
      }
    ],
      inputValue: 'pendentes',
      filtro: ''
    }

    gotTarefas = () => {
      const tarefasString = window.localStorage.setItem("tareas", JSON.stringfy(tarefas))
      const tarefas = JSON.parse(tarefasString)
      console.log(tarefas)
    }

  componentDidUpdate() {
    
  
  };

  componentDidMount() {

    
  };
  componentTarefas = (event) => {
    this.setState({inputValue: event.target.value})
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // Explicação abaixo
      texto: this.state.inputValue,
      completa: false // Indica se a tarefa está completa (true ou false)
    }
    const novaListaDetarefas = [novaTarefa, ...this.state.tarefas, novaTarefa]
    
    this.setState({tarefas: novaListaDetarefas })

  }

  selectTarefa = (id) => {
    const novaListaDetarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa, completa: !tarefa.completa
        }
        return novaTarefa
      }
    })
    this.setState({tarefas: novaListaDetarefas})

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value={this.state.filtro}>Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

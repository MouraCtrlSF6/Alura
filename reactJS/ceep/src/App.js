import React from 'react'
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/';
import './assets/App.css'
class App extends React.Component {
  constructor() {
    super()
    this.notesArray = []
  }
  criarCard(titulo, texto) {
    this.notesArray.push({
      title: titulo,
      text: texto
    })
    this.setState({
      notes: this.notesArray
    })
  }
  render() {
    return (
      <div className="app-container">
        <FormularioCadastro criarCard = {this.criarCard.bind(this)} />
        <ListaDeNotas notes = {this.notesArray}/>
      </div>
    );
  }
}

export default App;

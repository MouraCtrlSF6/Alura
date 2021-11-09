import React from 'react';
import './FormularioCadastro.css'
class FormularioCadastro extends React.Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.text = ''
  }
  _handleMudancaTitulo(e) { 
    this.title = e.target.value
  }
  _handleMudancaTexto(e) {
    this.text = e.target.value
  }
  _criarCard(e) { 
    e.preventDefault()
    e.stopPropagation()
    this.props.criarCard(this.title, this.text)
  }
  render() {
    return (
      <form 
        className="form-register"
        onSubmit={this._criarCard.bind(this)}
      >
        <input 
          type="text" 
          placeholder="Título" 
          className="form-input"
          onChange={e => this._handleMudancaTitulo(e)}
        />
        {
          /* onChange={this.handleMudancaTitulo.bind(this)} 
            Também seria possivel, pois instancia o this.
            A maneira como está sendo feita, (e) => this.handleMudancaTitulo(e)
            funciona pois não está sendo criada uma referencia para o método, 
            ele apenas está sendo chamado recebendo o evento como parâmetro.
         */}
        <textarea 
          rows="10"
          placeholder="Escreva sua nota..." 
          className="form-textarea"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button 
          className="form-button"
        >
          Criar Nota
        </button>
      </form> 
    );
  }
}

export default FormularioCadastro
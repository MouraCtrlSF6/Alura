import React from 'react';
import "./CardNota.css"
class CardNota extends React.Component {
  constructor(props) { 
    super(props)
    this.note = this.props.note
    this.color = this.props.color
  }
  mountStyleObj() {
    return {
      color: this.color.textColor,
      backgroundColor: this.color.backgroundColor
    }
  }
  render() {
    return (
      <section 
        className="card-nota" 
        style={this.mountStyleObj()}
      >
        <header className="card-header">
          <h3 className="card-title">
            {this.note.title}
          </h3>
        </header>
        <p className="card-text">
          {this.note.text}
        </p>
      </section>
    )
  }
}

export default CardNota;

import React from 'react';
import "./CardNota.css"
class CardNota extends React.Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>Título</h3>
        </header>
        <p>Escreva sua nota</p>
      </section>
    )
  }
}

export default CardNota;

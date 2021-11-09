import React from 'react';
import CardNota from  '../CardNota'
import './ListaDeNotas.css'
class ListaDeNotas extends React.Component {
  constructor(props) {
    super(props)
    this.notesArray = this.props.notes
    this.colors = [
      {
        textColor: 'white',
        backgroundColor: '#ec9706'
      },
      {
        textColor: 'white',
        backgroundColor: '#98b4d4'
      },
      {
        textColor: 'white',
        backgroundColor: '#ff6961'
      },
      {
        textColor: 'black',
        backgroundColor: '#fdfd96'
      },
      {
        textColor: 'white',
        backgroundColor: '#03bb85'
      }
    ]
  }
  getIndex(index) {
    const a =  index / ( this.colors.length )
    const b = a - parseInt(a)
    return Math.round(b * ( this.colors.length ))
  }
  render() {
    return (
      <div>
        {/* 
        Não prático:
        <ul>
          <li>
            <div>Trabalho</div>
            <CardNota/>
          </li>
        </ul>
        <ul>
          <div>Trabalho</div>
          <li>
            <CardNota/>
          </li>
        </ul>
        <ul>
          <div>Estudo</div>
          <li>
            <CardNota/>
          </li>
        </ul> */}


        {/* 
        Não suportado, pela sixtaxe de chaves do 'for' 
        e pela declaração de var, let ou const
        <ul>
          {
            const myArray = ['Trabalho', 'Trabalho', 'Estudo']
            for(let i = 0; i < 3; i ++) {
              return (
                <li>
                  <div>{myArray[i]}</div>
                  <CardNota />
                </li>
              )
            }
          }
        </ul> */}

        {
        //Assim dá:
        <ul className="list-container">
        {
          this.notesArray.map((note, index) => {
            return (
              <li 
                key={index} 
                className="list-item"
              >
                <CardNota note={note} color={this.colors[this.getIndex(index)]}/>
              </li>
            )
          })
        }
        </ul>
        }
      </div>
    );
  }
}
//Eu poderia usar apenas export tbm, mas dai precisaria
//desestruturar o componente ao importar 
//import { ListaDeNotas } from ... 
export default ListaDeNotas
import React from 'react';
import CardNota from  './CardNota/CardNota'

class ListaDeNotas extends React.Component {
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
        <ul>
        {
          ['Trabalho', 'Trabalho', 'Estudo'].map((item, index) => {
            return (
              <li key={index}>
                <div>{item}</div>
                <CardNota />
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
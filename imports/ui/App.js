import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Mesas } from '../api/mesas.js';
import MesaFila from './MesaFila.js'
import PedidoMesa from './PedidoMesa.js';

class App extends Component {

  renderFila() {
    return this.props.mesas.map(function(mesa) {
      if(!mesa.pronto) {
        return <MesaFila key={mesa._id} mesa={mesa} />
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Fila de Pedidos</h1>
        <ul className="list-group">
          {this.renderFila()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    mesas: Mesas.find({}, { sort: { numeroMesa: -1 } }).fetch(),
  };
}, App);

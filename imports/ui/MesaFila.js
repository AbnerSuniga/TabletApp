import React, { Component } from 'react';

import { Mesas } from '../api/mesas.js';
import PedidoMesa from './PedidoMesa.js';


export default class MesaFila extends Component {
  constructor(props) {
    super(props);

    this.handleFila = this.handleFila.bind(this);
  }

  handleFila() {
    id_mesa = this.props.mesa._id;
    Mesas.update(id_mesa, {$set : {pronto: true}});
  }

  renderPedidoMesa() {
    return this.props.mesa.pedidosDaMesa.map(function(pedido) {
      return <PedidoMesa key={pedido._id} pedido={pedido} />
    });
  }
  render() {
    return (
      <li className="list-group-item">
        <b> Mesa {this.props.mesa.numeroMesa}</b>&nbsp;
        <em>
          Realizado às&nbsp;
          {this.props.mesa.createdAt.getHours()}:
          {this.props.mesa.createdAt.getMinutes()}
        </em>
        <br/>
        <ul className="list-group">
          {this.renderPedidoMesa()}
        </ul>
        <button className="btn btn-success btn-block" onClick={this.handleFila}>Pronto</button>
      </li>
    );
  }
}

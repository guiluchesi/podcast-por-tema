import React from 'react'
import { withRouter } from 'react-router-dom'

const search = (e, history) => {
  e.preventDefault();
  const busca = e.target.tema.value
  history.push(`/busca/${busca}`);
}

const BarraDeBusca = ({ history }) => (
  <form onSubmit={(e) => search(e, history)}>
    <input name="tema" type="text" placeholder="Digite um tema" autoFocus></input>
  </form>
)

export default withRouter(BarraDeBusca)
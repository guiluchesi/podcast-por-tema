import React, { useEffect, useState, Fragment } from 'react';
import BUSCADOR_DE_EPISODIOS from '../../factories/episodios.js';

import Episodio from '../episodio/index';

const Listagem = ({match, history}) => {
  const { busca } = match.params;
  const [ episodios, setEpisodios ] = useState([]);

  useEffect(() => {
    BUSCADOR_DE_EPISODIOS.porTag(busca)
      .then(({records}) => setEpisodios(records))
      .catch(err => console.error(err));
  }, [busca]);

  return (
    <Fragment>
      <h1>Podcasts sobre: {busca}</h1>
      <div className="episodios">
        {
          episodios
            .map((episodio) => <Episodio key={episodio.id} details={episodio.fields} />)
        }
      </div>
      <button className="voltar" onClick={() => history.push('/')}>Buscar de novo</button>
    </Fragment>
  );
}

export default Listagem;
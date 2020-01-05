import React, { useState } from 'react'
import { linkParser } from '../../helpers.js'

import './style.css';

const Episodio = ({details}) => {
  const [showLinks, setShowLinks] = useState(false);
  const links = linkParser(details['Links']);

  return (
    <div className="card">
      <h2>{details['Título']}</h2>
      <p>{details['Descrição']}</p>
      
      <button onClick={() => setShowLinks(!showLinks)}>
        {showLinks ? 'Voltar' : 'Ouvir'}
      </button>

      <div className={`players ${showLinks ? 'isOpen' : ''}`}>
        {details['Links'] && Object
            .keys(links)
            .map(plataforma => (<a
                key={plataforma}
                href={links[plataforma]}
                target="_blank" rel="noopener noreferrer">
                  {plataforma}
              </a>
            ))}
      </div>
    </div>
  )
}

export default Episodio;
const BASE_API_URL = `https://api.airtable.com/v0/appnn34qx65HwiDdB/Episodios?api_key=keyRWPSzZU4UM2Hh4`;

const filtraEpisodiosPorTag = tag =>
 `${BASE_API_URL}&filterByFormula=FIND(LOWER(%27${tag}%27),%20LOWER({Related%20tags}))`

const filtroGenerator = filtro =>
  tag => fetch(filtro(tag)).then(res => res.json())

const BUSCADOR_DE_EPISODIOS = {
  porTag: filtroGenerator(filtraEpisodiosPorTag)
}

export default BUSCADOR_DE_EPISODIOS;
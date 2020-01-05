const linkParser = links => {
  const providers = {
    'spotify': 'Spotify',
    'pca.st': 'PocketCasts',
  }
  
  const providerFinderGenerator = link =>
    provider => link.includes(provider)
  
  const reducer = (prev, link) => {
    const providerFinder = providerFinderGenerator(link)
    const provider = providers[Object.keys(providers).find(providerFinder)] || 'Site'
  
    return { ...prev, [provider]: link }
  }

  return links.reduce(reducer, {});
}

export {
  linkParser,
}
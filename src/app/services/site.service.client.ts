
const URL = 'http://localhost:3000';

export class SiteServiceClient {
  createSite(site) {
    return fetch(URL + '/api/site/create', {
      body: JSON.stringify(site),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  deleteSite(siteId) {
    return fetch(URL + '/api/site/' + siteId, {
      method: 'delete',
      credentials: 'include'
    }).then(res => res.json());
  }

  updateSite(site) {
    return fetch(URL + '/api/site/' + site._id, {
      body: JSON.stringify(site),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());
  }

  findSiteById(siteId) {
    return fetch (URL + '/api/site/' + siteId)
      .then(res => res.json());
  }

  findAllSites() {
    return fetch (URL + '/api/sites' )
      .then(res => res.json());
  }

  findSitesForProvider(providerId) {
    return fetch(URL + '/api/provider/' + providerId + '/site')
      .then(res => res.json());
  }

  findSitesForProviderWithInfo(providerId) {
    return fetch(URL + '/api/providerInfo/' + providerId + '/site')
      .then(res => res.json());
  }
}



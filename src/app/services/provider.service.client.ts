export class ProviderServiceClient {

  createProvider(username, password, organizationName, organizationAddress, service) {
    const provider = {
      username: username,
      password: password,
      organizationName: organizationName,
      organizationAddress: organizationAddress,
      role: service
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/register', {
      body: JSON.stringify(provider),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  adminCreateProvider(username, password, role) {
    const provider = {
      username: username,
      password: password,
      role: role
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/register', {
      body: JSON.stringify(provider),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findProviderById(providerId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/providerId/' + providerId)
      .then(response => response.json());
  }

  findAllProviders() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  update(user) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/profile', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  adminUpdate(user) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/admin/updateProvider', {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  delete() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/profile', {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteProviderById(providerId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/providerId/' + providerId, {
      method: 'delete'
    });
  }

  profile() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/provider/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

}

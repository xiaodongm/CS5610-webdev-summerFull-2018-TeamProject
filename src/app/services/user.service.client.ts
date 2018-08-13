export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user/userId/' + userId)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  update(user) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/profile', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  adminUpdate(user) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/admin/updateUser', {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  delete() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/profile', {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteUserById(userId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user/userId/' + userId, {
      method: 'delete'
    });
  }

  profile() {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password, location) {
    const user = {
      username: username,
      password: password,
      location: location,
      role: 'attendee'
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  followFriend(userId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user/follow/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  un_followFriend(userId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user/un_follow/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAllFollowingFriendsForUser(userId) {
    return fetch('https://husky-camp-node-server.herokuapp.com/api/user/allFollows/' + userId)
      .then(response => response.json());
  }


  adminCreateUser(username, password, role) {
    const user = {
      username: username,
      password: password,
      role: role
    };
    return fetch('https://husky-camp-node-server.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}

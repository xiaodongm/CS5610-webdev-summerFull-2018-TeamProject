export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:3000/api/user/userId/' + userId)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch('http://localhost:3000/api/user')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  update(user) {
    return fetch('http://localhost:3000/api/profile', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  adminUpdate(user) {
    return fetch('http://localhost:3000/api/admin/updateUser', {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  delete() {
    return fetch('http://localhost:3000/api/profile', {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteUserById(userId) {
    return fetch('http://localhost:3000/api/user/userId/' + userId, {
      method: 'delete'
    });
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
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
    return fetch('http://localhost:3000/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  followFriend(userId) {
    return fetch('http://localhost:3000/api/user/follow/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  un_followFriend(userId) {
    return fetch('http://localhost:3000/api/user/follow/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAllFollowingFriendsForUser(userId) {
    return fetch('http://localhost:3000/api/user/allFollows/' + userId)
      .then(response => response.json());
  }
}

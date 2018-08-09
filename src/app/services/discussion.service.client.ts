const URL = 'http://localhost:3000';

export class DiscussionServiceClient {
  postDiscussion(discussion) {
    return fetch(URL + '/api/discussion/create', {
      body: JSON.stringify(discussion),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  updateDiscussion (discussion) {
    return fetch(URL + '/api/discussion/update', {
      body: JSON.stringify(discussion),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  findDiscussionsForEvent (eventId) {
    return fetch( URL + '/api/discussion/event/' + eventId)
      .then(res => res.json());
  }

  findAllDiscussions () {
    return fetch( URL + '/api/discussions')
      .then(res => res.json());
  }

  deleteDiscussion (discussionId) {
    return fetch(URL + '/api/discussion/' + discussionId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }
}

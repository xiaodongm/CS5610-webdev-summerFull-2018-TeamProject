
const URL = 'http://localhost:3000';
// const URL = 'https://husky-camp-node-server.herokuapp.com';
export class EventServiceClient {
  createEvent(event) {
    return fetch(URL + '/api/event/create', {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  deleteEvent(eventId) {
    return fetch(URL + '/api/event/' + eventId, {
      method: 'delete',
      credentials: 'include'
    }).then(res => res.json());
  }

  updateEvent(event) {
    return fetch(URL + '/api/event/' + event._id, {
      body: JSON.stringify(event),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());
  }

  findEventById(eventId) {
    return fetch (URL + '/api/event/' + eventId)
      .then(res => res.json());
  }

  findAllEvents() {
    return fetch (URL + '/api/events' )
      .then(res => res.json());
  }

  findEventsForOrganizer(userId) {
    return fetch(URL + '/api/organizer/' + userId + '/event')
      .then(res => res.json());
  }
}



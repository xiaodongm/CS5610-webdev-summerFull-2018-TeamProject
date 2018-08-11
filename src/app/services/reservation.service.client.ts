const URL = 'http://localhost:3000';

export class ReservationServiceClient {
  reserveSiteForEvent (reservation) {
    return fetch(URL + '/api/event/' + reservation.event + '/site/' + reservation.site, {
      body: JSON.stringify(reservation),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  unreserveSiteForEvent (reservation) {
    return fetch(URL + '/api/event/' + reservation.event + '/site/' + reservation.site, {
      method: 'delete',
      credentials: 'include'
    }).then(res => res.json());
  }

  findReservationsForSite(siteId) {
    return fetch(URL + '/api/site/' + siteId + '/event')
      .then(res => res.json());
  }

  findReservationsForEvent(eventId) {
    return fetch(URL + '/api/event/' + eventId + '/site')
      .then(res => res.json());
  }
}

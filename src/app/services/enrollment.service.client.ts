// const URL = 'http://localhost:3000';
const URL = 'https://husky-camp-node-server.herokuapp.com';
export class EnrollmentServiceClient {
  enrollAttendeeInEvent (enrollment) {
    return fetch(URL + '/api/attendee/' + enrollment.attendee + '/event/' + enrollment.event, {
      body: JSON.stringify(enrollment),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  unenrollAttendeeInEvent (enrollment) {
    return fetch(URL + '/api/attendee/' + enrollment.attendee + '/event/' + enrollment.event, {
      method: 'delete',
      credentials: 'include'
    }).then(res => res.json());
  }

  findEnrollmentsForAttendee(attendeeId) {
    return fetch(URL + '/api/attendee/' + attendeeId + '/event')
      .then(res => res.json());
  }

  findAllEnrollments() {
    return fetch(URL + '/api/enrollments')
      .then(res => res.json());
  }
}

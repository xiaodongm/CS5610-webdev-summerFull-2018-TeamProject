const URL = 'http://localhost:3000';

export class EquipmentRentingServiceClient {
  rentEquipmentForEvent(rent) {
    return fetch(URL + '/api/event/' + rent.event + '/equip/' + rent.equipment, {
      body: JSON.stringify(rent),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  returnEquipForEvent(rent) {
    return fetch(URL + '/api/event/' + rent.event + '/equip/' + rent.equipment, {
      method: 'delete',
      credentials: 'include',
      body: JSON.stringify(rent),
    }).then(res => res.json());
  }


  findRentingsForEvent(eventId) {
    return fetch (URL + '/api/event/' + eventId + '/equip')
      .then(res => res.json());
  }

  findRentingsForEquipment(equipmentId) {
    return fetch (URL + '/api/equip/' + equipmentId + '/event' )
      .then(res => res.json());
  }

}



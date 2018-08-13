
// const URL = 'http://localhost:3000';
const URL = 'https://husky-camp-node-server.herokuapp.com';
export class EquipmentServiceClient {
  createEquipment(equipment) {
    return fetch(URL + '/api/equipment/create', {
      body: JSON.stringify(equipment),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }

  deleteEquipment(equipmentId) {
    return fetch(URL + '/api/equipment/' + equipmentId, {
      method: 'delete',
      credentials: 'include'
    }).then(res => res.json());
  }

  updateEquipment(equipment) {
    return fetch(URL + '/api/equipment/' + equipment._id, {
      body: JSON.stringify(equipment),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());
  }

  findEquipmentById(equipmentId) {
    return fetch (URL + '/api/equipment/' + equipmentId)
      .then(res => res.json());
  }

  findAllEquipments() {
    return fetch (URL + '/api/equipments' )
      .then(res => res.json());
  }

  findEquipmentsForProvider(providerId) {
    return fetch(URL + '/api/provider/' + providerId + '/equipment')
      .then(res => res.json());
  }
}



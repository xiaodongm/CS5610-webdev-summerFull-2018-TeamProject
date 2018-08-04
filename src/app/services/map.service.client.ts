export class MapServiceClient {

  reverseGeocoding(lat, lng) {
    return fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json());
  }

}

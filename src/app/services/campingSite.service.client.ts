const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const API_HEADER_URL = 'http://api.amp.active.com/camping/campgrounds/?';
const API_KEY = '&api_key=rknxu5q3axb3qb6tdeyu78bw';
const CONVERT = require('xml-js');

export class CampingSiteServiceClient {
  findCampingSitesByStateOrName(state, name) {
    let PSTATE = '', PNAME = '';
    if (state !== '') {
      PSTATE = 'pstate=state&';
    }
    if (name !== '') {
      PNAME = 'pname=name&';
    }
    const URL = CORS_ANYWHERE_URL + API_HEADER_URL + PSTATE + PNAME + API_KEY;
    return fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => response.text())
      .then((xml) => {
        CONVERT.xml2json(xml, {compact: true, spaces: 4});
      });

  }


}

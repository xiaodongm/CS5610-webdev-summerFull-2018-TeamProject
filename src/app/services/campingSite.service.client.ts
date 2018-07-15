const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const API_HEADER_URL = 'http://api.amp.active.com/camping/campgrounds/';
const API_KEY = 'api_key=rknxu5q3axb3qb6tdeyu78bw';
declare var require: any;
const CONVERT = require('xml-js');


export class CampingSiteServiceClient {
  findCampingSitesByStateOrName(state, name) {
    let PSTATE = '', PNAME = '';
    if (state !== '') {
      PSTATE = 'pstate=' + state + '&';
    }
    if (name !== '') {
      if (name.length < 4) {
        alert('Sorry, the name of facility must no less then 4 characters');
        return;
      }
      PNAME = 'pname=' + name + '&';
    }
    const URL = CORS_ANYWHERE_URL + API_HEADER_URL + '?' + PSTATE + PNAME + API_KEY;
    console.log(URL);
    return fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => response.text())
      .then((xml) => JSON.parse(CONVERT.xml2json(xml, {compact: true, spaces: 4})));

  }

  findCampingSiteDetails(contractCode, parkId) {
    const CONTRACT_CODE = 'contractCode=' + contractCode;
    const PARK_ID = 'parkId=' + parkId;
    const DETAILS_URL = CORS_ANYWHERE_URL + API_HEADER_URL + 'details?' + CONTRACT_CODE + '&' + PARK_ID + '&' + API_KEY;
    return fetch(DETAILS_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => response.text())
      .then((xml) => JSON.parse(CONVERT.xml2json(xml, {compact: true, spaces: 4})));

  }

}

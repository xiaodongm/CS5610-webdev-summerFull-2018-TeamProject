export class CampingSite {
  detailDescription: {
    description: String;
  };
  address: {
    streetAddress: String,
    city: String,
    state: String,
    zip: String,
    country: String
  };
  amenity: object;
  photo: {
    _attributes: {realUrl:string}
  }[];
  contact: object;
  facilityName: String;
}

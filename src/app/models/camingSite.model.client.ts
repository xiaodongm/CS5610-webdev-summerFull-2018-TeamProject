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
  photo: object;
  contact: object;
  facilityName: String;
}

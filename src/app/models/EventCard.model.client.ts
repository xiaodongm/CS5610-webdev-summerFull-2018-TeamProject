import {User} from './user.model.client';

export class EventCard {
  organizer: User;
  start: Date;
  end: Date;
  title: String;
  photos: String[];
  video: String;
  description: String;
}

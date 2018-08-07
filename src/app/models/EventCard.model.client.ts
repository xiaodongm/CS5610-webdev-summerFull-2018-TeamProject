import {User} from './user.model.client';
import {Widget} from './widget.model.client';

export class EventCard {
  organizer: User;
  start: Date;
  end: Date;
  title: String;
  photos: String[] = [];
  video: String;
  descriptions: Widget[] = [];
  tags: String[] = [];
}

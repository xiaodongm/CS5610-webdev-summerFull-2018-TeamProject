import {User} from './user.model.client';
import {Widget} from './widget.model.client';

export class EventCard {
  organizer: User = new User();
  start: Date = new Date();
  end: Date = new Date();
  title: String = '';
  photos: String[] = [];
  video: String = '';
  descriptions: Widget[] = [];
  tags: String[] = [];
}

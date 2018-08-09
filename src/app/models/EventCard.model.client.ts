import {User} from './user.model.client';
import {Widget} from './widget.model.client';

export class EventCard {
  _id: string;
  organizer: string;
  startTime: Date = new Date();
  endTime: Date = new Date();
  title = '';
  photos: string[] = [];
  video = '';
  description: Widget[] = [];
  tags: String[] = [];
  attendee: string[] = [];
}

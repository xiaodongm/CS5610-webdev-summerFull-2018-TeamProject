import {Widget} from './widget.model.client';

export class Site {
  _id: string;
  provider: string;
  title: string;
  description: Widget[];
  location: string;
  tags: string[];
  photos: string[];
  timeRange: Date[];
}

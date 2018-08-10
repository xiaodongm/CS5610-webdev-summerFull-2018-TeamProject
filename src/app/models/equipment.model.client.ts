import {Widget} from './widget.model.client';

export class Equipment {
  _id: string;
  provider: string;
  title: string;
  description: Widget[];
  photos: string[] = [];
  tags: string[] = [];
  quantity: number;
  available: number;
}

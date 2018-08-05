import { Component, OnInit } from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import {User} from '../models/user.model.client';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-event-waterfall',
  templateUrl: './event-waterfall.component.html',
  styleUrls: ['./event-waterfall.component.css']
})
export class EventWaterfallComponent implements OnInit {

  constructor() { }
  organizer: User = {
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Zheming',
    lastName: 'Gao',
    location: 'San Jose Damingbai',
    profilePhoto: 'https://images.unsplash.com/' +
    'photo-1533233336213-b3a32825c689?ixlib=' +
    'rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c181' +
    '76885796e2a3399a4a6906e8270&auto=format&fi' +
    't=crop&w=800&q=60'
  };

  organizer2: User = {
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Xiaodong',
    lastName: 'Ma',
    location: 'San Francisco',
    profilePhoto: 'https://images.unsplash.com/photo-1' +
    '438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJ' +
    'hcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c' +
    '1e&auto=format&fit=crop&w=800&q=60'
  };
  organizer3: User = {
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Garret',
    lastName: 'Wu',
    location: 'NEU Seatle',
    profilePhoto: 'https://images.unsplash.com/photo-1495078' +
    '065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE' +
    'yMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit' +
    '=crop&w=800&q=60'
  };
  event: EventCard = {
    organizer: this.organizer,
    start: new Date(),
    end: new Date(),
    title: 'Great Camping Opportunity in Yosemite',
    photos: ['https://images.unsplash.com/photo-153322' +
    '8876829-65c94e7b5025?ixlib=rb-0.3.5&ixid' +
    '=eyJhcHBfaWQiOjEyMDd9&s=7a60de51ee9dd6af78' +
    'f5b796b4586326&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1533227477679' +
      '-ca4c58789baf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOj' +
      'EyMDd9&s=f8c4f0513223e7ce1ce7783e0d870190&auto=f' +
      'ormat&fit=crop&w=800&q=60'],
    video: 'https://www.youtube.com/embed/PHQe7Sj56NE',
    description: ''
  };

  event2: EventCard = {
    organizer: this.organizer2,
    start: new Date(),
    end: new Date(),
    title: 'Amazing Camp Tour in Deep Grand Canyon',
    photos: ['https://images.unsplash.com/photo-1510662' +
      '145379-13537db782dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQ' +
      'iOjEyMDd9&s=a88527272e34e0ec18771312843d516e&auto=f' +
      'ormat&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1495756650324-e4' +
      '5118cb3e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9' +
      '&s=a0d9a8f675adf1d8d1763a275e72ac66&auto=format&fit' +
      '=crop&w=800&q=60'],
    video: 'https://www.youtube.com/embed/b6hoBp7Hk-A',
    description: ''
  };

  event3: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Where Amazing Happens',
    photos: ['https://images.unsplash.com/photo-1513673953' +
      '682-c64113e2866a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyM' +
      'Dd9&s=2ac493edfc02a322820703625d747055&auto=format&fit' +
      '=crop&w=800&q=60',
      ],
    video: '',
    description: ''
  };

  event4: EventCard = {
    organizer: this.organizer2,
    start: new Date(),
    end: new Date(),
    title: 'Hey, The Moutains Are Calling',
    photos: ['https://images.unsplash.com/p' +
    'hoto-1486935964461-b5ac6a3e72cd?ixlib=rb-' +
    '0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c57c0c6f' +
    'f5b2d9b38f14f96484450607&auto=format&fit=cr' +
    'op&w=800&q=60',
    ],
    video: '',
    description: ''
  };

  event5: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Party in the beach',
    photos: ['https://images.unsplash.com/photo-15230' +
    '44214787-9caaa5ee4d8e?ixlib=rb-0.3.5&ixid=eyJhcH' +
    'BfaWQiOjEyMDd9&s=b79aad29f0e5db2af7fa698998f22985' +
    '&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
    description: ''
  };

  event6: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Party in the beach',
    photos: ['https://images.unsplash.com/photo-1510797492219-' +
    'e110e2a935a4?ixlib=rb-0.3.5&s=485c6f91293bb46aeb510da2ed33' +
    '3f87&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
    description: ''
  };

  event7: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Party in the beach',
    photos: ['https://images.unsplash.com/photo-149475061374' +
    '6-dff7ee759071?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&' +
    's=65b3f3cd89b0a3e27574784d4dc23048&auto=format&fit=crop&' +
    'w=800&q=60',
    ],
    video: '',
    description: ''
  };

  event8: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Party in the beach',
    photos: ['https://images.unsplash.com/photo-1517321579022-aa' +
    '4d037c3b6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93072' +
    '1f7f08fd5fdc79bc0e107a71e08&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
    description: ''
  };

  event9: EventCard = {
    organizer: this.organizer3,
    start: new Date(),
    end: new Date(),
    title: 'Party in the beach',
    photos: ['https://images.unsplash.com/photo-15258260' +
    '78603-8ae39aff46ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiO' +
    'jEyMDd9&s=a33b5370139fd1bdfc3234fba62d308e&auto=form' +
    'at&fit=crop&w=800&q=60',
    ],
    video: '',
    description: ''
  };
  cards: EventCard[] = [this.event, this.event2, this.event3,
                        this.event4, this.event5, this.event6,
                        this.event7, this.event8, this.event9];
  updateMasonryLayout = true;
  initialDataLoaded = false;
  receiveUpdateEvent($event) {
      this.updateMasonryLayout = !this.updateMasonryLayout;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    // console.log('On Scroll');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('On Scroll Down');
      this.cards.push(this.event9);
      this.cards.push(this.event9);
      this.cards.push(this.event9);
    }
  }
  ngOnInit() {
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {User} from '../models/user.model.client';
import {EventServiceClient} from '../services/event.service.client';
import {EquipmentRentingServiceClient} from '../services/equipmentRenting.service.client';
import {SiteServiceClient} from '../services/site.service.client';
import {Router} from '@angular/router';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
              private userService: UserServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private eventService: EventServiceClient,
              private siteService: SiteServiceClient,
              private equipmentRentingService: EquipmentRentingServiceClient,
              private equipmentService: EquipmentServiceClient,
              private providerService: ProviderServiceClient,
              private modalService: BsModalService) { }

  attendees = [];
  organizers = [];
  siteManagers = [];
  equipmentDealers = [];

  userType;
  newUser = new User();

  userTypeModel = {
    attendee: 'attendee',
    organizer: 'organizer',
    siteManager: 'SiteManager',
    EquipmentDealer: 'EquipmentDealer',
    admin: 'admin'
  };

  alerts = [];
  modalRef: BsModalRef;
  message;
  preRole;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  switchAttendeeToOrganizer(user) {
    if (user.role === 'attendee') {
      user.role = 'organizer';
    }
  }

  switchOrganizerToAttendee(user) {
    if (user.role === 'organizer') {
      user.role = 'attendee';
    }
  }

  log(user) {
    this.preRole = user.role;
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openAttendeeTab() {
    this.userType = this.userTypeModel.attendee;
  }

  openOrganizerTab() {
    this.userType = this.userTypeModel.organizer;
  }

  openSiteManagerTab() {
    this.userType = this.userTypeModel.siteManager;
  }

  openEquipmentDealerTab() {
    this.userType = this.userTypeModel.EquipmentDealer;
  }

  openCreateUserTab() {
    this.userType = this.userTypeModel.admin;
  }

  findAllAttendees() {
    this.attendees = new Array();
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'attendee') {
            this.attendees.push(users[i]);
          }
        }
      });
  }

  findAllOrganizers() {
    this.organizers = new Array();
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'organizer') {
            this.organizers.push(users[i]);
          }
        }
      });
  }

  findAllSiteManagers() {
    this.siteManagers = new Array();
    return this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'SiteManager') {
            this.siteManagers.push(users[i]);
          }
        }
      });
  }

  findAllEquipmentDeals() {
    this.equipmentDealers = new Array();
    return this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'EquipmentDealer') {
            this.equipmentDealers.push(users[i]);
          }
        }
      });
  }

  update(user) {
    console.log(user);
    if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
      this.userService
        .adminUpdate(user)
        .then(() => {
          this.alerts.push({
            type: 'success',
            msg: `User profile updated successfully.`,
            timeout: 5000
          });
          console.log(this.preRole);
          console.log(user.role);
          if (this.preRole !== user.role) {
            this.findAllAttendees();
            this.findAllOrganizers();
          }
        });
    } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
      this.providerService
        .adminUpdate(user)
        .then(() => {
          this.alerts.push({
            type: 'success',
            msg: `User profile updated successfully.`,
            timeout: 5000
          });
          if (this.preRole !== user.role) {
            this.findAllSiteManagers();
            this.findAllEquipmentDeals();
          }
        });
    }
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  delete(user) {
    // if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
    //   this.userService.deleteUserById(user._id)
    //     .then((res) => {
    //       if (res.error) {
    //         alert(res.error);
    //       } else {
    //         this.modalRef.hide();
    //       }
    //     })
    //     .then(() => {
    //       this.findAllAttendees();
    //       this.findAllOrganizers();
    //       this.message = this.attendees.length + this.organizers.length;
    //       this.sendMessage();
    //     });
    // } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
    //   this.providerService.deleteProviderById(user._id)
    //     .then((res) => {
    //       if (res.error) {
    //         alert(res.error);
    //       } else {
    //         this.modalRef.hide();
    //       }
    //     })
    this.userService.profile()
      .then((curUser) => {
        if (!curUser.error) {
          // if (confirm('Do you really want to delete this user profile?')) {
          if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
            this.userService.checkDelete(user._id)
              .then(res => {
                console.log(res);
                if (res.ok === true) {
                  return this.eventService.findEventsForOrganizer(user._id)
                    .then((events) => {
                      console.log(events);
                      const organizedEventPromises = [];
                      for (const e of events) {
                        organizedEventPromises.push(this.eventService.deleteEvent(e._id));
                      }
                      return Promise.all(organizedEventPromises);
                    })
                    .then(() => {
                      return this.enrollmentService.findEnrollmentsForAttendee(user._id);
                    })
                    .then((enrollments) => {
                      console.log(enrollments);
                      const enrollmentsPromises = [];
                      for (const enrollment of enrollments) {
                        console.log(enrollment);
                        const e = {attendee: enrollment.attendee,
                          event: enrollment.event._id};
                        enrollmentsPromises.push(this.enrollmentService.unenrollAttendeeInEvent(e));
                      }
                      return Promise.all(enrollmentsPromises);
                    })
                    .then(() => {
                      return this.userService.deleteUserById(user._id);
                    })
                    .then(() => {
                      return this.modalRef.hide();

                    }).then(() => {
                      this.findAllAttendees();
                      this.findAllOrganizers();
                      this.message = this.siteManagers.length = this.equipmentDealers.length;
                      this.sendMessage();
                    });
                } else {
                  alert('you can not delete account before return all equipments and cancel site reservation, please contact provider.');
                }
              });

          } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
            if (user.role === 'SiteManager') {
              this.siteService
                .findSitesForProviderWithInfo(user._id)
                .then(sites => {
                  const sitesPromiseArray = [];
                  for (const site of sites) {
                    sitesPromiseArray.push(this.siteService.deleteSite(site._id));
                  }
                  return Promise.all(sitesPromiseArray);
                }).then(() => this.providerService
                .deleteProviderById(user._id))
                .then((res) => console.log(res));
            } else {
              this.equipmentService
                .findEquipmentsForProvider(user._id)
                .then(equipments => {
                  const equipPromiseArray = [];
                  for (const equip of equipments) {
                    equipPromiseArray.push(this.equipmentService.deleteEquipment(equip._id));
                  }
                  return Promise.all(equipPromiseArray);
                }).then(() => {
                this.providerService
                  .deleteProviderById(user._id)
                  .then(() => {
                  return this.modalRef.hide();

                }).then(() => {
                  this.findAllAttendees();
                  this.findAllOrganizers();
                  this.message = this.siteManagers.length = this.equipmentDealers.length;
                  this.sendMessage();
                });
              });
            }

          }
        } else {
          alert('please login');
        }

      });


    // }
  }

  createUser(username, password, role) {
    if (username && password) {
      if (role === 'attendee' || role === 'organizer') {
        this.userService
          .adminCreateUser(username, password, role)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.err) {
              this.alerts.push({
                type: 'success',
                msg: `User created successfully.`,
                timeout: 5000
              });
              this.findAllAttendees();
              this.findAllOrganizers();
              this.message = this.attendees.length + this.organizers.length;
              this.sendMessage();
            } else {
              // alert('Username already exist, please choose another one.');
              this.alerts.push({
                type: 'danger',
                msg: `Username already exist, please choose another one.`,
                timeout: 5000
              });
            }
          });
      } else if (role === 'SiteManager' || role === 'EquipmentDealer') {
        this.providerService
          .adminCreateProvider(username, password, role)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.err) {
              this.alerts.push({
                type: 'success',
                msg: `User created successfully.`,
                timeout: 5000
              });
              this.findAllSiteManagers();
              this.findAllEquipmentDeals();
              this.message = this.siteManagers.length = this.equipmentDealers.length;
              this.sendMessage();
            } else {
              // alert('Username already exist, please choose another one.');
              this.alerts.push({
                type: 'danger',
                msg: `Username already exist, please choose another one.`,
                timeout: 5000
              });
            }
          });
      }
    } else {
      this.alerts.push({
        type: 'danger',
        msg: `Please enter valid Username and Password.`,
        timeout: 5000
      });
    }
  }

  ngOnInit() {
    this.findAllAttendees();
    this.findAllOrganizers();
    this.findAllSiteManagers();
    this.findAllEquipmentDeals();
  }

}

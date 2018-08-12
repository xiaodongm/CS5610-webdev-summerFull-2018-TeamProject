import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Site} from '../models/site.model.client';
import {Widget} from '../models/widget.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin-site-list',
  templateUrl: './admin-site-list.component.html',
  styleUrls: ['./admin-site-list.component.css']
})
export class AdminSiteListComponent implements OnInit {

  constructor(private siteService: SiteServiceClient,
              private modalService: BsModalService,
              private userService: UserServiceClient,
              private providerService: ProviderServiceClient) { }

  sites = [];

  siteType;
  alerts = [];
  siteManager;

  newSite = new Site();

  modalRef: BsModalRef;
  message;

  siteTypeModel = {
    site: 'site',
    admin: 'admin'
  };

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }


  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  log(site) {
    this.providerService.findProviderById(site.provider)
      .then(provider => {this.siteManager = provider.organizationName;
      console.log(this.siteManager);
      });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openSiteTab() {
    this.siteType = this.siteTypeModel.site;
  }

  openCreateSiteTab() {
    this.siteType = this.siteTypeModel.admin;
  }

  findAllSites() {
    this.siteService.findAllSites()
      .then(sites => this.sites = sites);
  }

  update(site) {
    this.siteService.updateSite(site)
      .then(() => {
        this.alerts.push({
          type: 'success',
          msg: `Site info updated successfully.`,
          timeout: 5000
        });
      });
  }

  delete(site) {
    this.siteService.deleteSite(site._id)
      .then(() => this.modalRef.hide())
      .then(() => {
        this.findAllSites();
        this.message = this.sites.length;
        this.sendMessage();
      });
  }

  createSite() {
    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newSite = new Site();
        newSite.title = this.newSite.title;
        newSite.provider = curUser._id;
        return this.siteService.createSite(newSite);
      })
      .then(() => {
        this.alerts.push({
          type: 'success',
          msg: `Site created successfully.`,
          timeout: 5000
        });
        this.findAllSites();
        this.message = this.sites.length;
        this.sendMessage();
      } );

  }

  ngOnInit() {
    this.findAllSites();
  }

}

import {Component, OnInit, TemplateRef} from '@angular/core';
import {CampingSiteToDetailServiceClient} from '../communication-services/camping-site-to-detail.service.client';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';
import {ActivatedRoute} from '@angular/router';
import {CampingSite} from '../models/camingSite.model.client';
import {SiteServiceClient} from '../services/site.service.client';
import {Site} from '../models/site.model.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Widget} from '../models/widget.model.client';

@Component({
  selector: 'app-site-editor',
  templateUrl: './site-editor.component.html',
  styleUrls: ['./site-editor.component.css']
})
export class SiteEditorComponent implements OnInit {

  constructor(private service: SiteServiceClient,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private providerService: ProviderServiceClient
             ) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  isDataAvailable = false;
  site: Site = new Site();
  provider: Provider = new Provider();
  paragraph;
  list;
  listType = 'unorderedList';
  linkUrl;
  imgUrl;
  heading;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    class: 'my-modal'
  };

  setParams(params) {
    const siteId = params['siteId'];
    this.service.findSiteById(siteId)
      .then((site) => {
        this.site = site;

        return this.providerService.findProviderById(site.provider);
      })
      .then(provider => {
        this.provider = provider;

        if (!provider.profilePhoto || provider.profilePhoto === '') {
          this.provider.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        this.isDataAvailable = true;
      });
  }

  refreshSite() {
    this.service.findSiteById(this.site._id)
      .then(site =>
        this.site = site
      );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }


  confirm(): void {
    console.log('Confirmed!');
    this.service.updateSite(this.site)
      .then(() => {
        this.modalRef.hide();
        this.refreshSite();
      });
  }
  decline(): void {
    this.modalRef.hide();
    this.refreshSite();
  }
  addImageUrl() {
    console.log(this.imgUrl);
    this.site.photos.push(this.imgUrl);
    this.imgUrl = '';
  }
  deleteImageUrl(imgUrl) {
    if (this.site.photos.includes(imgUrl)) {
      const index = this.site.photos.indexOf(imgUrl);
      this.site.photos.splice(index, 1);
    }
  }
  addHeading() {
    this.site.description.push(new Widget('heading', this.heading));
    this.paragraph = '';
  }
  addParagraph() {
    this.site.description.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.site.description.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.site.description.push(new Widget(this.listType, this.list));
  }
  splitList(data) {
    return data.split(/\r?\n/);
  }
  toggleTag(tag) {
    if (this.site.tags.includes(tag)) {
      const index = this.site.tags.indexOf(tag);
      this.site.tags.splice(index, 1);
    } else {
      this.site.tags.push(tag);
    }
  }
  updateWidget(event) {
    const oldWidget = event[0];
    const newWidget = event[1];
    const index = this.site.description.indexOf(oldWidget);
    this.site.description[index] = newWidget;
  }
  deleteWidget(widget) {
    console.log(widget);
    const index = this.site.description.indexOf(widget);
    this.site.description.splice(index, 1);
    console.log(this.site.description);
  }

  ngOnInit() {

  }

}

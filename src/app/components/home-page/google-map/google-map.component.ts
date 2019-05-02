import {Component, Input, OnInit} from '@angular/core';
import {GMapModule} from 'primeng/gmap';
// import {MessageService} from 'primeng/api';
// import {Component,OnInit} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  providers: [MessageService],
})
export class GoogleMapComponent implements OnInit {
@Input () marks: any;
  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;


  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.options = {
      center: {lat: 49.841563, lng: 24.031582},
      zoom: 14
    };
   console.log(this.marks);
    this.initOverlays();
    this.infoWindow = new google.maps.InfoWindow();
  }



  handleOverlayClick(event) {
    const isMarker = event.overlay.getTitle !== undefined;

    if (isMarker) {
      const title = event.overlay.getTitle();
      this.infoWindow.setContent('<div>' + title + '</div>');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({severity: 'info', summary: 'Marker Selected', detail: title});
    } else {
      this.messageService.add({severity: 'info', summary: 'Shape Selected', detail: ''});
    }
  }

  addMarker() {
    this.overlays.push(new google.maps.Marker({
      position: {
        lat: this.selectedPosition.lat(),
        lng: this.selectedPosition.lng()
      },
        title: this.markerTitle,
        draggable: this.draggable
    }));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event) {
    this.messageService.add({severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker(this.marks),
                               // {position: {lat: 49.844224, lng: 24.026191}, title:'Opera'}
      ];
    }
  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }
}

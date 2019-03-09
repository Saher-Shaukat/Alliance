import { Component, OnInit } from '@angular/core';
import { BeaconService } from "../beacon.service";
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-beacons',
  templateUrl: './beacons.component.html',
  styleUrls: ['./beacons.component.css']
})
export class BeaconsComponent implements OnInit {

  constructor(private service: BeaconService, private spinner: NgxSpinnerService) { }
  beacons: any[] = [];
  beacons$: Subscription;

  ngOnInit() {
    this.spinner.show();
    this.getAllBeacons();
  }

  getAllBeacons() {
    this.beacons$ = this.service.getAllBeacons().subscribe(res => {
      this.spinner.hide();
      this.beacons = res['data'];
    });
  }

  deleteBeacon(id) {
    this.service.deleteBeacon(id).subscribe(res => {
      
    })
  }

  ngOnDestroy() {
    if(this.beacons$) {
      this.beacons$.unsubscribe();
    }
  }
}

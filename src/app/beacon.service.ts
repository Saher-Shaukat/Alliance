import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from "./constants/config";
@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  constructor(private http: HttpClient) { }

  getAllBeacons() {
    return this.http.get(Configuration.viewAllBeacons);
  }

  addBeacon(params = {}) {
    return this.http.post(Configuration.addBeacon, params);
  }

  updateBeacons(params = {}) {
    return this.http.post(Configuration.updateBeacons, params);
  }

  getAllNodes() {
    return this.http.get(Configuration.getAllNodes);
  }

  deleteBeacon(id) {
    return this.http.post(Configuration.deleteBeacon, id);
  }
}

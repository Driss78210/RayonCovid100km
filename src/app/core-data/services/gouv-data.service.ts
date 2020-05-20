import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adresse } from '../models/adresse';

@Injectable({
  providedIn: 'root'
})
export class GouvDataService {

  constructor( private http: HttpClient) { }

  public apiGouvCall(adresse: string): any{
    let url = "https://api-adresse.data.gouv.fr/search/?q="+adresse+""
        return this.http.get(url)
        .pipe(
            map(
                (res: any)  => {
                  console.log(res.features[0]);
                  let adresses = Array<Adresse>()
                  res.features.forEach(adresse => {
                    adresses.push(new Adresse(adresse.properties.label, adresse.properties.city,
                       adresse.properties.postcode, adresse.geometry.coordinates[0],
                        adresse.geometry.coordinates[1]))
                  });
                  return adresses;
              }
            )
        );
  }
}

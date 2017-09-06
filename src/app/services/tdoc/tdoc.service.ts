import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TdocService {

  results: any;
  private url = 'api.php?call=Auth&type=getTdoc';

  constructor(private http:Http) { }

  getData(parameters: Object) : Observable<JSON> {
    console.log("in get data");
    let parametersString = JSON.stringify(parameters); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    var thisVew = this;
    return this.http.get(this.url)
            .map(this.formatData)
            .catch(this.handleError);

  }

  private formatData(res: Response) {
    let results = res.json();
    return results || { };
  }

  private handleError(error: any) {
    return Observable.throw(error.json().error || 'Server error');
  }

}

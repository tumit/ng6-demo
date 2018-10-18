import { Injectable } from "@angular/core";

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalReference {

  get window(): Window {
    return _window();
  }

  get document(): Document {
    return this.window.document;
  }
}

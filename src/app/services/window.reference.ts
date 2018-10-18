import { Injectable } from "@angular/core";

declare let ga: Function;

function _window() : Window {
  // return the global native browser window object
  return window;
}

function _ga(): Function {
  return ga;
}

@Injectable({
  providedIn: 'root'
})
export class WindowReference {

  get window(): Window {
    return _window();
  }

  get document(): Document {
    return this.window.document;
  }

  get ga(): Function {
    return _ga();
  }
}

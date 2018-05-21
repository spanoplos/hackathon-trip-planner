import { Observable } from 'rxjs/Observable';
import { ajaxGet, ajaxGetJSON, ajaxPatch, ajaxPost, ajaxPut } from 'rxjs/observable/dom/AjaxObservable';

export function fetchTrip() {
  return ajaxGetJSON(`/admin/api/get-trips`);
}

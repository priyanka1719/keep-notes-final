import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToLogout() {
    this.router.navigate([ 'logout' ]);
  }

  routeToRegister() {
    this.router.navigate([ 'register' ]);
  }

  routeToEditNoteView(noteId) {
    this.router.navigate([
      'dashboard', {

        'outlets': {

          noteEditOutlet: [
            'note', noteId, 'edit'
          ]
        }
      }
    ]);
  }

  routeToNoteUserEditView(action) {
    this.router.navigate([
      'dashboard', {

        'outlets': {

          noteUserOutlet: [
            'note', action, 'users'
          ]
        }
      }
    ]);
  }

  routeToNoteReminderView(noteId) {
    this.router.navigate([
      'dashboard', {

        'outlets': {

          noteReminderOutlet: [
            'note', noteId, 'remind'
          ]
        }
      }
    ]);
  }

  routeBack() {
    this.location.back();
  }

  routeToNoteView() {
    this.router.navigate(['dashboard/view/noteview']);
  }

  routeToListView() {
    this.router.navigate(['dashboard/view/listview']);
  }
}

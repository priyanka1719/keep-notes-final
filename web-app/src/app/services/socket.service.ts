import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { NotesService } from './notes.service';

@Injectable()
export class SocketService {

  socket : any;
  notificationSubject: BehaviorSubject<string>;
  reminderSubject: BehaviorSubject<string>;
  userName: string;
  notificationId: string;

  constructor(private authSvc : AuthenticationService,
    private noteSvc : NotesService) { 

    this.socket = io(environment.url_notification_gateway);
    this.notificationSubject = new BehaviorSubject('');
    this.reminderSubject = new BehaviorSubject('');

    this.userName = authSvc.getLoginUserID();

    this.socket.emit('register', this.userName);

    this.socket.on('connect', () => {
      this.notificationSubject.next('Connected to the socket server');
    });

    this.socket.on('share-note', (shareInfo) => {
      
      this.notificationId = shareInfo.notificationID;
      
      if (shareInfo.note) {
        const title = shareInfo.note.title;
        this.notificationSubject.next('A note has been shared with you: ' + title);
        this.noteSvc.addNoteShared(shareInfo.note);
      }
    });

    this.socket.on('reminder', (shareInfo) => {

      this.notificationId = shareInfo.notificationID;
      
      if (shareInfo.note) {
        const title = shareInfo.note.title;
        this.reminderSubject.next('Reminder: ' + title);
      }
    });

  }
}

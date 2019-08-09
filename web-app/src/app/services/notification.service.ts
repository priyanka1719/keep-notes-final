import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private msgSvc: MessageService) { }

  addSucessMessage(summary: string, detail?: string) {
    this.msgSvc.add({ severity: 'success', summary: summary, detail: detail });
  }

  addErrorMessage(summary: string, detail?: string) {
    this.msgSvc.add({ severity: 'error', summary: summary, detail: detail });
  }
}

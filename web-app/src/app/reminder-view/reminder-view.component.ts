import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../services/notes.service';
import { ReminderService } from '../services/reminder.service';
import { Note } from '../note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reminder-view',
  templateUrl: './reminder-view.component.html',
  styleUrls: ['./reminder-view.component.css']
})
export class ReminderViewComponent implements OnInit {

  listOfHours: Array<Number>;
  listOfMinutes: Array<Number>;
  note: Note;
  selectedHour: number;
  selectedMinute: number;

  dateSelector: any;
  today: Date;
  errorMsg: string;

  constructor(private dialogRef: MatDialogRef<ReminderViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private noteSvc: NotesService,
    private reminderSvc: ReminderService) {

      this.listOfHours = [];
      this.listOfMinutes = [];
  }

  ngOnInit() {

    for (let i = 0; i < 24; i++) {
      this.listOfHours.push(i);
    }
    for (let i = 0; i < 60; i++) {
      this.listOfMinutes.push(i);
    }
    this.note = this.noteSvc.getNoteById(this.data.noteId);

    this.dateSelector = new FormControl(new Date());
    this.today = new Date();

  }

  saveReminder() {
    const selectedDate = this.dateSelector.value as Date;
    selectedDate.setMinutes(this.selectedMinute);
    selectedDate.setHours(this.selectedHour);

    let reminderObserver = this.reminderSvc.setReminderAt(selectedDate, this.note);

    reminderObserver.subscribe(
      response => this.dialogRef.close(),
      error => this.errorMsg = error.message
    );

  }

}

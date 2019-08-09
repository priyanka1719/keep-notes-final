import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Create Note',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'Update Note',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Edit', icon: 'pi pi-fw pi-comments' },
          { label: 'Share', icon: 'pi pi-fw pi-share-alt' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ]
      },
      {
        label: 'Group',
        icon: 'pi pi-fw pi-question',
        items: [
          { label: 'By Favourite', icon: 'pi pi-fw pi-heart' },
          { label: 'By Status', icon: 'pi pi-fw pi-filter' }
        ]
      },
      {
        label: 'Reminders',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'Add', icon: 'pi pi-fw pi-user-plus' },
          { label: 'View', icon: 'pi pi-fw pi-refresh' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ]
      },
      { separator: true },
      {
        label: 'Bulk Upload', icon: 'pi pi-fw pi-clone'
      }
    ];

  }

}

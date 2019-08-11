import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None //Overrides the styles of the theme with the given styles.css of the component
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        title: 'Keep',
        icon: 'pi pi-fw pi-home'
      },
      { separator: true },
      {
        title: 'Create Note',
        icon: 'pi pi-fw pi-plus'
      },
      {
        title: 'Update Note',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Edit', icon: 'pi pi-fw pi-comments' },
          { label: 'Share', icon: 'pi pi-fw pi-share-alt' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ]
      },
      {
        title: 'Group',
        icon: 'pi pi-fw pi-question',
        items: [
          { label: 'By Favourite', icon: 'pi pi-fw pi-heart' },
          { label: 'By Status', icon: 'pi pi-fw pi-filter' }
        ]
      },
      {
        title: 'Reminders',
        icon: 'pi pi-fw pi-clock',
        items: [
          { label: 'Add', icon: 'pi pi-fw pi-user-plus' },
          { label: 'View', icon: 'pi pi-fw pi-refresh' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ]
      },
      { separator: true },
      {
        title: 'Bulk Upload', 
        icon: 'pi pi-fw pi-clone'
      },
      { separator: true },
      {
        title: 'Logout', 
        icon: 'pi pi-fw pi-power-off',
        routerLink: '//logout'
      }
    ];

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  topics = ['Java', 'Javascript', 'Python', 'UI/UX Design', 'Machine Learning', 'Devops', 'Other'];

  ngOnInit(): void {
  }

}

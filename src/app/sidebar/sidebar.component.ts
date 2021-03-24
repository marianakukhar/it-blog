import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  topics = ['Java', 'Javascript', 'Python', 'Design', 'Devops', 'Other'];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onBackHome() {
    this.router.navigate([''])
  }
}

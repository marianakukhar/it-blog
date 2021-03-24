import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  topics = ['Java', 'Javascript', 'Python', 'Design', 'Devops', 'Other'];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onBackHome() {
    this.router.navigate([''])
  }
}
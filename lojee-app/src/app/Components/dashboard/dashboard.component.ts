import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from 'src/graphQL/user'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private apollo: Apollo
  ) { }

  async GET_USERS() {
    await this.apollo.query({ query: GET_USERS }).subscribe((data) => {
      if (data) {
        console.log(data.data)
      }
    })
  }

  ngOnInit(): void {
    this.GET_USERS()
  }
}

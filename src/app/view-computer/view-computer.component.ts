import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Computers } from '../type';

export const getComputerQuery = gql `
query getComputer {
  computers {
    id
    ram
    battery
    proccessor
    gpu
  }
}
`;


@Component({
  selector: 'app-view-computer',
  templateUrl: './view-computer.component.html',
  styleUrls: ['./view-computer.component.css']
})
export class ViewComputerComponent implements OnInit {
  // computers = [
  //   {
  //     id: 1,
  //     ram: 8,
  //     battery: 50.5,
  //     proccessor: "I7 7700k",
  //     gpu: "gtx 1050 ti"
  //   },
  //   {
  //     id: 2,
  //     ram: 16,
  //     battery: 97.5,
  //     proccessor: "radeon",
  //     gpu: "rtx 2080 super"
  //   }
  // ]

  computers: Computers[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo.watchQuery<any>({
      query: getComputerQuery,
    }).valueChanges.subscribe(result => {
      this.computers = result.data.computers
    })
  }

  
}

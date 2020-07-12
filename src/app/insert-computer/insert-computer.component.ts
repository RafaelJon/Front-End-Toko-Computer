import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { getComputerQuery } from '../view-computer/view-computer.component';

@Component({
  selector: 'app-insert-computer',
  templateUrl: './insert-computer.component.html',
  styleUrls: ['./insert-computer.component.css']
})
export class InsertComputerComponent implements OnInit {

  ram : number;
  battery: number;
  proccessor: string= " ";
  gpu: string = " ";

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  insertComputer() : void{
    this.apollo.mutate({
      mutation:gql`
      mutation CreateNewComputer($ram: Int!, $battery: Float!, $proc: String!, $gpu: String!) {
        createComputer(input: { ram: $ram, battery: $battery, proccessor: $proc, gpu:$gpu} ) {
          id
          ram
          battery
        }
      }
      `,
      variables:{
        ram: this.ram,
        battery: this.battery,
        proc: this.proccessor,
        gpu: this.gpu
      },
      refetchQueries: [{
        query: getComputerQuery,
        variables: { repoFullName: 'apollographql/apollo-client' },
      }],
    }).subscribe()
  }


}

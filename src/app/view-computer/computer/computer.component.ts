import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { getComputerQuery } from '../view-computer.component';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @Input('comp') computer: {id:BigInteger, ram:number, battery: number, proccessor:string, gpu: string};

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

  }

  updateComputer(){
    this.apollo.mutate({
      mutation: gql`
        mutation UpdateExistingComputer($id:ID!, $ram: Int!, $battery: Float!, $proc: String!, $gpu: String!) {
          updateComputer(id: $id, input: { ram: $ram, battery: $battery, proccessor: $proc, gpu:$gpu}) {
            ram
            battery
          }
        }
      `,
      variables:{
        id: this.computer.id,
        ram: this.computer.ram,
        battery: this.computer.battery,
        proc: this.computer.proccessor,
        gpu: this.computer.gpu
      },
      refetchQueries: [{
        query: getComputerQuery,
        variables: { repoFullName: 'apollographql/apollo-client' },
      }],
    }).subscribe()
  }
  
  deleteComputer(){
    this.apollo.mutate({
      mutation: gql `
        mutation DeleteExisitingComputer ($id:ID!){
          deleteComputer(id: $id)
        }
      `,
      variables:{
        id : this.computer.id
      },
      refetchQueries: [{
        query: getComputerQuery,
        variables: { repoFullName: 'apollographql/apollo-client' },
      }],
    }).subscribe()
  }

  
}

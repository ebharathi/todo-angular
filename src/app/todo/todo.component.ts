import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
   items:any=[];
   onAdd(item:string)
   {
     this.items.push(item);
     console.log("[+]Updated array-->",this.items);
   }
   onRemove(index:number)
   {
    this.items=this.items.filter((item:any,i:number)=>i!=index);
    console.log("removed --->",this.items);
   }
}

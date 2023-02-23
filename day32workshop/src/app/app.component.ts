import { Component, OnInit } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  todo: Todo|null = null

  ngOnInit(): void {

    const jsonString = localStorage.getItem('todo')
    if (!!jsonString)
    this.todo = JSON.parse(jsonString)
    console.info('>>> ngOninit' , this.todo)
      
  }

  processNewTodo(todo: Todo) {

    const jsonString = JSON.stringify(todo)
    console.info('>> saving todo to localstorage')
    localStorage.setItem('todo', jsonString)
    sessionStorage.setItem('todo' , jsonString)
    
  }
  

}

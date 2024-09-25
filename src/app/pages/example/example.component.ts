import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  standalone: true,
  selector: 'app-example',
  templateUrl: './example.component.html',
  imports: [],
  providers: [
    ExampleService,
  ],
})
export default class ExampleComponent {
  constructor(
    private exampleService: ExampleService
  ) { }

  getAll(): void {
    this.exampleService.getAll().subscribe(allExamples => {
      console.log(allExamples);
    })
  }
}

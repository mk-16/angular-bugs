import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aside[app-custom-one]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './custom-one.component.html',
  styleUrl: './custom-one.component.css'
})
export class CustomOneComponent {

}


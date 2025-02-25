import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // If you want to use NavbarComponent here

@Component({
  selector: 'app-root', // This is important - the selector for AppComponent
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'your-app-name'; // You can set a title for your application
}
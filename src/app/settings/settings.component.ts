import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule,CounterComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  exercise: string = '';
  quantity: number = 0;

  constructor(private router: Router) {
    // Add event listener for mouse wheel event on document
    document.addEventListener('wheel', this.handleMouseWheel);
  }

  // Function to handle mouse dragging to increment or decrement input value
  handleMouseWheel = (event: WheelEvent) => {
    const target = event.target as HTMLInputElement;

    // Check if the target is an input element and has the correct class
    if (target.tagName.toLowerCase() === 'input' && target.classList.contains('drag-counter')) {
      event.preventDefault(); // Prevent default scrolling behavior
      
      const currentValue = parseInt(target.value);
      const increment = event.deltaY > 0 ? -1 : 1; // Reverse the increment direction based on deltaY
      
      // Update input value
      this.quantity = currentValue + increment;
    }
  };

  startExercise() {
    // Save settings to local storage
    localStorage.setItem('exercise', this.exercise);
    localStorage.setItem('quantity', this.quantity.toString());

    // Navigate to the display component
    this.router.navigate(['/display']);
  }
}

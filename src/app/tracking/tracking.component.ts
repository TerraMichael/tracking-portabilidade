import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  @Input() status!: string;
  @Input() numberOfStatuses!: number;
  @Input() statusLabels!: string[];

  getStatusClass(index: number): string {
    const currentIndex = this.statusLabels.indexOf(this.status);
    if (index < currentIndex) {
      return 'active';
    } else if (index === currentIndex) {
      return 'active';
    } else {
      return 'inactive';
    }
  }
  

  getLineClass(index: number): string {
    const statusIndexes = this.getStatusIndexes();
    if (statusIndexes.includes(index)) {
      return 'active';
    } else if (index < Math.max(...statusIndexes)) {
      return 'completed';
    } else {
      return '';
    }
  }

  getStatusIndexes(): number[] {
    const statusIndexes: number[] = [];
    for (let i = 0; i < this.numberOfStatuses; i++) {
      statusIndexes.push(i);
    }
    return statusIndexes;
  }

  getLinePercentage(): number {
    const statusIndexes = this.getStatusIndexes();
    const currentIndex = this.statusLabels.indexOf(this.status);
  
    if (currentIndex >= 0) {
      const percent = ((currentIndex + 1) / statusIndexes.length) * 100;
      
      return percent;
    } else {
      return 0; // Não pinta a linha se o status atual não estiver na lista
    }
    console.log(currentIndex);
  }
}

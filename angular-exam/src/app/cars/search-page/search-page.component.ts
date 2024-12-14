import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  searchInitiated: boolean = false;
  isLoading: boolean = false;

  constructor(private carService: CarService) {}

  onSearch(): void {
    this.searchInitiated = true;
    const encodedSearchTerm = encodeURIComponent(this.searchTerm);
    const searchQuery = `where=brand%3D%22${encodedSearchTerm.toUpperCase()}%22`;

    this.carService.searchCarsByName(searchQuery).subscribe({
      next: (results) => {
        this.searchResults = results;
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1200);
      },
    });
  }
}

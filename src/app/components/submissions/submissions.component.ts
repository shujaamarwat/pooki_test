import { Component } from '@angular/core';
import { SubmissionData, sampleSubmissions } from '../../model/submissions.model';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent {

  searchTerm: string = '';
  activeFilters = { month: '', type: 'All' as 'Positive' | 'Negative' | 'All' };
  isFilterDropdownOpen: boolean = false;
  public submissions: SubmissionData[] = sampleSubmissions;

  filterSubmissions(): SubmissionData[] {
    const { searchTerm, activeFilters } = this;
    return this.submissions.filter(({ clientName, responseType }) => {
      const nameMatch = clientName.toLowerCase().includes(searchTerm.toLowerCase());
      const monthMatch = !activeFilters.month || activeFilters.month === 'March';
      const typeMatch = activeFilters.type === 'All' || responseType === activeFilters.type;
      return nameMatch && monthMatch && typeMatch;
    });
  }

  toggleFilterDropdown(): void {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  filterByResponseType(type: 'Positive' | 'Negative'): void {
    this.activeFilters.type = type;
    this.closeDropdown();
  }

  selectMonth(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.activeFilters.month = selectElement.value;
    this.closeDropdown();
  }

  removeMonthFilter(): void {
    this.activeFilters.month = '';
  }

  removeResponseTypeFilter(): void {
    this.activeFilters.type = 'All';
  }

  private closeDropdown(): void {
    this.isFilterDropdownOpen = false;
  }
}

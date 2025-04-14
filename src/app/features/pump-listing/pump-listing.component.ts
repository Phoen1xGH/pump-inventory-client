import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pump-listing',
  templateUrl: './pump-listing.component.html',
  styleUrl: './pump-listing.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PumpListingComponent implements OnInit{
  ngOnInit(): void {

  }

}

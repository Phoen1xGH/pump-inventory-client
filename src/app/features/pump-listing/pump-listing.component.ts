import { PumpService } from './../../core/services/pump.service';
import { PumpListItem } from './types/PumpListItem';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiFormatNumberPipe} from '@taiga-ui/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseResponse } from '../../core/api/types/base-response.data';
import { StatusCode } from '../../core/api/types/status-code.enum';

@Component({
  selector: 'app-pump-listing',
  templateUrl: './pump-listing.component.html',
  styleUrl: './pump-listing.component.css',
  imports: [AsyncPipe, NgForOf, TuiFormatNumberPipe, TuiTable, TuiButton],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PumpListingComponent implements OnInit{
  pumps$ = new BehaviorSubject<PumpListItem[]>([]);

  constructor(private pumpService: PumpService) {}

  ngOnInit(): void {
    this.pumpService._pumps$.subscribe((res) => {
      if(res)
        this.pumps$.next(res)
    })

    this.pumpService.getPumps();
  }

  readonly columns = [
    'Наименование',
    'Макс. давление, бар',
    'Температура жидкости, °C',
    'Вес, кг',
    'Цена, руб',
    ''
  ];

}

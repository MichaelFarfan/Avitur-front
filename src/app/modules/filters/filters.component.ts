import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/common/services/hotel.services';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public form: FormGroup;
  public mobile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _hotel: HotelService
  ) {
    this.form = fb.group({
      search: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$')]],
      all: [true],
      star1: [false],
      star2: [false],
      star3: [false],
      star4: [false],
      star5: [false],
    })
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      if (window.screen.width < 500) this.mobile = true;
      else this.mobile = false;
    })
  }

  get fm() {
    return this.form.controls;
  }

  public filter() {
    let data;
    let stars: number[] = [];
    if (this.fm.star1.value) stars.push(1)
    if (this.fm.star2.value) stars.push(2)
    if (this.fm.star3.value) stars.push(3)
    if (this.fm.star4.value) stars.push(4)
    if (this.fm.star5.value) stars.push(5)

    if (stars.length > 0) data = { name: this.fm.search.value, stars: stars }
    else data = { name: this.fm.search.value }

    this._hotel.filterHotels(data).subscribe(
      (res) => {
        this._hotel.data = res['results'];
      },
      (err) => {
        console.log(err)
      }
    )
  }

  public clear_checks() {
    this.fm.star1.setValue(false);
    this.fm.star2.setValue(false);
    this.fm.star3.setValue(false);
    this.fm.star4.setValue(false);
    this.fm.star5.setValue(false);
    this.filter()
  }

  public clear_all() {
    this.fm.all.setValue(false);
    if (!this.fm.star1.value && !this.fm.star2.value && !this.fm.star3.value && !this.fm.star4.value && !this.fm.star5.value) this.fm.all.setValue(true);
    this.filter()
  }

}

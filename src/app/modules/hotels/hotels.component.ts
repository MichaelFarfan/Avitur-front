import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/common/services/hotel.services';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public path_img: string = '../../../assets/images/hotels/'
  public path_icon: string = '../../../assets/icons/amenities/'

  constructor(
    public _hotel: HotelService
  ) { }

  ngOnInit(): void {
    this._hotel.getHotels().subscribe(
      (res) => {
        this._hotel.data = res['results'];
      },
      (err) => {
        console.log(err)
      }
    )
  }

  public createStars(number: number) {
    let stars: number[] = [];
    for (let i = 0; i < number; i++) {
      stars.push(i);
    }
    return stars;
  }

}

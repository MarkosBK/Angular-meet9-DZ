import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';
import { PictureService } from '../picture-service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService:PictureService) { }
  pictures:Picture[];
  selectedPicture:Picture;
  ngOnInit(): void {
    this.pictures=this.pictureService.getData();
    this.selectedPicture=this.pictures[0];
  }

  select(picture){
    this.selectedPicture=picture;
  }

}

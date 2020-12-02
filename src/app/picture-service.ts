import { Injectable } from '@angular/core';
import { Picture } from "./picture"
@Injectable()

export class PictureService {
  Pictures:Picture[]=[];
  getData():Picture[]{
    this.Pictures.push(new Picture("Title1", 2000, "Author1", 300,200, "Location1", "../assets/1.jpg"));
    this.Pictures.push(new Picture("Title2", 2000, "Author2", 300,200, "Location2", "../assets/2.jpg"));
    this.Pictures.push(new Picture("Title3", 2000, "Author3", 300,200, "Location3", "../assets/3.jpg"));
    this.Pictures.push(new Picture("Title4", 2000, "Author4", 300,200, "Location4", "../assets/4.jpg"));
    this.Pictures.push(new Picture("Title5", 2000, "Author5", 300,200, "Location5", "../assets/5.jpg"));
    this.Pictures.push(new Picture("Title6", 2000, "Author6", 300,200, "Location6", "../assets/6.jpg"));
    return this.Pictures;
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  imageLists: string[];
  constructor(private cs: CommonService) { }
  ngOnInit() {
    this.imageLists = this.cs.getImageList();
  }

}

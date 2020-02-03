import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videoLists: string[];
  constructor(private cs: CommonService) { }

  ngOnInit() {
    this.videoLists = this.cs.getVideoList();
  }

}

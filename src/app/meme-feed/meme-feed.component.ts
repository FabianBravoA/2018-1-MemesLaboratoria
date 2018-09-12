import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme-feed',
  templateUrl: './meme-feed.component.html',
  styleUrls: ['./meme-feed.component.css']
})
export class MemeFeedComponent implements OnInit {
  memes = [
    { 
      title : "6 sentido JS",
      image : "https://statics.memondo.com/p/99/ccs/2016/05/CC_2581711_3279a685ee0247abb69433addae1a7b1_meme_otros_solo_programadores_xd.jpg?cb=6607706",
      description : "Cuando no declaras tus variables..."
    },
    {
      title : "Borrachera de código",
      image : "https://4.bp.blogspot.com/-25kufFKVqWg/Vxet39_4TkI/AAAAAAAAAvc/OzdiQYqKRCAtEYaOCPq1xuriD90SRKZ4ACLcB/s640/12524173_1084250148303422_7360188813809398316_n.jpg",
      description : "Cuando te contratan sabiendo como programas"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

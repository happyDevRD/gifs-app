import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/service/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // TODO: servicio privado
  constructor(private gifsService : GifsService) {

  }

  get tags(){
    return this.gifsService.tagsHistory;
  }

  public returnTags(tag: string): void {
    this.gifsService.searchTag(tag);
  }

}

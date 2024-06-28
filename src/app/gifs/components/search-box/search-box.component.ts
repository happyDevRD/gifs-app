import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../service/gifs.service";

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar: </h5>
  <input type="text"
         class="form-control"
         placeholder="Buscar gifs"
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  txtTagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {
  }

  searchTag():void {
    const newTag:string = this.txtTagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }

}

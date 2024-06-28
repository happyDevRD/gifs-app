import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey:      string = 'WW1WyzZAU5Q9JwGA9PBCpy8yOF7dVMib';
  private _serviceUrl:  string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length < 1) return;
    this.organizeTag(tag)
    console.log(this._tagsHistory);

    const params: HttpParams = new HttpParams()
      .append('api_key', this._apiKey)
      .append('q', tag )
      .append('limit', 10 )

    this.http.get<SearchResponse>(`${this._serviceUrl}/search?`, { params: params })
      .subscribe(res =>
      {
        this.gifsList = res.data
      });
  }

  private organizeTag(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes((tag))){
      this._tagsHistory = this._tagsHistory.filter((oldTag:string) : boolean => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.slice(0,10)
    this.saveLocalStorage()
  }


  // localStorage
  private saveLocalStorage(): void {
    localStorage.setItem('giphy', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('giphy')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('giphy')!);
    }
  }

}

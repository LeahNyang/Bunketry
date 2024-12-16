import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  constructor(private http: HttpClient) { }

  url: string = '/data/blogpost.json';
  BlogPost: Array<any> = [];
  product: any;
  myheaders = new Headers();


  ngOnInit() {
    /*fetch(this.url).then(res => res.json())
      .then(json => {
        this.BlogPost = json;
      });*/

    this.myheaders.append('Content-Type', 'application/json');
    this.myheaders.append('Authorization', 'Bearer xErIOkYe7vkhzRsdztzapKxnW-sTZ0yi');
    fetch('https://backend.scarletvigil.com/items/Blog', {
      method: 'GET',
      headers: this.myheaders
    })
      .then(response => response.json())
      .then(json => {
        this.BlogPost = json.data;
        console.log(this.BlogPost)

      })
      .catch(function (error) {
        console.log('error', error);
      })

  }

  get getPinnedBlog() {
    return this.BlogPost.filter(x => x.pinned == true)
  }
}

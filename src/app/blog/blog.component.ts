import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  url: string = '/data/blogpost.json';
  BlogPost: Array<any> = [];
  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.BlogPost = json;
    });
  }
  get getPinnedBlog() {
    return this.BlogPost.filter( x => x.pinned == true)
    }
}

import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../models';
import {POSTS} from '../fake-db';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule,],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post!: Post;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      const postID = Number(params.get('id'));
      console.log(postID);
      let result = POSTS.filter((p: Post) => p.id === postID);
      if (result){
        this.post = result[0];
      } else {
        alert("Wrong ID");
      }
    })
  }
}

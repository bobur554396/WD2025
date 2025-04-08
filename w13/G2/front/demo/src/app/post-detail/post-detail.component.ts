import {Component, OnInit} from '@angular/core';
import {Post} from '../model';
import {ActivatedRoute} from '@angular/router';
import {POSTS} from '../fake-db';
import {CommonModule} from '@angular/common';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule,],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {
    // console.log('constructor');
    this.loaded = false;
  }

  ngOnInit() {
    // console.log('on init function');
    this.route.paramMap.subscribe(params => {
      // console.log(params.get("id"));
      const postId = Number(params.get("id"));

      this.loaded = false;
      this.postService.getPost(postId).subscribe((post: Post) => {
        this.loaded = true;
        this.post = post;

      })
      // console.log(typeof postId);
      // this.post = POSTS.find((post: Post) => post.id === postId) as Post;
    });
  }



}



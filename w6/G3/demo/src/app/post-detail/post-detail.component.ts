import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../models';
import {POSTS} from '../fake-db';
import {PostsService} from '../posts.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule,],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  // post!: Post | undefined;
  post!: Post;
  loaded: boolean;

  // Injecting objects
  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
    // console.log('constructor');
    this.loaded = false;
  }

  ngOnInit() {
    // console.log('ng init function');
    this.route.paramMap.subscribe((params) => {
      const postID = Number(params.get('id'));

      this.loaded = false;
      this.postsService.getPost(postID).subscribe((post: Post) => {
        this.post = post;
        this.loaded = true;
      });

      // this.post = POSTS.find(post => post.id === postID) as Post;
      // console.log(typeof postID);
    });
  }

}

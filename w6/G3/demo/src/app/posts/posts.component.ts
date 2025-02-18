import {Component, OnInit} from '@angular/core';
import {Post} from '../models';
import {POSTS} from '../fake-db';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  loaded: boolean = false;

  constructor(private postsService: PostsService) {
    // this.posts = [];
    // this.posts = POSTS;
  }

  ngOnInit() {
    this.loaded = false;
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loaded = true;
    })
  }
}

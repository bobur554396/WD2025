import {Component, OnInit} from '@angular/core';
import {Post} from '../model';
import {POSTS} from '../fake-db';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';
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

  // Injecting objects
  constructor(private client: HttpClient,
              private postService: PostsService) {
    // this.posts= POSTS;
    // console.log(this.posts);
  }

  ngOnInit() {
    this.loaded = false;
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loaded = true;
    })
  }


}

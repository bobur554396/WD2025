import {Component, OnInit} from '@angular/core';
import {Post} from '../models';
import {CommonModule} from '@angular/common';
import {POSTS} from '../fake-db';
import {RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(httpClient: HttpClient) {
    console.log('constructor');
    this.posts = POSTS;
  }

  ngOnInit() {
    console.log('on init function');
  }

}

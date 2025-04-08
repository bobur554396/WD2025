import {Injectable} from '@angular/core';
import {Post} from './model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) {
  }

  getPosts() {
    return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}

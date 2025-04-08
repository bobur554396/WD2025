import {Post} from './model';

export const POSTS: Post[] = [];


for (let i = 1; i <= 10; i++) {
  POSTS.push(
    {
      id: i,
      title: `Title ${i}`,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi doloremque necessitatibus, sequi soluta temporibus vero voluptas voluptatum? Dolorum esse est iusto laboriosam mollitia numquam pariatur possimus! Aliquam, fugiat illo.'
    }
  )
}

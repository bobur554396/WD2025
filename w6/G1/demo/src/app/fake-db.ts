import {Post} from './models';

export const POSTS: Post[] = [];


for (let i = 1; i <= 10; i++) {
  POSTS.push(
    {
      id: i,
      title: `Title ${i}`,
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi, delectus distinctio dolor eaque expedita fuga incidunt inventore iste nihil, perspiciatis placeat praesentium quisquam quod ratione soluta, tempore voluptate.`
    }
  )
}

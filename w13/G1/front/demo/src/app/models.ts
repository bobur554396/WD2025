export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface AuthToken {
  access: string;
  refresh: string;
}

export interface Post {
  id: number,
  title: string,
  body: string,
}

export interface Category {
  id: number;
  name: string;
}

export interface AuthToken {
  access: string;
  refresh: string;
}



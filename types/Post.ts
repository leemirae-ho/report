export interface Post {
  id: number;
  title: string;
  content: string;
  comments?: Array<string>;
}

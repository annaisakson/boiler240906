import { User } from "./userTypes";

export type Post = {
  id: number;
  user: User;
  title: string;
  content: string;
  post_date: Date;
};

export type PostInputType = {
  user: User;
  title: string;
  content: string;
  post_date: string;
};

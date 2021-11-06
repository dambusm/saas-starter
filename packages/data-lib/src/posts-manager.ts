import { HasuraSDK } from './data-sources/hasura/hasura-sdk';

export enum PostsError {
  UserAlreadyExists = 'UserAlreadyExists',
}

export class PostsManager {
  hasuraSDK: HasuraSDK;
  constructor(hasuraSDK: HasuraSDK) {
    this.hasuraSDK = hasuraSDK;
  }
  async getPosts(limit: number = 10) {
    return (await this.hasuraSDK.getPosts({ limit })).post;
  }

  async createPost(content: string) {
    return (await this.hasuraSDK.createPost({ content })).insert_post_one;
  }
}

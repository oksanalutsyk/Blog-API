import { IPost } from '../intarfaces/post.interface';

export class NewPost implements IPost{
    constructor(
        public id: string,
        public title: string,
        public body: string,
        public author: string,
    ){}
}
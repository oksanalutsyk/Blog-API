import { Pipe, PipeTransform } from "@angular/core";
import { IPost } from "../intarfaces/post.interface";

@Pipe({
  name: "userPost"
})
export class UserPipe implements PipeTransform {
  transform(posts: Array<IPost>, authorId: string) {
    // return null;
    if (!authorId) {
      return null;
    }

    let selectedPosts = posts.filter(function(post, postIndex) {
      if (post.author == authorId) {
        console.log(post);
        return posts;
      }
    });
    return selectedPosts;
  }
}

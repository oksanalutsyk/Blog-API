import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { IPost } from "../intarfaces/post.interface";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  posts = [];
  view: IPost;
  postId: string;
  constructor(private postsService: MainService) {
    this.getPosts();
  }

  ngOnInit() {}

  public getUser($event): void {
    let id = $event.target.id;
    console.log($event);
    console.log(id);
  }

  public getPosts(): void {
    this.postsService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}

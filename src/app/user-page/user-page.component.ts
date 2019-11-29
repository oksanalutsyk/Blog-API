import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { IPost } from '../intarfaces/post.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  posts = [];
  view: IPost;
  postId: string;
  id:string;
  author:string;
  userId:string;

  authorId: string


  constructor( private postsService: MainService,private route: ActivatedRoute) {
    this.getUser(event)
    this.getPosts()
   }

  ngOnInit() {
 
  }
  
  public getUser($event):void{
    this.id = $event.target.id;
    this.author = $event.target.author;
    console.log($event);
    console.log(this.id);
    if(this.id){
      alert('YES')
      // this.getUserPosts()
      this.authorId=this.id

    }
    else{
      alert('NO')
    }
  }

  public getPosts(): void {
    this.postsService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      err => {
        console.log(err)
      }
    )
  }

}


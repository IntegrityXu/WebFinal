import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  gameName: string= "The Sims 4";
  gameCompany: string="EA"
  gamePrice: number=59.99;
  totalPrice: number=100;
  liked: boolean=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  like() {
    if(this.liked)
    this.liked = false;
    else
    this.liked = true;
  }
  gotohome(){
    this.router.navigate(['']);
  }

  // buyGame() {

  //   if(localStorage.userName == "" ) {
  //     alert("please log in to buy this game.");
  //     return ;
  //   }

  //   let product = {
  //     productName: this.game.searchID
  //   };

  //   this.userService.addProduct(this.loggeduser, product)
  //   .subscribe(
  //     data => {
  //       //alert("successfully");
  //     })

  //   location.reload();
    
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  t:String=""
  count=0
  col:String[]=["","","","","","","","",""]
  box=[[0,0,0],[0,0,0],[0,0,0]]
  playerno:any
  code=0;
  msg=""
  constructor(private p:ActivatedRoute,private router:Router) { }
  row1_1()
  {
      let l:String=this.change(this.code);
      this.col[0]=l
      this.box[0][0]=this.val(l)
      this.win(this.box[0][0])
  }
  row1_2()
  {
      let l:String=this.change(this.code);
      this.col[1]=l
      this.box[0][1]=this.val(l)
      this.win(this.box[0][1])
  }
  row1_3()
  {
      let l:String=this.change(this.code);
      this.col[2]=l
      this.box[0][2]=this.val(l)
      this.win(this.box[0][3])
  }
  row2_1()
  {
      let l:String=this.change(this.code);
      this.col[3]=l
      this.box[1][0]=this.val(l)
      this.win(this.box[1][0])
  }
  row2_2()
  {
      let l:String=this.change(this.code);
      this.col[4]=l
      this.box[1][1]=this.val(l)
      this.win(this.box[1][1])
  }
  row2_3()
  {
      let l:String=this.change(this.code);
      this.col[5]=l
      this.box[1][2]=this.val(l)
      this.win(this.box[1][2])
  }
  row3_1()
  {
      let l:String=this.change(this.code);
      this.col[6]=l
      this.box[2][0]=this.val(l)
      this.win(this.box[2][0])
  }
  row3_2()
  {
      let l:String=this.change(this.code);
      this.col[7]=l
      this.box[2][1]=this.val(l)
      this.win(this.box[2][1])
  }
  row3_3()
  {
      let l:String=this.change(this.code);
      this.col[8]=l
      this.box[2][2]=this.val(l)
      this.win(this.box[2][2])
  }
  change(x:number):String
  {
    if(x%2==0)
    {
      this.code+=1;
      return 'yellow'
    }
    else if(x%2!=0)
    {
      this.code+=1;
      return 'red'
    }
    return 'white'
  }
  val(x:String):number
  {
    if(x=='red')
    return 2
    else
    return 1
  }
  win(y:number)
  {
    let z=this.box
    console.log(z)
            if(z[0][0]==z[0][1] && z[0][0]==z[0][2] && z[0][1]==z[0][2] && (z[0][0]!=0 && z[0][1]!=0 && z[0][2]!=0))
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            if(z[0][0]==y && z[0][1]==y && z[0][2]==y || (z[0][0]==y && z[1][0]==y && z[2][0]==y) || (z[0][0]==y && z[1][1]==y && z[2][2]==y))
            {
              console.log("************************")
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[0][0]==y && z[0][1]==y && z[0][2]==y  || z[0][1]==y && z[1][1]==y && z[2][1]==y)
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[0][2]==y && z[1][2]==y && z[2][2]==y || z[0][2]==y && z[1][1]==y && z[2][0]==y || (z[0][0]==y && z[0][1]==y && z[0][2]==y ))
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[0][0]==y && z[1][0]==y && z[2][0]==y || z[1][0]==y && z[1][1]==y && z[1][2]==y)
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[0][1]==y && z[1][1]==y && z[2][1] || z[1][0]==y && z[1][1]==y && z[1][2]==y || z[0][2]==y && z[1][1]==y && z[2][0]==y || z[0][0]==y && z[1][1]==y && z[2][2]==y)
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[0][2]==y && z[1][2]==y && z[2][2]==y || z[1][0]==y && z[1][1]==y && z[1][2]==y) 
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
            }
            else if(z[2][0]==y && z[2][1]==y && z[2][2]==y || z[0][0]==y && z[1][0]==y && z[2][0]==y || z[2][0]==y && z[1][1]==y && z[0][2]==y)
            {
              this.msg="GAME OVER"
              setTimeout( () => { this.router.navigate(["select"]) }, 2000 );
              
            }
            this.count+=1
  }











 

  ngOnInit(): void {
    this.p.queryParamMap.subscribe((params)=>{
      this.playerno=params.get('player')
     // this.code=+this.playerno
      //console.log(typeof this.code)
    })
    

  }

}

class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
      
       // console.log(this.body.speed);
        if(this.body.speed<3){
          var angle = this.body.angle;
         push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("white")
          rect(0, 0, this.width, this.height);
          pop();

         }
        else{
          //remove the box from the world
          World.remove(world,this.body);
                  
           }
          }
        

        score(){
          if(this.Visiblity < 0 && this.Visiblity > -1005){
        
            score++
          }
        }
      };
      
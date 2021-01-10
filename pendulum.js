class bob{

    constructor(x,y,r,color) {

       var options={isStatic:false,restitution:1,friction:0,density:2}

       this.body=Bodies.circle(x,y,r,options);

       this.radius=r;
       this.x=x;
       this.y=y;
      this.color = color;
        World.add(world,this.body);
    }

    display() {
      
        var paperpos=this.body.position;
        var angle=this.body.angle;
        
        push() ;
        translate(paperpos.x, paperpos.y);
        rotate(angle);

        stroke(10);
        
        fill("white");
        ellipseMode(RADIUS);        
        ellipse(0,0,this.radius,this.radius); 
        
        pop() ;
    }
}
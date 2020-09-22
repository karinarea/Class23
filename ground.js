class Ground{
    //proproties
    constructor (x,y,w,h){
       var options = {
          isStatic: true
       }
       this.body = Bodies.rectangle(x,y,w,h, options);
       this.width = w;
       this.height = h;
       World.add(world, this.body);
    }
    //functions
    display() {
       rectMode(CENTER)
       fill("white");
       rect(this.body.position.x, this.body.position.y, this.width, this.height);
       
    }
}
class Box {
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {
            restitution: 1,
            friction: 0.5,
            density: 1
        };
        //box1.body
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Add this new setting
        push();
        rectMode(CENTER);
        fill(255);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0,0, this.width, this.height);
        //Revert to the old setting - without translate & rotate
        pop();
    }

}

/*
push() -- Captures a new setting
pop() -- reverts to the old setting

this - keyword that points to the currently active object (object using the property)

rotate() - About an angle
translate() - Sliding/slipping without rotation - about a point (position of the object)
*/
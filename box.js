class Box{
    constructor(){

        this.body = Bodies.rectangle(x,y,w,h)
        
        World.add(engine.world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,50,50)
    }
}
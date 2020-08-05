class pig{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1
        }
        this.body = Bodies.rectangle(x,y,50,50);
        World.add(world, this.body);
    }

}
class launcher{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            //this.sling1 = loadImage('sprites/sling1.png');
            //this.sling2 = loadImage('sprites/sling2.png');
            //this.sling3 = loadImage('sprites/sling3.png');
            //this.pointB = pointB
            this.launcher = Constraint.create(options);
            World.add(world, this.launcher);
        }
    
        attach(body){
            this.launcher.bodyA = body;
        }
    
        fly(){
            this.launcher.bodyA=null;
        }
    
        display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
class ConstraintClass {
constructor(Body1, Body2){
    var options ={
    bodyA : Body1,
    bodyB : Body2,
    length : 75,
    stiffness : 0.05
    }
 this.chain = Constraint.create(options)
 World.add(world, this.chain)
 console.log(this.chain)
}

display() {
    var PointA = this.chain.bodyA.position
    var PointB = this.chain.bodyB.position
    line(PointA.x, PointA.y, PointB.x, PointB.y)
}
}

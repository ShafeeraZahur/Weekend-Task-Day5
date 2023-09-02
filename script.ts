//to create custom type
type colorData = "Red" | "Yellow" | "Blue" | "Green"
class circle{
    radius : number = 1.0
    color: colorData = "Red"

    //to create a constructor with optional parameter
    constructor(radius?:number, color?:colorData){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
    
    //function to get radius value with number as return type
    getRadius():number{
        return this.radius
    }

    //function to set radius value
    setRadius(radius:number){
        this.radius = radius
    }

    //function to get color value with custom return type colorData
    getColor():colorData{
        return this.color
    }

    //function to set the color value
    setColor(color:colorData){
        this.color = color
    }

    //to return string of member variables value
    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    //to compute and return circle area using radius
    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    //to compute and return circle circumference using radius
    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}

//to invoke the Circle-class constructor with no param
let C1  = new circle()
console.log("Constructor with no params: "+ C1.toString())

//to invoke the Circle-class constructor with one param
let C2 = new circle(3.5)
console.log("Constructor with one param: "+ C2.toString())

//to invoke the Circle-class constructor with all the params
let C3 = new circle(2.2, 'Yellow')
console.log("getRadius: "+C3.getRadius())
C3.setRadius(3.3)
console.log("Radius value after setRadius: " +C3.getRadius())
console.log("getColor: "+C3.getColor())
C3.setColor("Blue")
console.log("Color Value after setColor: " + C3.getColor())
console.log(C3.toString())
console.log("Area: "+C3.getArea())
console.log("Circumference: "+C3.getCircumference())
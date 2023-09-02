class Person{
    constructor(firstname,lastname,age,gender,tenth_marks,twelth_marks,degree,cgpa,placement,skills){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
        this.tenth_marks=tenth_marks;
        this.twelth_marks=twelth_marks;
        this.degree=degree;
        this.cgpa=cgpa;
        this.placement=placement;
        this.skills=skills;
        this.getfulldetails=function(){
            return this.firstname+" "+this.lastname+" "+this.age+" "+this.gender+
            " "+this.tenth_marks+" "+this.twelth_marks+" "+this.degree+" "+this.cgpa
            +" "+this.placement+" "+this.skills;
        }
    }
}

var PersonDetails = new Person();
PersonDetails.firstname = "Shafeera";
PersonDetails.lastname = "Zahur";
PersonDetails.age = 22;
PersonDetails.gender = "female";
PersonDetails.tenth_marks = 486;
PersonDetails.twelth_marks = 499;
PersonDetails.degree = "BE";
PersonDetails.cgpa = 9;
PersonDetails.placement = "TCS";
PersonDetails.skills = "C,C++,Java";
alert(PersonDetails.getfulldetails());
console.log(PersonDetails.getfulldetails())
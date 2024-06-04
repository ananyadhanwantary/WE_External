class Student{
    constructor(name){
        this.name=name;
        this.occupation="student"
    }
    greet=()=>{
        console.log(`hello ${this.name} you are a ${this.occupation}`)
    }
}
const student=new Student("John")
student.greet()
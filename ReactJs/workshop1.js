
/*a constructor;
the constructor parameters: "name", "email", and "community";
the constructor should assign the parameters' values to class properties of the same name using the this keyword.
*/
class Student
{
    constructor(name, email, community)
    {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

/*The Bootcamp class should include:
a constructor;
the constructor parameters: "name", "level", and a third parameter "students" which is an array initialized as empty (using default function parameters syntax);
the constructor should assign the parameters values to class properties of the same name using the this keyword.*/
class Bootcamp
{
    constructor(name, level, students = [])
    {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    /*registerStudent():

Should have a single parameter, which takes an object created from the Student class as its argument
(so a name like student or studentToRegister would be a sensible name to use as the parameter)
Checks if any student with the same email address already exists in the Bootcamp's students array. 
Use an Array method to verify if the student's email address is already registered. There are multiple ways to make this verification, including a method you have learned this week. Research and find one way. 
Adds the passed-in students object to the end of the Bootcamp's students array only if not already registered. There should be no duplicate emails in the students array.
Using console.log, writes the outcome of the registration (e.g. "Registering neo@matrix.com to the bootcamp Web Dev Fundamentals.")
At the end of the method, returns the current Bootcamp students array. 
*/

    registerStudent(studentToRegister)
    {
        console.log(studentToRegister);
        console.log(this.students);
        if(this.students.find(o => o.email === studentToRegister.email) != undefined)
        {
            console.log("User Exists");
        }
        else
        {
            console.log(`user adding ${studentToRegister.email} `);
            this.students.push(studentToRegister);
        }
        return this.students;
    }
}

const boot = new Bootcamp("boot","3");
const test = new Student("test", "test@test.com", "test1");
boot.registerStudent(test);

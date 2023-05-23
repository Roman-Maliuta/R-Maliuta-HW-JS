class Person {

    constructor(name, surname){
        this.personName = name;
        this.personSurname = surname;
    }
    
    welcome() {
        console.log(`Hi! I'm ${this.personName} ${this.personSurname}`)
    }
};

const person = new Person('Jonny', 'Gray');
person.welcome();



class Student extends Person{

    constructor(name, surname, faculty, marks) {
        super(name, surname);
        this.faculty = faculty;
        this.marks = marks;
    }

    calc() {
        const testTwo = this.marks.slice();
        const sum = testTwo.reduce((acc, current) => { 
            acc = acc + current;
           return acc;
        }, 0);
       ; return sum;
    }

    getAvgMark() {
        let avMark = this.calc(this.marks) / this.marks.length;
        console.log(`Average mark is ${avMark}`);
    }

    getMedianMark() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  a - b);
        if (testTwo.lenght % 2 !== 0) {
            let medianMark = testTwo[Math.ceil(testTwo.length / 2)];
            console.log(`Median mark is ${medianMark}`);
        } else {
            let medianMark = (testTwo[testTwo.length / 2] + 
            testTwo[testTwo.length / 2 - 1]) / 2;
            console.log(`Median mark is ${medianMark}`);
        };
    }

    getMaxMark() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  b - a).splice(1);
        console.log(`Max mark is ${testTwo}`);
    }

    
    getMinMark() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  a - b).splice(1);
        console.log(`Min mark is ${testTwo}`);
    }
    
    getTotal() {
        console.log(`Total sum  of marks is ${this.calc(this.marks)}`);
    }

    getInfo() {
        console.log(
          `Name student: ${this.personName} ${this.personSurname}, faculty: ${this.faculty},
           total sum  of marks: ${this.calc(this.marks)}`
        );
    }
}

const student = new Student('Jake', 'Stone', 'engineering', 
[55, 12, 23, 45, 71, 98, 78, 53, 33, 14, 88, 55, 25]);

student.welcome();
student.getAvgMark();
student.getMedianMark();
student.getMaxMark();
student.getMinMark(); 
student.getTotal(); 
student.getInfo(); 


class Headman extends Student{

    constructor(name, surname, faculty, marks){
        super(name, surname, faculty, marks);
    }

    defendGroup() {
        console.log(`This is my group. I'm their hero!`);
    }
}

const headman = new Headman('Clark', 'Kent', 'engineering', 
[75, 82, 83, 95, 91, 98, 88, 73, 93, 94, 88, 75, 95]);

headman.welcome();
headman.getAvgMark();
headman.getMedianMark();
headman.getMaxMark();
headman.getMinMark(); 
headman.getTotal(); 
headman.getInfo(); 

headman.defendGroup();
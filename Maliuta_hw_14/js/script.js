function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.calc = function() {
        const testTwo = this.marks.slice();
        const sum = testTwo.reduce((acc, current) => { 
            acc = acc + current;
           return acc;
        }, 0);
       ; return sum;
    };

    this.getAvgMark = function() {
        let avMark = this.calc(marks) / this.marks.length;
        console.log(`Average mark is ${avMark}`);
        return this; 
    };

    this.getMedianMark = function() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  a - b);
        if (testTwo.lenght % 2 !== 0) {
            let medianMark = testTwo[Math.ceil(testTwo.length / 2)];
            console.log(`Median mark is ${medianMark}`);
            return this; 
        } else {
            let medianMark = (testTwo[testTwo.length / 2] + 
            testTwo[testTwo.length / 2 - 1]) / 2;
            console.log(`Median mark is ${medianMark}`);
            return this; 
        };
    };

    this.getMaxMark = function() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  b - a).splice(1);
        console.log(`Max mark is ${testTwo}`);
        return this; 
    };

    
    this.getMinMark = function() {
        const testTwo = this.marks.slice();
        testTwo.sort((a, b) =>  a - b).splice(1);
        console.log(`Min mark is ${testTwo}`);
        return this; 
    };
    
    this.getTotal = function() {
        console.log(`Total sum  of marks is ${this.calc(marks)}`);
        return this; 
    };

    this.getInfo = function() {
        console.log(
          `Name student: ${this.name}, faculty: ${this.faculty},
           total sum  of marks: ${this.calc(marks)}`
        );
        return this; 
    };
};

const student = new Student('Joe Black', 'engineering', 
[55, 12, 23, 45, 71, 98, 78, 53, 33, 14, 88, 55, 25]);

console.log(student);

student.getAvgMark()
       .getMedianMark()
       .getMaxMark()
       .getMinMark()
       .getTotal()
       .getInfo();
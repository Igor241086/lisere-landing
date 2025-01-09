class Student {
    constructor(name, surname, birthDate, assessments = []) {
        this.name = name;
        this.surname = surname;
        this.birthDate;
        this.assessments = assessments;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthDate;
    }

    getAverage() {
        if (this.assessments.length === 0) return 0;
        const sum = this.assessments.reduce((acc, grade) => acc + grade, 0);
        return sum / this.assessments.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
        return this;
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
        return this;
    }

    getAverageAttendance() {
        const attendedClasses = this.attendance.filter(item => item === true).length;
        const totalClasses = this.attendance.filter(item => item !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }

    summary() {
        const averageScore = this.getAverage();
        const averageAttendance = this.getAverageAttendance();

        if (averageScore > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageScore > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student('Іван', 'Сидорчук', 2000, [95, 88, 92, 100]);
const student2 = new Student('Микола', 'Федорчук', 1999, [75, 80, 85, 90]);
const student3 = new Student('Анна', 'Ткачук', 2001, [50, 60, 65]);

student1.present().present().absent();
student2.present().absent().absent().present();
student3.absent().absent().present();

console.log(`Вік студента 1: ${student1.getAge()}`);
console.log(`Середній бал студента 1: ${student1.getAverage()}`);
console.log(`Середня відвідуваність студента 1: ${student1.getAverageAttendance()}`);
console.log(`Підсумок для студента 1: ${student1.summary()}`);

console.log(`Вік студента 2: ${student2.getAge()}`);
console.log(`Середній бал студента 2: ${student2.getAverage()}`);
console.log(`Середня відвідуваність студента 2: ${student2.getAverageAttendance()}`);
console.log(`Підсумок для студента 2: ${student2.summary()}`);

console.log(`Возраст студента 3: ${student3.getAge()}`);
console.log(`Середній бал студента 3: ${student3.getAverage()}`);
console.log(`Середня відвідуваність студента 3: ${student3.getAverageAttendance()}`);
console.log(`Підсумок для студента 3: ${student3.summary()}`);
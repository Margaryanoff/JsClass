// ? 1.  Ունենալ հիմնական կլասս որից կստեղծենք դասավանդող որից կստեղծենք ուսանող կլասները
//  ?Ստեղծել մի քանի դասավանդող օբյեկտ, իր պռոտոտիպի հիման վրա
// Դասավանդողը կունենա անուն տարիք աշխատավարձ  և ուսանողներ `[]`
// տարիքը կարող է բարձրանալ 1 տարով իջացնելու դեպքում կթողնենք ինչ-որ հաղորդագրություն
// Դասավանդողները կարող են ստանալ x աշխատավարձ
// կունենան մեթոդ որով կասեն իրենց անունը և իրենց ուսանողներին անունները
// Ստեղծել մի քանի ուսանողի օբյեկտ, իր պռոտոտիպի հիման վրա
// Ուսանողները կունենան նույն տարիքային հատկությունը ինչ-որ դասավանդողները
// Ուսանողները կվճարեն x գումար
// և կունենան մեթոդ  որով կասեն թէ ով է իրանց դասավանդողը

class University {
    #age;
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    get age() {
        return this.#age;
    }
    set age(newAge) {
        if (newAge > this.#age + 1 || newAge < this.#age) {
            this.#age = newAge;
            console.log("miban sxala");
        } else {
            this.#age = newAge;
        }
    }
}

class Teachers extends University {
    constructor(name, position, salary, experience, age) {
        super(name, position);
        this.salary = salary;
        this.experience = experience;
        this.age = age;
    }
}

const maxSalary = 250_000
const minSalary = 130_000

const MisAloyan = new Teachers("Anush", "Teacher", parseInt((Math.random() * (maxSalary - minSalary)) + minSalary), "10 Years", 29);
const MisSloyan = new Teachers("Ani", "Teacher",  parseInt((Math.random() * (maxSalary - minSalary)) + minSalary), "1 Years", 30);
const MisBagoyan = new Teachers("Araqs", "Teacher",  parseInt((Math.random() * (maxSalary - minSalary)) + minSalary), "6 Years", 26);

const objTeachers = {
    teacher1: MisAloyan,
    teacher2: MisSloyan,
    teacher3: MisBagoyan,
};

class Students extends University {
    #studentBill = 600_000;
    constructor(name, position, year, condition, age, gender) {
        super(name, position);
        this.year = year;
        this.condition = condition;
        this.age = age;
        this.gender = gender;
        if (this.condition === "served to military" && this.gender === "male") {
            this.#studentBill = 400000;
        }
    }
}

const bgdo = new Students("Bgdo", "student", 2, "served to military", 23, "male");
const aro = new Students("aro", "student", 1, "didnt serve to military", 21, "male");
const narek = new Students("narek", "student", 2, "served to military", 21, "male");
const artak = new Students("artak", "student", 4, "didnt serve to military", 24, "male");
const ani = new Students("ani", "student", 3, "didnt serve to military", 20, "female");
const karen = new Students("karen", "student", 1, "served to military", 23, "male");
const vardan = new Students("vardan", "student", 5, "served to military,", 24, "male");
const tyush = new Students("tyush", "student", 3, "served to military", 25, "male");
const maria = new Students(
    "maria",
    "student",
    3,
    "didnt serve to military",
    21,
    "female"
);
const meri = new Students("mari", "student", 2, "didnt serve to military", 20, "female");
const tatev = new Students(
    "tatev",
    "student",
    1,
    "didnt serve to military",
    19,
    "female"
);

const objStudents = {
    st1: bgdo,
    st2: aro,
    st3: narek,
    st4: artak,
    st5: ani,
    st6: karen,
    st7: vardan,
    st8: tyush,
    st9: maria,
    st10: tatev,
};

MisAloyan.students = [
    {
        student1: bgdo,
        student2: aro,
        student3: narek,
    },
];
MisSloyan.students = [
    {
        student4: ani,
        student5: karen,
        student6: vardan,
    },
];
MisBagoyan.students = [
    {
        student7: tyush,
        student8: maria,
        student9: meri,
        student10: tatev,
    },
];

bgdo.teacher = MisAloyan;
aro.teacher = MisAloyan;
narek.teacher = MisAloyan;

ani.teacher = MisSloyan;
karen.teacher = MisSloyan;
vardan.teacher = MisSloyan;

tyush.teacher = MisBagoyan;
maria.teacher = MisBagoyan;
meri.teacher = MisBagoyan;
tatev.teacher = MisBagoyan;

console.log(MisAloyan);
console.log(MisSloyan);
console.log(MisBagoyan);

console.log(bgdo);
console.log(ani);
console.log(tyush);

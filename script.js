class Student {
    constructor(name, brIndeksa, gender, location) {
        this.name = name
        this.brIndeksa = brIndeksa
        this.gender = gender
        this.location = location
    }
}
let studentNikola = new Student("Nikola", "001", "Male", "GM")
// console.log(studentNikola);


class Nikola extends Student {
    constructor(name, brIndeksa, gender, location, interest, status) {
        super(name, brIndeksa, gender, location) 
            this.interest = interest
            this.status = status
    }
}
let newNikola = new Nikola("Nikola", "001", "Male", "GM", "Develop", "Busy")
console.log(newNikola);


class Filip extends Student {
    constructor(name, brIndeksa, gender, location, interest, status, sport) {
        super(name, brIndeksa, gender, location) 
            this.interest = interest
            this.status = status
            this.sport = sport
    }
}
let newFilip = new Filip("Filip", "002", "Male", "GM", "Develop", "Busy")
console.log(newFilip);


class Sasa extends Student {
    constructor(name, brIndeksa, gender, location, interest, status, language) {
        super(name, brIndeksa, gender, location) 
            this.interest = interest
            this.status = status
            this.language = language
    }
}
let newSassa = new Sasa("Sasa", "003", "Male", "GM", "Develop", "Busy")
console.log(newSassa);
// ARRAYS OF (PATIENTS) AND (CLINICAL HISTORY OF EACH PATIENT)
const patientsToAttend: Array <string> = [] ;
const patientsHistory: Array <any> = [] ;

// CLASS TO CREATE THE RECEPCIONIST
class Recepcionist {

    age: number ;
    user: string ;
    email: string ;
    daysWorks: string[] ;

    constructor(age: number , user: string , email: string , daysWork: string[]) {
        this.age = age ;
        this.user = user ;
        this.email = email ;
        this.daysWorks = daysWork ;
    }

    // FUNCTION TO UPLOAD A PATIENT
    addPatient(patient:any) {
        patientsToAttend.push(patient.animalName)
    }

    // FUNCTION TO UPLOAD THE PATIENT CLINICAL HISTORY
    addHistory(patient:any) {
        patientsHistory.push(patient)
    }

    // FUNCTION TO CHARGE CONSULTATION
    consultCharge(name: string , consult = 1000) {

        const patient = patientsHistory.find((patient) => patient.animalName.toLocaleLowerCase() === name.toLocaleLowerCase()) 

        if (patient) {
            const total = consult + (patient.vaccinesApplied.length * 800)

            console.log(`The Total Amount for ${patient.animalName} is: $${total}`)
        } else {
            console.log("Patient not found")
        }
    }
}

// CLASS TO CREATE THE VETERINARY 
class Veterinary {
    age: number ;
    user: string ;
    email: string ;

    constructor(age:number , user:string , email: string) {
        this.age = age ;
        this.user = user ;
        this.email = email ;
    }

    removePatient(name: string) {
        const patientIndex = patientsToAttend.findIndex((patient) => patient.toLocaleLowerCase() === name.toLocaleLowerCase()) 
    
        if (patientIndex >= 0) {
            patientsToAttend.splice(patientIndex , 1)
        } else {
            console.log("Patient not found")
        }
    }

    addInfoPatient(name: string , propertyName: string , info: any) {

        const patient = patientsHistory.find((patient) => patient.animalName.toLowerCase() === name.toLocaleLowerCase() )

        if (patient) {
            patient[propertyName] = info ;
        } else {
            console.log("Patient not found")
        }
    }

}

// TYPE TO CREATE PATIENTS
type Patients = {
    animalName: string ;
    type: string ;
    race: string ;
    owner: string ;
    yearOfIncome: number ;
    notes: string ;
    vaccinesApplied: string[] ;
}

// RECEPCIONISTS
const sandra = new Recepcionist(40 , "Sandra" , "sandraotaz@recepcion.com" , ["Lunes" , "Miercoles" , "Viernes"])
const juan = new Recepcionist(53 , "Juan" , "juanPerez@recepcion.com" , ["Martes" , "Jueves" , "Sabados"])

// VETERINARY
const julieta = new Veterinary(54 , "Julieta" , "juieta@gmail.com")

// PATIENTS
const ciro: Patients = {
    animalName: "Ciro",
    type: "dog" ,
    race: "pastorAleman" ,
    owner: "Francisco Meglia" ,
    yearOfIncome: 2022 ,
    notes: "Is more thin" ,
    vaccinesApplied: ["Vaccine1" , "Vaccine2"]
}

const firulais: Patients = {
    animalName: "Firulais",
    type: "dog" ,
    race: "caniche" ,
    owner: "Gustavo Meglia" ,
    yearOfIncome: 2021 ,
    notes: "Is more fat" ,
    vaccinesApplied: ["Vaccine1" , "Vaccine2" , "Vaccine3"]
}

// ADD PATIENT
sandra.addPatient(firulais)
juan.addPatient(ciro)

// ADD HISTORY
sandra.addHistory(firulais)
juan.addHistory(ciro)

// REMOVE PATIENT
julieta.removePatient("firulais")

// CHANGE INFO
julieta.addInfoPatient("ciro" , "type" , "cat")

// SHOW CHARGE
sandra.consultCharge("ciro")




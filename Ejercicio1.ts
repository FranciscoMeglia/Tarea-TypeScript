// EXERCICE 1
// CART ARRAY
const products: Array<any> = []

// ADMINISTRATOR CLASS
class Administrator {
    name: string ;

    constructor(name: string) {
        this.name = name ;
    }

    addNewProduct(product: object) {
        products.push(product)
    }
}

// EMPLOYEE CLASS
class Employee {
    name: string ;
    
    constructor(name:string) {
        this.name = name ;
    }

    answerClient(quest:string , ans: string) {
        return (`question: ${quest} ? Answer: ${ans}`)
    }
}

// USERS CLASS
class Users {
    name: string ;
    
    constructor(name:string) {
        this.name = name ;
    }
}

// PRODUCT TYPE
type Product = {
    brand: string ,
    cantity: number ,
    price: number ,
    discount: boolean ,
    nails?: Array<string> 
}

const hammer: Product = {
    brand: "Honda" ,
    cantity: 10 ,
    price: 1200 ,
    discount: false 
}

const wire: Product = {
    brand: "Montoto" ,
    cantity: 12 ,
    price: 100 ,
    discount: true 
}

const nails: Product = {
    brand: "Montoto" ,
    cantity: 12 ,
    price: 100 ,
    discount: true ,
    nails: ["gaps" , "Round Toe"]
}

// admin
const Romina: Administrator = new Administrator("Romina")
// employees
const Roman: Employee = new Employee("Roman")
const Julia: Employee = new Employee("Julia")
// user
const Francisco: Users = new Users("Francisco")
Romina.addNewProduct(hammer)
Romina.addNewProduct(wire)
Romina.addNewProduct(nails)



console.log(products)
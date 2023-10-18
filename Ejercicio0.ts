// EXERCICE 1
// (A)
const strings: Array<string> = []

// (B)
const addStrings = (str1:string , str2:string , str3:string , str4:string , str5:string) => {
    strings.push(str1 , str2 , str3 , str4 , str5)
}

// (C)
const longWord = (strArray: Array<string>) => {

    let longWord: string = strArray[0]

    for(let i = 0 ; i < strArray.length ; i++) {

        if(strArray[i].length > longWord.length) {
            longWord = strArray[i]
        }
    }

    console.log(longWord)
}

// EXERCICE 2
const checkParameters = (str: string , bool: boolean , thirth?: any) => {

    if (thirth !== undefined) {
        console.log("Added an thirth parameter") 
    } else {
        console.log(`${str} ${bool}`)
    }
}

// EXERCICE 3
// (A)
class Administrative {
    name: string ;
    job: string ;
    antiquity: number ;

    constructor(name:string , job: string , antiquity: number) {
        this.name = name ;
        this.job = job ;
        this.antiquity = antiquity
    }

    joinWork() {
        console.log("Joined work Saturad 12:00 PM")
    }

    work() {
        console.log("The Administrative is working")
    }
}

// (B)
const juana: Administrative  = new Administrative("Juana" , "Developer" , 3)

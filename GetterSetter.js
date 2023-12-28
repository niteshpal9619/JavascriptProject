// const obj={
//     Names:["Ram","Shyam","Seeta","Geeta"],
//     get names(){
//         return this.Names
//     },
//     set setName(name){
//         this.Names.push(name)
//     }
// }

// console.log('List After Getter: ',obj.names)
// console.log('List After Setter: ',obj.setName="Sanju")
// console.log('List After Setter Sunju: ',obj.names)

// class PrintMessage{
//     static message="hello world"
//     static get GetMessage(){
//         return this.message
//     }
//     set SetMeaasge(NewMessage){
//         this.message=NewMessage
//     }
// }

// let M1=new PrintMessage();
// console.log("your message is: ",PrintMessage.GetMessage)
// console.log(M1.SetMeaasge="Good Morning")

class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith
const person = {
    fullName: "Bill Gates",
    company: "Microsoft"
}

function greetings(greet, role, word){
    console.log(`Hi the ${role} Mr. ${this.fullName} ${greet} ${word}`);
}

const newFunction = greetings.bind(person);
newFunction("Good Morning", "CEO", "You are Great");
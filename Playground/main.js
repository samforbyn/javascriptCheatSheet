let thisBtn = document.getElementById("clickMe");
let homepage = document.querySelector('body');
let userForm = document.getElementById('userForm');

const thisFunction = (e) => {
    e.preventDefault();
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    homepage.setAttribute('style', `background-color: ${randomColor};`);
}

function formFunc (e){
    e.preventDefault();
    let name = document.getElementById('uName');
    let email = document.getElementById('uEmail');
    let pass = document.getElementById('uPass');

    const thisUser = {
        user: `${name.value}`,
        email: `${email.value}`,
        pass: `${pass.value}`
    }
    
    localStorage.setItem('current_user', thisUser.user)
    localStorage.setItem('current_user_email', thisUser.email)
    localStorage.setItem('current_user_pass', thisUser.pass)
    
    let infoField = document.getElementById('userInfo');
    
    infoField.innerText = `Hello, ${name.value}! You registered with an email address of ${email.value} and a password of ${pass.value}`;
}

userForm.addEventListener("submit", formFunc);
thisBtn.addEventListener("click", thisFunction);

const registerCheck = () => {

    existingUser = localStorage.getItem('current_user');
    existingUserEmail = localStorage.getItem('current_user_email');
    existingUserPass = localStorage.getItem('current_user_pass');

    if(existingUser){
        let infoField = document.getElementById('userInfo');
    
        infoField.innerText = `Hello, ${existingUser}! You registered with an email address of ${existingUserEmail} and a password of ${existingUserPass}`;
    }
}
registerCheck()
// book stuff object orient practice

// object literal

// const book1 = {
//     title: "Book One",
//     author: "John Doe",
//     year: "2013",
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// };

// console.log(book1.title);
// console.log(book1.getSummary());

// console.log(Object.keys(book1));
// console.log(Object.values(book1));

// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = () =>{
    return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

// Instantiate object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book One", "Jane Doe", "2016");

// how to use sleep() in JS
// takes in ms, milliseconds, to ultimately give to setTimeout(), it (sleep function) returns an instantiation of Promise, which is
// a proxy for a value not necessarily known and is always in one of these states: pending, fulfilled, or rejected
// const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bookWait(){
    console.log("starting bookWait")
    if(book1){
        console.log("book1 exists!")
        await sleep(5000)
        console.log(book1.getSummary());
        if(book2){
            console.log("book2 exists!")
            await sleep(5000);
            console.log(book2.getSummary());
            // uncomment to demonstrate recursion, and how quickly the node v8 engine works!
            // bookWait()
            console.log("Done!")
        }
    }
};
bookWait()
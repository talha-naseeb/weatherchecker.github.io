// const socket = io('http://localhost:3000');
const socket = io.connect('http://localhost:3000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp"');
const messagecontainer = document.querySelector('.container')


const append = (message, postion)=>{
    const messageEelment = document.createElement('div');
    messageEelment.innerText = message;
    messageEelment.classList.add ('message');
    messageEelment.classList.add(postion);
    messagecontainer.append(messageEelment);

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const meassage = messageinput.value;
    append(`you: ${message}`)
})  

const names = prompt("Enter your name to join");
socket.emit("new-user-joined",names);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`,'right')
})

// socket.on('receive', data=>{
//     append(`${data.message}:${data. user} `,'left')
// })

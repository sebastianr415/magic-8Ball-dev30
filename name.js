var userName = 'sebastian'
var userQuestion = 'will i get a job in tech'
var randomNumber = Math.floor(Math.random()* 7)
var eightBall = ''

userName ? `Hello, ${userName}!` : "Hello"
console.log(`${userName} asked ${userQuestion}`)

if(randomNumber === 0){
    eightBall = "it is certain"
}else if (randomNumber === 1){
    eightBall = "it is decidedly so"
}else if (randomNumber ===2){
    eightBall = 'reply hazy try again'
}else if (randomNumber === 3){
    eightBall = 'Cannot predict now'
}else if(randomNumber === 4){
    eightBall = 'Do not count on it'
}else if(randomNumber === 5){
    eightBall = 'My sources say no'
}else if (randomNumber === 6){
    eightBall = 'Outlook not so good'
}else if (randomNumber === 7){
    eightBall = 'Signs point yes'
} else ('try again')

console.log(`${randomNumber} ${eightBall}`)

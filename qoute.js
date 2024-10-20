let Quotes =[
    {
        text:`"Genius is one percent inspiration and ninety-nine percent perspiration."`,
        author:"Thoms Edison",
    },
    {
        text:`"You can observe a lot just by watching."`,
        author:"Yogi Berra",
    },
    {
        text:`"A house divided against itself cannot stand."`,
        author:"Abraham Lincoln",
    },
    {
        text:`"Difficulties increase the nearer we get to the goal."`,
        author:"Johann wolfgang von Goethe",
    },
    {
        text:`"Fate is in your hands and no one elses."`,
        author:"Byron pulsifer",
    },
    {
        text:`"Be the chief but never the lord."`,
        author:"Lao Tzu",
    },
    {
        text:`"Nothing happens unless first we dream."`,
        author:"Carl Sandburg",
    },
];

let btn = document.getElementById("btn")
let output = document.getElementById("output")
let title = document.getElementById("title") 

btn.addEventListener('click',function(){
    let randomQuote = Quotes[Math.floor(Math.random()*Quotes.length)]
    output.innerHTML = randomQuote.text
    title.innerHTML = randomQuote.author
})
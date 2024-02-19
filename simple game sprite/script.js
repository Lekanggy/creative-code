let playerState = "idle"

const dropDown = document.getElementById("animations")

dropDown.addEventListener("change", (e)=>{
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png" ;

//Get the width and height of the one sprite from the sprite sheet image ( 6876px by 5230px)
// A width  6876 / no of columns 12
// An height 5230 / no row 10
const spriteWidth = 575;
const spriteHeight= 523;

//Declare frame to circle through the image
// let frameX = 0;
// let frameY = 0;

let gameFrame = 0;
const staggeredFrame = 10
const spriteAnimations = []
const animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "fall",
        frames: 7
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 7
    },
    {
        name: "getHit",
        frames: 4
    },
    
]

animationStates.forEach((state, index)=>{
    let frames = {
        loc: []
    }

    //Build the frames
    for(let j = 0; j< state.frames; j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }

    spriteAnimations[state.name] = frames
})

console.log("sp", spriteAnimations)


function animate(){
    ctx.clearRect(0, 0 , CANVAS_WIDTH, CANVAS_HEIGHT)
    //ctx.fillRect(50, 100, 100, 100)
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) 
    //d-destination in canvas, s-size of the image to be show at once

    //Let use a little bit of math logic here, set how fast the object move and change position
    let position = Math.floor(gameFrame/staggeredFrame) % spriteAnimations[playerState].loc.length
    let frameX = position * spriteWidth
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, 
    spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if(gameFrame % staggeredFrame === 0){
    //     if(frameX < 6) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
   
    requestAnimationFrame(animate)
}

animate()

// const spriteAnimations = [
//     "idle" = {
//         loc:[
//             {x: 0, y: 0},
//             {x: 575, y: 0},
//             {x: 1150, y: 0},
//             {x: 1725, y: 0},
//             {x: 2300, y: 0},
//             {x: 2875, y: 0},
//             {x: 3450, y: 0},
//         ]
//     }
// ]
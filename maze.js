const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let mapDivs = []
const s = document.getElementById('maze')
const displayBlock = function (blockChar, rowDiv) {
    let blockDiv = document.createElement('div')
    let counter = 0
    blockDiv.classList.add("block")
    if (blockChar === "W") {
        blockDiv.classList.add("wall")
        // blockDiv.innerText = ""
    } else if (blockChar === " ") {
        blockDiv.classList.add('floor')
    } else if (blockChar === "S") {
        blockDiv.classList.add('start')
    } else if (blockChar === "F") {
        blockDiv.classList.add('finish')
    }
    mapDivs.push(blockDiv)
    rowDiv.appendChild(blockDiv)
}

const displayRow = function(rowStr, index) {
    const maze = document.getElementById('maze')
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    maze.appendChild(rowDiv)
    for (let colNum = 0; colNum < rowStr.length; colNum++) {
        displayBlock(rowStr.charAt(colNum), rowDiv)
    }
}

map.forEach(displayRow)

let startDiv = document.getElementsByClassName('start')
let playerDiv = document.createElement('div')
playerDiv.classList.add('player')
startDiv[0].appendChild(playerDiv)



let playerRow = 9
let playerBlock = 0
let playerPos = map[playerRow][playerBlock]


const movePlayer = function(event) {
    switch (event.key) {
        case "w":
            if (0 < playerRow < 14) {
                console.log('still on map')
                if (map[playerRow-1][playerBlock]==' ') {
                    console.log("move up one")
                    playerRow-=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)

                }
            }
            break;
        case 's':
            if (0 < playerRow < 14) {
                console.log('still on map')
                if (map[playerRow+1][playerBlock]==' ') {
                    console.log("move down one")
                    playerRow+=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)

                }
            }
            break;
        case 'd':
            if (0<playerBlock<22) {
                console.log('still on map')
                if (map[playerRow][playerBlock+1]==' ') {
                    playerBlock+=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)
                } else if (map[playerRow][playerBlock+1]=='F') {
                    playerBlock+=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)
                    let winner = document.createElement('div')
                    winner.classList.add('winner', 'slideUp')
                    winner.innerText = 'You Win!'
                    maze.appendChild(winner)

                }
            }
            break;
        case 'a':
            if (0<playerBlock<21) {
                console.log('still on map')
                if (map[playerRow][playerBlock-1]==" ") {
                    playerBlock-=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)
                } else if (map[playerRow][playerBlock-1]=="S") {
                    playerBlock-=1
                    let newDiv = document.getElementById("map["+playerRow+"]["+playerBlock+"]")
                    newDiv.appendChild(playerDiv)
                }
            }
            break;
    }

}


document.addEventListener('keydown', movePlayer);

// function move(event) {
//     if (event.key === "ArrowDown") {
//         boxTop += 32
//     } else if (event.key === "ArrowUp") {
//         boxTop -= 32
//     } else if (event.key === "ArrowRight") {
//         boxLeft += 32
//     } else if (event.key === "ArrowLeft") {
//         boxLeft -= 32
//     }
//     document.getElementById('box').style.top = boxTop + 'px'
//     document.getElementById('box').style.left = boxLeft + 'px'
// }



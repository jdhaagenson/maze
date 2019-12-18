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
  var cell;
  var maze = document.getElementById("maze");

  var rowMaze;
  var player =  document.getElementById("player");

  var currX;
  var currY;
  var pointOne = 8;

  var pointTwo = 8;
  var winGame=false;
 buildMaze();

  movePlayer = function (event) {
       pointOne=8;
       pointTwo=8;
       console.log(currX,currY);

       switch (event.key){
            case "ArrowUp":
                  if (currX>0 && currX<14){

                        if  (map[currX-1][currY]==" ") {

                           currX=currX-1;
                        }

                        else if (map[currX-1][currY]=="F"){

                            winGame=true
                        }
                    }

                    break;
            case "ArrowDown":
                    if (currX>0 && currX<14) {
                      if (map[currX+1][currY]==" "){
                        currX=currX+1;
                      }
                      else if (map[currX+1][currY]=="F"){
                          winGame=true
                      }
                    }
                    break;

            case "ArrowRight":
                    if (currY>=0 && currY<21){
                     if (map[currX][currY+1]==" ") {
                      currY=currY+1;
                    }
                    else if (map[currX][currY+1]=="F"){
                      winGame=true
                      }
                    }
                    break;

            case "ArrowLeft":
                    if (currY>0 && currY<21) {
                     if ((map[currX][currY-1]==" ")||(map[currX][currY-1]=="S")){
                        currY=currY-1;
                     }
                     else if (map[currX][currY-1]=="F"){
                      winGame=true
                     }
                    }
                    break;

        }
        pointOne+=currX*20;
        pointTwo+=currY*20;
        player.style.top = pointOne+"px";
        player.style.left = pointTwo+"px";

        if (winGame){
document.write('Winner!')

        }

  }

  function buildMaze() {
    player.setAttribute("class","player");
let startCellId;

    for (let i=0;i < map.length;i++){
        rowMaze = document.createElement("div");
        rowMaze.setAttribute("class","row");
        let row = map[i];
        console.log("map" + i +":" + row,row.length);
        for (let j = 0;j < row.length; j++){
            let cell = document.createElement("div");
            if (row[j] == 'W'){
            cell.setAttribute("class","cellW");
            }
            else if (row[j]=='S'){
                pointOne += i*20;
                pointTwo += j*20;
                currX = i;

                currY = j;
                startCellId="cell"+i+j;


                cell.setAttribute("class","cellS");

            }
            else{
                cell.setAttribute("class","cellE");

                cell.textContent=row[j];
            }
            rowMaze.appendChild(cell);

        }
    maze.appendChild(rowMaze);

    }
    player.style.top = pointOne+"px";

    player.style.left = pointTwo+"px";

  }
  document.addEventListener("keydown",movePlayer);

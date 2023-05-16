var lifebox = document.getElementById("life")
var imgbox = document.getElementById("imgbox")
var winbox = document.getElementById("winbox")
var wl = document.getElementById("wl")
var life = 0
start()

function start() {
    var clicked = true
    imgbox.innerText = ""
    winbox.innerText = ""
    wl.innerText = ""
    fetch("kronEllerMynt.json")
        .then(response => response.json())
        .then((list => {
            lifebox.innerText = life
            var array = [list[0].images.kron, list[0].images.mynt]
            var wordarray = ["kron", "mynt"]
            for (let i = 0; i < 2; i++) {
                var km = document.createElement("img")
                km.setAttribute("id", wordarray[i])
                km.setAttribute("src", array[i])
                imgbox.appendChild(km)
                km.onclick = function name() {
                    if (clicked) {
                        win(this.id)
                    }
                    clicked = false
                }
            }
            function win(btnid) {
                var randomnum = Math.floor(Math.random() * 2)
                var random = array[randomnum]
                var randomword = wordarray[randomnum]
                var winkm = document.createElement("img")

                winkm.setAttribute("src", random)

                winbox.appendChild(winkm)

                if (btnid == randomword) {
                    life++
                    wl.innerText = "YOU WON!"
                } else {
                    wl.innerText = "YOU LOST!"
                    life--
                }
                lifebox.innerText = life
            }
        }))
}
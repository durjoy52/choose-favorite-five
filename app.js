const players = []
function addToCart(element){
    const player = element.parentNode.children[0].innerText
    players.push(player)
    const li =document.createElement('li')
    const playerList =document.getElementById('player-list')
    for(let player of players){
    li.innerText = player
    console.log(players)
}
if(players.length <= 5){
    playerList.appendChild(li)
}else{
    alert('You cannot select more than 5 players')
}
const cardButton = element.parentNode.children[2]
cardButton.setAttribute("disabled","disabled")
}

function calculate(){
    const perPlayerText = document.getElementById('perPlayer').value
    const perPlayer = parseFloat(perPlayerText)

   const playerExpenses = document.getElementById('playerExpenses')
   playerExpenses.innerText = perPlayer * players.length
}

function calculateTotal(){
    const playerExpenses = document.getElementById('playerExpenses').innerText
    const manager = document.getElementById('manager').value
    const coach = document.getElementById('coach').value
    const total = document.getElementById('total')
    total.innerText = parseFloat(manager) + parseFloat(coach) + parseFloat(playerExpenses)
}
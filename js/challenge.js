const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const list = document.querySelector('div.comments')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const likes = document.querySelector('ul.likes')
const buttons = document.querySelectorAll('button')

let currentCount = 0
let paused = false
let likeCount = {}

setInterval(function(){
    if(!paused){
        currentCount++
        counter.innerHTML = currentCount
    }
}, 1000)

plus.addEventListener('click', function(){
    currentCount++
    counter.innerHTML = currentCount
})

minus.addEventListener('click', function(){
    currentCount--
    counter.innerHTML = currentCount
})

pause.addEventListener('click', function(){
    paused == false ? paused = true : paused = false
    if(paused){
        buttons.forEach(function(button){
            button.setAttribute("disabled", "disabled")
        })
        pause.removeAttribute("disabled")
        pause.innerText = 'resume'
    } else {
        buttons.forEach(function(button){
            button.removeAttribute("disabled")
        })
        pause.innerText = 'pause'
    }
})

heart.addEventListener('click', function(){
    likes.innerHTML = ''
    likeCount[currentCount] = (likeCount[currentCount] + 1) || 1
    for(k in likeCount){
        likes.innerHTML += `<li>${k} has ${likeCount[k]} like${likeCount[k] > 1 ? 's' : ''}</li>`
    }
})

commentForm.addEventListener('submit', function(a){
    a.preventDefault()
    list.innerHTML += `<p>${commentInput.value}</p>`
    commentInput.value = ''
})
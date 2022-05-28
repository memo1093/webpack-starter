import generateJoke from './js/generateJoke'
import './styles/main.scss'
import amogus from './assets/amogus.png'

const amogusImg =document.getElementById("amogusImg")
amogusImg.src = amogus

const jokeButton = document.getElementById("jokebutton")
jokeButton.addEventListener('click',generateJoke)



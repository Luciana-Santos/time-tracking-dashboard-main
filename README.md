# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/frontend-mentor-time-tracking-dashboard-Wdl54YgH6)
- [Live Site URL](https://luciana-santos.github.io/time-tracking-dashboard-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
```js
fetch('./data.json')
  .then(r => r.json())
  .then(jsonDados => {
    jsonDados.forEach(dado => {
      // adc os cards novos logo após o card perfil
      main.insertAdjacentHTML('beforeend', criarCard(dado, time))
    })

    jsonDados.forEach(dado => {
      dados[dado.title] = dado.timeframes
    })

    cards = document.querySelectorAll('.card')
  })
```


## Author

- Website - [Luciana Santos](https://linktr.ee/Lucianadss)
- Frontend Mentor - [@Luciana-Santos](https://www.frontendmentor.io/profile/Luciana-Santos)

<link href="assets/readme/styles.css" rel="stylesheet"/>

<div class="foo"> 
  <img src="assets/readme/favicon.png" />

## Podcastr

</div>

<div class="foo"> 
  <img id="nlw" src="assets/readme/podcastr.png"  />
</div>

<div class="badges-container" >
    <a href="https://www.typescriptlang.org/" target="_blank"  rel="noopener noreferrer" >
      <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555">
    </a>
    <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank"  rel="noopener noreferrer">
      <img src="https://badges.aleen42.com/src/react.svg">
    </a>
    <a href="https://code.visualstudio.com/" target="_blank"  rel="noopener noreferrer">
      <img src="https://badges.aleen42.com/src/visual_studio_code.svg">
    </a>
    <a href="https://sass-lang.com/" target="_blank"  rel="noopener noreferrer">
      <img src="https://img.shields.io/badge/%23%20-sass-%23ff69b4?style=flat&logo=sass">
    </a>
    <a href="https://nextjs.org/" target="_blank"  rel="noopener noreferrer">
      <img src="https://img.shields.io/badge/%23-nextjs-%23fff?style=flat&logo=vercel">
    </a>
</div>

<div class="summary-container">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#upgrades">Upgrades</a>
</div>

# About


The **Podcaster** is the Best place to listen your favorites podcasts :D

Application made based to NLW#5 intensival online event provides by  [Rocketseat](https://rocketseat.com.br/) 🚀


<img src="assets/readme/desktop-podcastr.gif" />



# Technologies

#### 📃 Dependencies: -> <i><kbd> [package.json](./package.json) </kbd></i>

- [x] <b>[Next JS](https://nextjs.org/):</b> <i>To best way for create SSG or SSR pages</i>
- [x] <b>[Typescript](https://www.typescriptlang.org/):</b> <i>is written in TypeScript</i>
- [x] <b>[Axios](https://github.com/axios/axios):</b> <i>Best lib to work with Promise based HTTP client </i>
- [x] <b>[Date-fns](https://date-fns.org/):</b> <i>Best lib utility to use Date</i>
- [x] <b>[RC-Slider](https://www.npmjs.com/package/rc-slider):</b> <i>To made track slider </i>
- [x] <b>[SASS](https://sass-lang.com/):</b> <i>for better CSS perfomance</i>
- [x] <b>[JSON Server](https://github.com/typicode/json-server):</b> <i>Fake server API consume</i>

#### 📝Custom: ->

Script for execute JSON Server with lazy load:

```json
"server": "json-server src/service/server.json -w -d 750 -p 3333"
```

# Getting Started

Must to have installed:

1. **Node.js**. <i>[Here](https://nodejs.org/en/)</i>
2. **GIT**. <i>[Here](https://git-scm.com)</i>

After checked, go to:

```bash
  $ git clone https://github.com/gamadv/podcastr.git
  cd podcastr
```

```bash
  $ npm install

  # or

  $ yarn
```

```bash
  #Starting server

  $ yarn dev

  #on another terminal

  $ yarn server -> to start JSON Server 
```
* **SSG or SSR feature only can be tested after building prject:**

## Building app
```bash
  #Creating build

  $ yarn build

  #testing

  $ yarn start
```

# Upgrades:
Some features are pendents to do, like:
- [ ]  Responsive Layout
- [ ]  PWA -> [Example using Next JS](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app)
- [ ]  Dark theme -> [Dark Mode Switcher Using CSS Variables in LESS, SASS, or Vanilla CSS](https://medium.com/swlh/dark-mode-using-css-variables-cf065a7fa133)
- [ ]  Desktop app using -> [Electron](https://www.electronjs.org/)


<footer id="footer-container"> 
<h6>💙 Made by</h6> 

<a  href="https://www.linkedin.com/in/gama-leal" />  Moacir Gama
<img src="https://image.flaticon.com/icons/png/512/174/174857.png" width=20>
 </a>
</footer>

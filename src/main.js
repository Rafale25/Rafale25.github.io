import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { router } from "./router.js";

document.querySelector('#app').innerHTML = `
<body>
  Hello
</body>
<div id="app"/>
`

router()

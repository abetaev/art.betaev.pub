import { render } from 'solid-js/web'
import './main.css'
import Gallery from './Gallery'

window.onkeydown = (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault()
    // e.stopPropagation();
    document.getSelection()
  }
}

render(Gallery, document.body)

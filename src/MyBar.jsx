import React from 'react'
import './MyBar.css'

function MyBar() {
  return (
<ul>
  <li><a className='active' href="/">My App</a></li>
  <li><a href="/">Home Page</a></li>
  <li><a href="/">About</a></li>
</ul>
  )
}

export default MyBar
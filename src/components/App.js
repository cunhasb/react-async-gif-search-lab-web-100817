import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import GifList from '../components/GifList'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
      <GifListContainer/>
      <GifList/>
    </div>
  )
}

export default App

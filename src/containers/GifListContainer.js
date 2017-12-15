import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      gifList: []
    }
  }
buildState=gifList=>{
  // console.log(gifList.data)
 let list = gifList.data.slice(0, 3)
 // console.log(list)
  this.setState({gifList:list})
}

componentDidMount(){
  fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC").
  then(res => res.json()).
  then(gifList =>this.buildState(gifList))
}

render(){
  const gif = this.state.gifList.map(gif => {
      return (<li key={gif.id}>{<img key={gif.id} alt={gif.type} src={gif.images.original.url} width= '300'/>}</li>)
      // <img key={gif.id} alt={gif.type} src={gif.url}/>
    })

  // console.log(this.state.gifList[0][1])
  return(
    <div>
      <GifList gif={gif} />
    </div>
  )
}
}

export default GifListContainer;

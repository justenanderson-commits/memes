import './Main.scss'

const Main = ({ memesArray }) => {
  let index = Math.floor(Math.random(25) * 10)

  return ( 
    <div className="main">
      <h4>{ memesArray[index].data.title }</h4>
      <img src={ memesArray[index].data.url_overridden_by_dest } className="meme-img" alt-text="Randomly meme image" /> 
    </div>
   )
}
 
export default Main;

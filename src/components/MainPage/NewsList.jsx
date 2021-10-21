import style from './MainPage.module.css'
import News from './News.jsx'
import {useState, useEffect} from 'react'

const NewsList = ({ newsList }) => {
  
  const [increment, setIncrement] = useState(1)
  const [actualNewsList, setActualNewsList] = useState([])

  const updateActualNewsList = (list, inc) => {
    setIncrement(inc)
    let arr = []
    arr.push(list.articles[inc-1])
    arr.push(list.articles[inc])
    arr.push(list.articles[inc+1])

    setActualNewsList(arr)
  }

  useEffect(() => updateActualNewsList(newsList, increment), [])
  

  return ( 
    <div className={style.newsList}>
      {increment > 1 && <button className={style.newsButton} onClick={() => updateActualNewsList(newsList, increment-1)}>Previos</button>}
      {actualNewsList.map(news => (
        <News news={news} newsImg={news.urlToImage} newsText={news.title} key={news.id}/>
      ))}
      {increment < 18 && <button className={style.newsButton} onClick={() => updateActualNewsList(newsList, increment+1)}>Next</button>}
    </div>
   );
}
 
export default NewsList;
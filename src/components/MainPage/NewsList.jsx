import style from './MainPage.module.css'
import News from './News.jsx'

const NewsList = ({ newsList }) => {

  return ( 
    <div className={style.newsList}>
      {newsList.articles.map(news => (
        <News news={news} newsImg={news.urlToImage} newsText={news.title} key={news.id}/>
      ))}
    </div>
   );
}
 
export default NewsList;
import style from './MainPage.module.css'

const NewsList = ({ newsList }) => {

  return ( 
    <div className={style.newsList}>
      {newsList.articles.map(news => (
        <div className={style.news} key={news.id} >
         {console.log(news)}
        </div>
      ))}
    </div>
   );
}
 
export default NewsList;
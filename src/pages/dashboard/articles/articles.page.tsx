import { Link } from "react-router-dom";
import { articlesEntitiesSelector } from "../../../redux/features/articles/articles.slice";
import { useAppSelector } from "../../../redux/hooks/hooks";
import NotFoundPage from "../../not-found/not-found.page";
import styles from "./articles.module.css";
import ArticlePaginationComponent from "./components/article-pagination/article-pagination.component";
import { ArticleInterface } from "../../../types";

const ArticlesPage: React.FC = (): JSX.Element => {
  const articlesEntities : ArticleInterface[] = useAppSelector<ArticleInterface[]>(articlesEntitiesSelector);

  const showArticlesPreviewItems = () => {
    return (
      <div className={styles.articlesContainer}>
        {articlesEntities.map((article) => (
          <div className={styles.articlePreviewItem} key={article.id}>
            <div className={styles.articleImageContainer}>
              <img
                src={article.image}
                alt=""
              />
            </div>
            <div className={styles.articleContentContainer}>
              <h4>{new Date().toISOString()}</h4>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <Link to={article.id.toString()}>Читать дальше</Link>
            </div>
          </div>
        ))}
        <ArticlePaginationComponent />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {articlesEntities.length > 0 ? showArticlesPreviewItems() : <NotFoundPage />}
    </div>
  );
};

export default ArticlesPage;

import styles from "./article-item.module.css";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { articleByIdSelector } from "../../../../../redux/features/articles/articles.slice";
import { ArticleInterface } from "../../../../../types";
import { useParams } from "react-router-dom";

const ArticleItemComponent: React.FC = (): JSX.Element => {
  const { id } = useParams<string>();

  const { title, text, image, description } = useAppSelector<ArticleInterface>(
    (state) =>
      //! Fix me id!
      articleByIdSelector(state, parseInt(id!))
  );

  return (
    <div className={styles.container}>
      <img src={image} alt="There is no" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.content}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default ArticleItemComponent;

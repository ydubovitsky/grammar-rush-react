import styles from "./article-pagination.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../redux/hooks/hooks";
import { getPage } from "../../../../../redux/features/articles/articles.slice";

const ArticlePaginationComponent: React.FC = (): JSX.Element => {
  const dispath = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect((): void => {
    dispath(getPage(currentPage));
  }, [currentPage]);

  const nextPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = (): void => {
    if (currentPage <= 0) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBlock} onClick={prevPage}>
        Назад
      </div>
      <div className={styles.navBlock}>{currentPage}</div>
      <div className={styles.navBlock} onClick={nextPage}>
        Вперед
      </div>
    </div>
  );
};

export default ArticlePaginationComponent;

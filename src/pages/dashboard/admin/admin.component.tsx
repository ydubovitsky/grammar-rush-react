import React, { useState } from "react";
import styles from "./admin.module.css";
import { FileUploader } from "react-drag-drop-files";

//! TODO Дописать логику загрузки файлов
const AdminComponent: React.FC = (): JSX.Element => {
  const [file, setFile] = useState(null);

  const handleChange = (file : any) => {
    setFile(file);
  };

  const fileTypes = ["JPG", "PNG", "GIF"];

  return (
    <div className={styles.container}>
      <label htmlFor="file">Загрузите главное изображение статьи</label>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

      <label htmlFor="title">Введите название статьи</label>
      <input type="text" name="title"/>

      <label htmlFor="description">Введите описание статьи</label>
      <input type="text" name="description"/>

      <label htmlFor="text">Введите основной текст статьи</label>
      <textarea name="text"></textarea>
    </div>
  );
};

export default AdminComponent;

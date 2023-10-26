import styles from "./email-icon.module.css";
import data from "../../../assets/data/data.json";

type EmailIconAtomicComponentProps = {
  color?: string;
  size?: number | string;
};

const EmailIconAtomicComponent: React.FC<EmailIconAtomicComponentProps> = ({ color, size }): JSX.Element => {
  const { developerEmail } = data["social-media-links"];

  return (
    <div className={styles.container}>
      <a href={developerEmail} target="_blank" rel="noreferrer">
        <i
          className="far fa-envelope-open"
          style={{ color: color, fontSize: size }}
        ></i>
      </a>
    </div>
  );
};

export default EmailIconAtomicComponent;

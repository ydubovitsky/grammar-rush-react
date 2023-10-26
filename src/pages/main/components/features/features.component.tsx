import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import styles from "./features.module.css";
import FeatureSvg from "./svg/features.svg";
import { Fade } from "react-awesome-reveal";
interface FeaturePropsInterface {
  icon: string;
  title: string;
  text: string;
}

const featuresData: FeaturePropsInterface[] = [
  {
    icon: "fas fa-arrow-right",
    title: "Простая и понятная теория",
    text: "Никакой бездумного заучивания правил, с нашим подходом вы раз и навсегда поймете английскую грамматику",
  },
  {
    icon: "fas fa-meteor",
    title: "Уникальное мобильное приложение",
    text: "Онлайн-тренажер по грамматике английского языка Yeap! English — это бесконечные упражнения, позволяющие оттачить ваши навыки до автоматизма",
  },
  {
    icon: "fas fa-feather-alt",
    title: "Современный дизайн",
    text: "Красивый, минималистичный и функциональный дизайн приложения позволит вам сосредоточиться исключительно на учебе и не будет перегружать вас избытком ненужной информации",
  },
  {
    icon: "far fa-lightbulb",
    title: "Обновления и поддержка",
    text: "Команда разработчиков открыта предложений от пользователей, мы постоянно работаем на улучшением нашего продукта",
  },
];

const FeaturesComponent: React.FC = (): JSX.Element => {
  const showFeatureEl = (array: FeaturePropsInterface[]): JSX.Element[] => {
    return array.map((data, idx) => {
      return (
        <div key={idx} className={styles.feature}>
          <div className={styles.featureHeader}>
            <i className={data.icon}></i>
            <h3>{data.title}</h3>
          </div>
          <p>{data.text}</p>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent name="Основные особенности нашего подхода к изучению языка" />
        <div className={styles.featuresContainer}>
          <img src={FeatureSvg} alt="Your SVG" />
          <div className={styles.featuresPoints}>
            {showFeatureEl(featuresData)}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FeaturesComponent;

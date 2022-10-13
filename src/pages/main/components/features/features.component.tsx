import SectionTitleComponent from '../../../../common/atomic-components/section-title/section-title.component';
import ButtonComponent from '../../../../common/components/button/button.component';
import styles from './features.module.css';

interface FeaturePropsInterface {
  icon: string,
  title: string,
  text: string
}

const featuresData: FeaturePropsInterface[] = [
  {
    icon: "fas fa-meteor",
    title: "Quick Boostup",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi consequatur eligendi quaerat maxime quasi similique beatae accusamus ad? Facilis asperiores nisi, ullam iure laudantium eos dignissimos necessitatibus architecto natus!",
  },
  {
    icon: "fas fa-feather-alt",
    title: "Modern Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi consequatur eligendi quaerat maxime quasi similique beatae accusamus ad? Facilis asperiores nisi, ullam iure laudantium eos dignissimos necessitatibus architecto natus!",
  },
  {
    icon: "far fa-lightbulb",
    title: "High Resolution",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi consequatur eligendi quaerat maxime quasi similique beatae accusamus ad? Facilis asperiores nisi, ullam iure laudantium eos dignissimos necessitatibus architecto natus!",
  }
];

const FeaturesComponent: React.FC = () => {

  const showFeatureEl = (array: FeaturePropsInterface[]): JSX.Element[] => {
    return array.map((data) => {
      return (
        <div className={styles.feature}>
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
      <SectionTitleComponent
        name="Amazing Features To Use
        Our Application"
      />
      <div className={styles.featuresContainer}>
        {showFeatureEl(featuresData)}
      </div>
      <ButtonComponent name="Start now" />
    </div>
  );
}

export default FeaturesComponent;
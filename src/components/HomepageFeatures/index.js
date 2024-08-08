import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Openness and Boundaries',
    Svg: require('@site/static/img/start.svg').default,
    description: (
      <>
        HTML's simplicity and power revolutionized the way information is shared and accessed globally, forever changing the landscape of the internet.</>
    ),
  },
  {
    title: 'Beauty and Design',
    Svg: require('@site/static/img/middle.svg').default,
    description: (
      <>
        CSS adds style and visual appeal to HTML, transforming static web pages into dynamic and visually stunning masterpieces </>
    ),
  },
  {
    title: 'Interactivity and Behavior',
    Svg: require('@site/static/img/end.svg').default,
    description: (
      <>
        JavaScript brings interactivity and dynamic behavior to web pages, enabling developers to create fast, responsive, and highly engaging user experiences. </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil uso',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        El Blog y Manuales estan estructurados de tal manera que sea facil acceder a ellos.
      </>
    ),
  },
  {
    title: 'Concentrese en lo que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        En esta web eliminamos cualquier distraccion e Informacion irrelevante para que el lector solo se centre en lo que realmente importa.
      </>
    ),
  },
  {
    title: 'Por Estudiantes para Estudiantes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Toda la Informacion esta estrucutrada, segmentada y desarrollada por Estudiantes, para el uso de los propios estudiantes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

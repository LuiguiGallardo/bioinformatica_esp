import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        <img src='img/unisabana_logo.png'/>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/bash/intro">
            Tutorial de Bash
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/qiime2/intro">
            Tutorial de QIIME 2
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/evaluacion/">
            Evaluación
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Microbiomics Lab, UNAM">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

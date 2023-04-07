import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageWhatYouGet from '@site/src/components/HomepageWhatYouGet';
import HomepageCommunity from '@site/src/components/HomepageCommunity';
import HomepageFAQ from '@site/src/components/HomepageFAQ';
import HomepageFastkafkaChat from '@site/src/components/HomepageFastkafkaChat';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>Effortless Kafka integration for web services</h1>
        <p className={styles.description}>Open-source framework for building asynchronous web services </p>
        <p className={styles.description}>that interact with Kafka</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
              Get Started
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
      title="Effortless Kafka integration for web services"
      description="Effortless Kafka integration for web services">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageFastkafkaChat />
        <HomepageWhatYouGet />
        <HomepageCommunity />
        <HomepageFAQ />
      </main>
    </Layout>
  );
}

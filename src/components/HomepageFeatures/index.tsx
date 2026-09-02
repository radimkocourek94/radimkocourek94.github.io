import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Technical writing',
    to: '/docs/samples',
    description: (
      <>
        Quickstarts, how-to guides, API references, and troubleshooting. A
        complete mini documentation set for a fictional SaaS product, written
        as a living sample of the craft.
      </>
    ),
  },
  {
    title: 'Content design',
    to: '/docs/case-studies/ui-copy-rewrites',
    description: (
      <>
        UI copy, terminology, and voice &amp; tone for complex workflows.
        Shown as before/after rewrites with the reasoning attached.
      </>
    ),
  },
  {
    title: 'Docs infrastructure',
    to: '/docs/case-studies/review-loop-infrastructure',
    description: (
      <>
        CI/CD preview pipelines, review tooling, and AI-assisted workflows
        that compress feedback loops and scale contributor workflows.
      </>
    ),
  },
];

function Feature({title, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span className={styles.cardLink}>Explore →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

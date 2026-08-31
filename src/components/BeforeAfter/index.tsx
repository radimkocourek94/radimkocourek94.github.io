import type {ReactNode} from 'react';
import styles from './styles.module.css';

type BeforeAfterProps = {
  before: ReactNode;
  after: ReactNode;
  rationale?: ReactNode;
};

/**
 * Side-by-side comparison of writing samples. The content-design
 * showcase: shows not just the result, but how it differs and why.
 *
 * Usage in MDX:
 *   <BeforeAfter before={<>...</>} after={<>...</>} rationale={<>...</>} />
 */
export default function BeforeAfter({
  before,
  after,
  rationale,
}: BeforeAfterProps) {
  return (
    <figure className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.panel}>
          <div className={styles.labelBefore}>Before</div>
          <div className={styles.content}>{before}</div>
        </div>
        <div className={styles.panel}>
          <div className={styles.labelAfter}>After</div>
          <div className={styles.content}>{after}</div>
        </div>
      </div>
      {rationale && (
        <figcaption className={styles.rationale}>{rationale}</figcaption>
      )}
    </figure>
  );
}

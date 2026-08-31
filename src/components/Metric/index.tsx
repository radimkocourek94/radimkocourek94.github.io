import styles from './styles.module.css';

type MetricProps = {
  value: string;
  label: string;
};

/**
 * A single outcome number, e.g. used as a row of <Metric> blocks in the
 * "Result" section of a case study.
 *
 * Usage in MDX:
 *   <div className="metric-row">
 *     <Metric value="days → minutes" label="review feedback loop" />
 *     <Metric value="100%" label="PRs with rendered previews" />
 *   </div>
 */
export default function Metric({value, label}: MetricProps) {
  return (
    <div className={styles.metric}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

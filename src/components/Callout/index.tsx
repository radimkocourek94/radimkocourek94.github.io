import type {ReactNode} from 'react';
import styles from './styles.module.css';

type CalloutProps = {
  type?: 'note' | 'context' | 'decision' | 'warning';
  title?: string;
  children: ReactNode;
};

const DEFAULT_TITLES: Record<string, string> = {
  note: 'Note',
  context: 'Context',
  decision: 'Decision',
  warning: 'Warning',
};

/**
 * Context box for case studies: marks side information, constraints, or
 * decisions that shape the story without interrupting the main flow.
 *
 * Usage in MDX:
 *   <Callout type="decision">We chose pre-merge previews because...</Callout>
 */
export default function Callout({
  type = 'note',
  title,
  children,
}: CalloutProps) {
  return (
    <aside className={`${styles.callout} ${styles[type]}`}>
      <div className={styles.title}>{title ?? DEFAULT_TITLES[type]}</div>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}

import type {ReactNode} from 'react';
import styles from './styles.module.css';

type DiffProps = {
  removed?: ReactNode;
  added?: ReactNode;
};

/**
 * Redline-style inline comparison. Renders removed text in strikethrough
 * and added text as an insertion highlight.
 *
 * Usage in MDX:
 *   The error occurs when <Diff removed="the config file is wrong"
 *   added="the configuration file contains invalid JSON" />.
 */
export default function Diff({removed, added}: DiffProps) {
  return (
    <>
      {removed && <del className={styles.removed}>{removed}</del>}
      {added && <ins className={styles.added}>{added}</ins>}
    </>
  );
}

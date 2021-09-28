import React from 'react';
import { Block } from '../../types/Data';
import styles from './BlockPart.module.scss';

const BlockPart: React.FunctionComponent<Block> = ({ title, description }: Block) => {

  return (
    <div className={styles.BlockPart} data-testid="BlockPart">
      <div className={styles.block}>
        <h4 className={styles.title}>
          {title}
        </h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
};

export default BlockPart;

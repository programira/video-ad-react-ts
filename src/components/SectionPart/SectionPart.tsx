import React from 'react';
import { Block, Section } from '../../types/Data';
import styles from './SectionPart.module.scss';
import BlockPart from '../BlockPart/BlockPart';

const SectionPart: React.FunctionComponent<Section> = ({ title, description, blocks }: Section) => {

  return (
    <div className={styles.SectionPart} data-testid="Section">
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      {
        blocks.map((block: Block) => (
          <BlockPart title={block.title} description={block.description} />
        ))
      }
    </div>
  )
};

export default SectionPart;

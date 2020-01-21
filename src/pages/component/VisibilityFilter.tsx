import React from 'react';
import styles from './component.css';
import { MouseEvent } from 'react';

interface IProps {
  //   onClick(event: MouseEvent<HTMLDivElement>): void;
  handleClick: any;
}

class VisibilityFilter extends React.Component<IProps, {}> {
  render() {
    return (
      <>
        <div className={styles.filter}>
          <span
            onClick={() => {
              this.props.handleClick('all');
            }}
          >
            all
          </span>
          <span
            onClick={() => {
              this.props.handleClick('success');
            }}
          >
            success
          </span>
          <span
            onClick={() => {
              this.props.handleClick('del');
            }}
          >
            del
          </span>
        </div>
      </>
    );
  }
}

export default VisibilityFilter;

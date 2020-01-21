import React from 'react';
import styles from './component.css';
import { MouseEvent } from 'react';

interface myProps {
  data: myState;
  handleClick: any;
}

interface myState {
  todos: Array<list>;
  show: string;
}

interface list {
  text: number;
  del: boolean;
}

class TodoList extends React.Component<myProps, {}> {
  constructor(props: myProps) {
    super(props);
  }
  render() {
    return (
      <>
        <ul className={styles.list_container}>
          {this.props.data.show == 'all'
            ? this.props.data.todos.map((item, index) => {
                return (
                  <li
                    className={styles.list + ' ' + (item.del == true ? styles.del_text : '')}
                    key={index}
                    onClick={() => {
                      this.props.handleClick(index);
                    }}
                  >
                    {item.text}
                  </li>
                );
              })
            : this.props.data.show == 'del'
            ? this.props.data.todos.map((item, index) => {
                if (item.del) {
                  return (
                    <li
                      className={styles.list + ' ' + styles.del_text}
                      key={index}
                      onClick={() => {
                        this.props.handleClick(index);
                      }}
                    >
                      {item.text}
                    </li>
                  );
                }
              })
            : this.props.data.todos.map((item, index) => {
                if (!item.del) {
                  return (
                    <li
                      className={styles.list}
                      key={index}
                      onClick={() => {
                        this.props.handleClick(index);
                      }}
                    >
                      {item.text}
                    </li>
                  );
                }
              })}
        </ul>
      </>
    );
  }
}

export default TodoList;

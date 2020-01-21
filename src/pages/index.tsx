import React from 'react';
import styles from './index.css';
import { Button, Input } from 'antd';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import VisibilityFilter from './component/VisibilityFilter';

interface myState {
  todos: Array<list>;
  show: string;
}

interface list {
  text: number;
  del: boolean;
}

export default class Index extends React.Component<any, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: 'all',
      todos: [
        { text: 111111, del: false },
        { text: 222222, del: true },
      ],
    };
  }
  changeShow = (show: string) => {
    this.setState({
      show: show,
    });
  };
  addList = (list: list) => {
    // console.log(list);
    this.setState({
      todos: [...this.state.todos, list],
    });
  };
  changeDel = (index: number) => {
    this.setState({
      todos: this.state.todos.map((item, i) => {
        if (index == i) {
          return {
            text: item.text,
            del: !item.del,
          };
        } else {
          return item;
        }
      }),
    });
  };
  render() {
    return (
      <div className={styles.normal}>
        <AddTodo add={this.addList} />
        <TodoList data={this.state} handleClick={this.changeDel} />
        <VisibilityFilter handleClick={this.changeShow} />
      </div>
    );
  }
}

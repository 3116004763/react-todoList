import React from 'react';
import styles from './component.css';
import { Button, Input } from 'antd';
import { MouseEvent } from 'react';

interface IProps {
  //   onClick(event: MouseEvent<HTMLDivElement>): void;
  add: any;
}
interface Istate {
  input: string;
}

class AddTodo extends React.Component<IProps, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
    };
  }
  changeValue = (e: any) => {
    this.setState({
      input: e.target.value,
    });
    // console.log(e.target.value);
  };
  render() {
    return (
      <>
        <Input className={styles.content} value={this.state.input} onChange={this.changeValue} />
        <Button
          className={styles.add_btn}
          onClick={() => {
            console.log(this.state.input);
            this.props.add({ text: this.state.input, del: false });
            this.setState({
              input: '',
            });
          }}
        >
          add
        </Button>
      </>
    );
  }
}

export default AddTodo;

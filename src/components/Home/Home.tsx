import { Component } from 'react';
import ListItems from './ListItems/ListItems';

export class Home extends Component {
  render() {
    const styleHome = '__container';
    return (
      <main className={styleHome}>
        <ListItems />
      </main>
    );
  }
}

export default Home;

// import { Component } from 'react';
import ListItems from './ListItems/ListItems';
import SearchInput from './SearchInput/SearchInput';

// export class Home extends Component {
//   state = {
//     search: '',
//   };
//   udpateSearch = (search: string): void => {
//     this.setState({ search });
//   };
//   render() {
//     const styleHome = '__container';
//     return (
//       <main className={styleHome}>
//         <SearchInput udpateSearch={this.udpateSearch} />
//         <ListItems />
//       </main>
//     );
//   }
// }

const Home = () => {
  const styleHome = '__container';

  return (
    <main className={styleHome}>
      <SearchInput />
      <ListItems />
    </main>
  );
};

export default Home;

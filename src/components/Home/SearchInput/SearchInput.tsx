import { Component } from 'react';
import { TPropsInput, TStateInput } from '../../../types/types';
import styles from './SearchInput.module.scss';

class SearchInput extends Component<TPropsInput, TStateInput> {
  constructor(props: TPropsInput) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const ls = localStorage.getItem('search');
    ls ? this.setState({ search: ls }) : localStorage.setItem('search', '');
  }

  componentWillUnmount() {
    const search = this.state.search;
    localStorage.setItem('search', search);
  }

  onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.udpateSearch(search);
  };

  render() {
    return (
      <div className={styles.searchInput}>
        <input type="text" value={this.state.search} onChange={this.onSearch} />
      </div>
    );
  }
}

export default SearchInput;

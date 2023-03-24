import { Component } from 'react';
import { TInputsFile } from '../../types/types';

export class FileInput extends Component<TInputsFile> {
  constructor(props: TInputsFile) {
    super(props);
  }

  render() {
    return <input type="file" ref={this.props.values} />;
  }
}

export default FileInput;

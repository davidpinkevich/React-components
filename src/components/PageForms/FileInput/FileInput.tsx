import { Component } from 'react';
import { TInputsFile } from '../../../types/types';
import styles from './Fileinput.module.scss';

export class FileInput extends Component<TInputsFile> {
  constructor(props: TInputsFile) {
    super(props);
  }

  render() {
    const style = this.props.fileName ? ' chooseFile' : '';
    return (
      <>
        <div className={styles.fileWrapper}>
          <span>Choose your photo:</span>
          <label className={'btnSubmit' + style}>
            {!this.props.fileName ? 'ADD PHOTO' : 'FILE ADDED'}
            <input
              type="file"
              ref={this.props.values}
              onChange={() => this.props.changeNames(true)}
            />
          </label>
        </div>
        {!this.props.valid && (
          <div className={styles.inputError}>
            You need to select a file with .jpeg, .png or .jpg permissions
          </div>
        )}
      </>
    );
  }
}

export default FileInput;

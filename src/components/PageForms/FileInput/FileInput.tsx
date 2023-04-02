import { TInputsFile } from '../../../types/types';
import styles from './Fileinput.module.scss';

function FileInput(props: TInputsFile) {
  const style = props.fileName ? ' chooseFile' : '';
  return (
    <>
      <div className={styles.fileWrapper}>
        <span>Choose your photo:</span>
        <label className={'btnSubmit' + style}>
          {!props.fileName ? 'ADD PHOTO' : 'FILE ADDED'}
          <input
            type="file"
            {...props.register('fileList', {
              onChange: () => props.changeName(true),
              required: true,
              validate: (value) => {
                const checkFilename = ['.png', '.jpg', '.jpeg'];
                const filter = checkFilename.filter((elem) => {
                  return value ? value[0].name.endsWith(elem) : false;
                });
                return filter.length ? true : false;
              },
            })}
          />
        </label>
      </div>
      {props.errors.fileList && (
        <div className={styles.inputError}>
          You need to select a file with .jpeg, .png or .jpg permissions
        </div>
      )}
    </>
  );
}

export default FileInput;

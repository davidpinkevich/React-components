import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../pageFormSlice';
import { TInputsFile, TStore } from '../../../types/types';
import styles from './Fileinput.module.scss';

function FileInput(props: TInputsFile) {
  const { fileName } = useSelector((state: TStore) => state.form);
  const dispatch = useDispatch();
  const style = fileName ? ' chooseFile' : '';
  return (
    <>
      <div className={styles.fileWrapper}>
        <span>Choose your photo:</span>
        <label className={'btnSubmit' + style}>
          {!fileName ? 'ADD PHOTO' : 'FILE ADDED'}
          <input
            type="file"
            {...props.register('fileList', {
              onChange: () => dispatch(changeName(true)),
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

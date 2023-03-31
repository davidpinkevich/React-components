import { useState } from 'react';
import { TItemForm } from '../../types/types';
import Forms from './Forms/Forms';
import ItemsForm from './ItemsForm/ItemsForm';
import styles from './PageForms.module.scss';

const PageForms = () => {
  const [values, setValues] = useState<Array<TItemForm>>([]);
  const [popup, setPopup] = useState(false);
  const [fileName, setfileName] = useState(false);

  const changeSub = (obg: TItemForm) => {
    setValues([...values, obg]);
  };

  const changeName = (value: boolean) => {
    setfileName(value);
  };

  const changePopup = (value: boolean) => {
    setPopup(value);
  };

  return (
    <>
      {popup && <p className={styles.cardSuccessfully}>Card created successfully!</p>}
      <Forms
        changeName={changeName}
        changeSub={changeSub}
        fileName={fileName}
        changePopup={changePopup}
      />
      {values.length ? <p className={styles.list}>List of cards:</p> : ''}
      <ItemsForm value={values} />
    </>
  );
};

export default PageForms;

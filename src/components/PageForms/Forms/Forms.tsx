import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TItemForm } from '../../../types/types';
import Radio from '../Radio/Radio';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';
import FileInput from '../FileInput/FileInput';
import { addItemForm, changePopup, changeName } from '../pageFormSlice';
import styles from './Forms.module.scss';

const Forms = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TItemForm>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit: SubmitHandler<TItemForm> = (data) => {
    dispatch(
      addItemForm({
        ...data,
        fileList: '',
        file: data.fileList ? URL.createObjectURL(data.fileList[0]) : '',
      })
    );
    dispatch(changeName(false));
    dispatch(changePopup(true));
    setTimeout(() => dispatch(changePopup(false)), 3000);
    reset();
  };

  return (
    <form className={styles.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>Who are you traveler?</h1>
      <div className={styles.inputSelect}>
        <p className={styles.question}>Enter the first and last name with a capital letter:</p>
        <input
          type="text"
          {...register('name', { required: true, pattern: /[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/ })}
        />
        {errors.name && (
          <p className={styles.inputError}>
            You must enter the first and last name with a capital letter (minimum 3 letters per
            word)
          </p>
        )}
        <p className={styles.question}>Enter your date of birth:</p>
        <input
          className={styles.inputDate}
          type="date"
          {...register('date', {
            required: true,
            validate: (value) => {
              return Number(value.slice(0, 4)) >= 1920 && Number(value.slice(0, 4)) <= 2005;
            },
          })}
        />
        {errors.date && (
          <p className={styles.inputError}>
            A user must be at least 18 years of age to create a card (2005)
          </p>
        )}
        <p className={styles.question}>Where are you from:</p>
        <Select register={register} />
      </div>
      <Radio register={register} errors={errors} />
      <Checkbox register={register} errors={errors} />
      <FileInput register={register} errors={errors} />
      <input className="btnSubmit" type="submit" value="Create Card" />
    </form>
  );
};

export default Forms;

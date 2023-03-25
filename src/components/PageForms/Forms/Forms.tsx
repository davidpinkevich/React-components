import React, { Component, createRef } from 'react';
import { TPropsForm, TStateForm } from '../../../types/types';
import Radio from '../Radio/Radio';
import Select from '../Select/Select';
import Checkbox from '../Checkbox/Checkbox';
import FileInput from '../FileInput/FileInput';
import styles from './Forms.module.scss';

class Forms extends Component<TPropsForm, TStateForm> {
  inputName = createRef<HTMLInputElement>();
  inputDate = createRef<HTMLInputElement>();
  inputSelect = createRef<HTMLSelectElement>();
  inputsRadio = new Array(3).fill('').map(() => createRef<HTMLInputElement>());
  inputsCheckbox = new Array(4).fill('').map(() => createRef<HTMLInputElement>());
  inputFile = createRef<HTMLInputElement>();
  checked = React.createRef();
  constructor(props: TPropsForm) {
    super(props);
  }
  render() {
    return (
      <form
        className={styles.mainForm}
        noValidate
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          this.props.onSubmit(event, {
            name: this.inputName.current?.value ? this.inputName.current?.value : '',
            date: this.inputDate.current?.value ? this.inputDate.current?.value : '',
            select: this.inputSelect.current?.value ? this.inputSelect.current?.value : '',
            radio: this.inputsRadio.map((elem) => elem.current?.checked),
            checkbox: this.inputsCheckbox.map((elem) => elem.current?.checked),
            file: this.inputFile.current?.files?.length ? this.inputFile.current.files[0] : '',
            fileName: this.inputFile.current?.files?.length
              ? this.inputFile.current?.files[0].name
              : '',
          })
        }
      >
        <h1>Who are you traveler?</h1>
        <div className={styles.inputSelect}>
          <p className={styles.question}>Enter the first and last name with a capital letter:</p>
          <input type="text" ref={this.inputName} />
          {!this.props.valid.checkName && (
            <p className={styles.inputError}>
              You must enter the first and last name with a capital letter (minimum 3 letters per
              word)
            </p>
          )}
          <p className={styles.question}>Enter your date of birth:</p>
          <input className={styles.inputDate} type="date" ref={this.inputDate} />
          {!this.props.valid.checkDate && (
            <p className={styles.inputError}>
              A user must be at least 18 years of age to create a card (2005)
            </p>
          )}
          <p className={styles.question}>Where are you from:</p>
          <Select values={this.inputSelect} />
        </div>
        <Radio valid={this.props.valid.checkRadio} values={[...this.inputsRadio]} />
        <Checkbox valid={this.props.valid.checkCheckbox} values={[...this.inputsCheckbox]} />
        <FileInput
          values={this.inputFile}
          changeNames={this.props.changeName}
          fileName={this.props.fileName}
          valid={this.props.valid.checkFileName}
        />
        <input className="btnSubmit" type="submit" value="Create Card" />
      </form>
    );
  }
}

export default Forms;

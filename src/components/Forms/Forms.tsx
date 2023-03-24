import React, { Component, createRef } from 'react';
import { TPropsForm, TStateForm } from '../../types/types';
import Radio from './Radio';
import Select from './Select';
import Checkbox from './Checkbox';
import FileInput from './FileInput';

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
        <input type="text" ref={this.inputName} />
        <input type="date" ref={this.inputDate} />
        <Select values={this.inputSelect} />
        <Radio values={[...this.inputsRadio]} />
        <Checkbox values={[...this.inputsCheckbox]} />
        <FileInput values={this.inputFile} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default Forms;

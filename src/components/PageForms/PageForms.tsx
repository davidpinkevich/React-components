import React, { Component } from 'react';
import { TPageForms, TItemForm } from '../../types/types';
import Forms from './Forms/Forms';
import ItemsForm from './ItemsForm/ItemsForm';

class PageForms extends Component<Record<string, void>, TPageForms> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: [],
    };
  }

  validateForm = (obj: TItemForm) => {
    const objForValidate = { ...obj };
    const regexpName = /[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/;
    const regexpDate = /\d{4}\-\d{2}\-\d{2}/;
    const checkYear = Number(objForValidate.date.match(/\d{4}/));
    const checkFilename = ['.png', '.jpg', '.jpeg'];
    return {
      checkName: regexpName.test(objForValidate.name) ? true : false,
      checkDate:
        regexpDate.test(objForValidate.date) && checkYear >= 1930 && checkYear <= 2005
          ? true
          : false,
      checkRadio: objForValidate.radio.filter((radio) => radio === true).length ? true : false,
      checkCheckbox: objForValidate.checkbox.filter((radio) => radio === true).length
        ? true
        : false,
      checkFileName: checkFilename.filter((str) => objForValidate.fileName.endsWith(str)).length
        ? true
        : false,
    };
  };

  changeSub = (event: React.FormEvent<HTMLFormElement>, obg: TItemForm) => {
    event.preventDefault();
    const obgValidate = this.validateForm(obg);
    const result = Object.values(obgValidate).filter((res) => res === false).length ? false : true;
    if (result) {
      const args = [...this.state.value, obg];
      this.setState({ value: args });
      event.currentTarget.reset();
    }
  };

  render() {
    return (
      <>
        <Forms onSubmit={this.changeSub} />
        <ItemsForm value={this.state.value} />
      </>
    );
  }
}

export default PageForms;

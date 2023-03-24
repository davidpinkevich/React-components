import React, { Component } from 'react';
import { TPageForms, TItemForm } from '../../types/types';
import Forms from './Forms';

class PageForms extends Component<Record<string, void>, TPageForms> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: [],
    };
  }

  validateForm = (obj: TItemForm) => {
    const objForValidate = { ...obj };
    console.log('objForValidate: ', objForValidate);
    const regexpName = /[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}/;
    const regexpDate = /\d{4}\-\d{2}\-\d{2}/;
    const checkYear = Number(objForValidate.date.match(/\d{4}/));
    return {
      checkName: regexpName.test(objForValidate.name) ? true : false,
      checkDate:
        regexpDate.test(objForValidate.date) && checkYear >= 1930 && checkYear <= 2005
          ? true
          : false,
      checkRadio: objForValidate.radio,
      checkSelect: objForValidate.select,
      checkCheckbox: objForValidate.checkbox,
      checkFile: objForValidate.file,
    };
  };

  changeSub = (event: React.FormEvent<HTMLFormElement>, obg: TItemForm) => {
    event.preventDefault();
    const testStr = this.validateForm(obg);
    console.log(testStr);
    const args = [...this.state.value, obg];
    this.setState({ value: args });
  };

  render() {
    return (
      <>
        <Forms onSubmit={this.changeSub} />
      </>
    );
  }
}

export default PageForms;

import { Component } from 'react';
import { TPageForms } from '../../../types/types';

export class ItemsForm extends Component<TPageForms> {
  constructor(props: TPageForms) {
    super(props);
  }
  render() {
    const arrayCheckbox = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
    const arrayRadio = ['Mercedes', 'Toyota', 'Nissan'];

    return (
      <div>
        {this.props.value.map((item, index) => {
          const path = this.props.value[0].file ? true : false;
          const boxes = arrayCheckbox.filter((box, index) => {
            if (item.checkbox[index] === true) return box;
          });
          console.log('boxes', boxes);
          return (
            <div key={index}>
              <div>Master: {item.name}</div>
              <div>Stepped on the ground: {item.date}</div>
              <div>Motherland: {item.select}</div>
              <div>
                Hobbies:
                {boxes.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
              <div>
                The model of car:
                {arrayRadio[item.radio.findIndex((item) => item === true)]}
              </div>
              {path && <img src={URL.createObjectURL(item.file as Blob | MediaSource)} />}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ItemsForm;

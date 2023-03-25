import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import FileInput from './FileInput';

describe('FileInput component', () => {
  it('render file input elements if validation failed', () => {
    const inputFile = createRef<HTMLInputElement>();
    const changeName = (value: boolean) => {
      console.log(value);
    };
    render(
      <FileInput values={inputFile} fileName={false} valid={false} changeNames={changeName} />
    );

    const fileElement = screen.getByText(
      'You need to select a file with .jpeg, .png or .jpg permissions'
    );
    expect(fileElement).toBeInTheDocument();
  });
});

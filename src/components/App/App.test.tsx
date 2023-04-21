import { MemoryRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from './App';

describe('App component', () => {
  it('render components on Forms page', async () => {
    const { getByText } = await act(async () =>
      render(
        <MemoryRouter initialEntries={['/forms']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      )
    );
    expect(getByText('Who are you traveler?')).toBeInTheDocument();
  });

  it('render components on Home page', async () => {
    const { getByText } = await act(async () =>
      render(
        <MemoryRouter initialEntries={['/']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      )
    );
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('render components on About page', async () => {
    const { getByText } = await act(async () =>
      render(
        <MemoryRouter initialEntries={['/about']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      )
    );
    expect(getByText('About')).toBeInTheDocument();
  });
});

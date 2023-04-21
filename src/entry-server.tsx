import ReactDOMServer from 'react-dom/server';
import { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store/store';

export function render(url: string, context: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    context
  );
}

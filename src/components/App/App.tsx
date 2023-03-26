import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import PageForms from '../PageForms/PageForms';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="forms" element={<PageForms />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

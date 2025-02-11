import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppRoute} from './const';
import './styles/global.css';
import { Button } from './components/Button/Button';
import { Heading } from './components/Heading/Heading';
import { Logo } from './components/ui/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/common/Header/Header';
function App() {
  return (
    <Router>
      <div className="App">
		<Header />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <div>
                Root
				<Button variant="primary">Request a quote</Button>
				<Button variant="secondary">Request a quote</Button>
				<Button variant="tertiary">Request a quote</Button>
				<Heading variant="green">Request a quote</Heading>
				<Heading variant="white">Request a quote</Heading>
				<Heading variant="black">Request a quote</Heading>
				<Logo variant="header" />
				<Logo variant="footer" />
				<Navigation variant="header" />
				<Navigation variant="footer" />
              </div>
            }
          />
          <Route
            path={AppRoute.AboutUs}
            element={
              <div>
                AboutUs
              </div>
            }
          />
          <Route
            path={AppRoute.Services}
            element={
              <div>
                Services
              </div>
            }
          />
          <Route
            path={AppRoute.UseCases}
            element={
              <div>
                UseCases
              </div>
            }
          />
          <Route
            path={AppRoute.Pricing}
            element={
              <div>
                Pricing
              </div>
            }
          />
          <Route
            path={AppRoute.Blog}
            element={
              <div>
                Blog
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

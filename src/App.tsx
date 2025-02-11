import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppRoute} from './const';

function App() {
  return (
    <Router>
			<div className="App">
				<Routes>
					<Route
						path={AppRoute.Root}
						element={
							<div>
                Root
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

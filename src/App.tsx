import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.scss';
import Router from "./router/Router";
import Layout from "./layout/Layout";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Router></Router>
          </Layout>
      </BrowserRouter>
  );
}

export default App;

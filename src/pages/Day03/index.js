import React from 'react';
import { Route } from 'react-router-dom';
import Day03Ex00 from './ex00'

const Day03 = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/ex00`} component={Day03Ex00} />
  </div>
);

export default Day03;
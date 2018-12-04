import React from 'react';
import { Route } from 'react-router-dom';
import Day02Ex00 from './ex00'

const Day01 = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/ex00`} component={Day02Ex00} />
  </div>
);

export default Day01;
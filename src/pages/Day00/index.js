import React from 'react';
import { Route } from 'react-router-dom';
import Day00Ex00 from './ex00'
import Day00Ex01 from './ex01'
import Day00Ex02 from './ex02'

const Day00 = ({match}) => (
    <div className="content">
        <Route path={`${match.url}/ex00`} component={Day00Ex00} />
        <Route path={`${match.url}/ex01`} component={Day00Ex01} />
        <Route path={`${match.url}/ex02`} component={Day00Ex02} />
    </div>
);

export default Day00;
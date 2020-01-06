import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FristComponent';
import { CompA, CompB } from "./components/MultipleComponents";
import MultiElements from './components/MultipleElements';
import Props from './components/UsingProsp';

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        <FirstComponent />
        <Props value="Hello!" />

        <CompA value="I am comp A" />
        <CompB value="I am comp B" />

        <MultiElements />

    </div>
    , element);
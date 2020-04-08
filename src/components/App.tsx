import * as React from 'react'
import {CardsContainer} from './CardContainer/CardsContainer' ;
import './App.css'

export const App = () =>
    <div className={'App'}>
        <div className={"header"}>Paris Weather Forecast</div>
        <CardsContainer/>
    </div>;
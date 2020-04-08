import * as React from 'react'
import {CardsContainer} from './CardContainer/CardsContainer' ;
import './App.css'

export const App = () =>
    <div className={'App'}>
        <div className={"header"}>Rabat Weather Forecast</div>
        <CardsContainer city={'RABAT'}/>
    </div>;
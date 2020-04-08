import * as React from 'react';
import {useEffect, useState} from "react";
import './CardsContainer.css'
import {WeatherCard} from '../WeatherCard/WeatherCard';
import axios, {AxiosError, AxiosResponse} from 'axios';
import Forecast from "../../Models/Forecast";
import RequestHelper from "../../helpers/RequestHelper";

interface Props {
    city: string;
}

export const CardsContainer: React.FunctionComponent<Props> = ({city}) => {
    
    const [list, setList] = useState([]);
    useEffect(() => {
        let requestConfig = RequestHelper.getRequestConfig('GET', 'data/2.5/forecast/daily', city);
        axios(requestConfig)
            .then((response: AxiosResponse) => setList(response.data.list))
            .catch((error: AxiosError) => console.log(error.message));
    }, []);


    if (list.length <= 0)
        return <div className="blink">Waiting Server to respond ...</div>;
    else {
        return (
            <main className="container">
                <div className="card-wrapper">
                    {
                        list.map((fc: Forecast) => <WeatherCard key={fc.dt} forecast={fc}/>)
                    }
                </div>
            </main>
        )
    }
};
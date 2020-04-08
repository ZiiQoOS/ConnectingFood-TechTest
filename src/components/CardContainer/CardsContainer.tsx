import * as React from 'react';
import {useEffect, useState} from "react";
import './CardsContainer.css'
import {WeatherCard} from '../WeatherCard/WeatherCard';
import axios, {AxiosError, AxiosResponse} from 'axios';
import Forecast from "../../Models/Forecast";
import RequestHelper from "../../helpers/RequestHelper";
import ErrorHandler from "../../helpers/ErrorHandler";
import Error from "../../Models/Error";

interface Props {
    city: string;
}

export const CardsContainer: React.FunctionComponent<Props> = ({city}) => {


    const [list, setList] = useState([]);
    const [error, setError] = useState<Error>({message: '', code: 0});

    useEffect(() => {

        let requestConfig = RequestHelper.getRequestConfig('data/2.5/forecast/daily', city);
        axios(requestConfig)
            .then((response: AxiosResponse) => setList(response.data.list))
            .catch((error) => {
                setError(error)
            });

    }, []);

    if (error.message)
        return <div className="error">{ErrorHandler.handleError(error)}</div>;
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
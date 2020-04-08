import * as React from 'react';
import './WeatherCard.css';
import {useState} from "react";
import {Modal, Card} from "antd";
import DateHelper from "../../helpers/DateHelper";
import Forecast from "../../Models/Forecast";

import sunrise from '../../../public/images/sunrise.svg';
import sunset from '../../../public/images/sunset.svg';
import wind from '../../../public/images/wind.svg';
import humidity from '../../../public/images/humidity.svg';
import cloud from '../../../public/images/cloud.svg';
import windsock from '../../../public/images/windsock.svg';
import pressure from '../../../public/images/pressure.svg';
import hot_temp from '../../../public/images/hot.svg';
import cold_temp from '../../../public/images/cold.svg';

interface ForecastProps {
    forecast: Forecast;
}

export const WeatherCard: React.FunctionComponent<ForecastProps> = ({forecast}) => {
    let day = DateHelper.getDayShortName(forecast.dt);
    let dayOfMonth = DateHelper.getDayOfMonth(forecast.dt);
    let month = DateHelper.getMonthShortName(forecast.dt);
    let dayName = DateHelper.getDayName(forecast.dt);
    let monthName = DateHelper.getMonthName(forecast.dt);

    let showModal = () => setVisible(true);
    let handleCancel = () => setVisible(false);

    const [visible, setVisible] = useState(false);

    return (
        <>
            <section className="card anim-flip" onClick={() => showModal()}>
                <header>
                    <h1 className="card-header">{day} {dayOfMonth} {month}</h1>
                </header>
                Jour<p className="card-temp box-highlight">{forecast.temp.day.toFixed(1)}</p>
                Soir<p className="card-temp box-highlight">{forecast.temp.night.toFixed(1)}</p>
                <div className="icon">
                    <div className="cloud-group">
                        <img src={`${process.env.API_ICON_URL}${forecast.weather[0].icon}.png`} alt="alt"
                             height={"120px"} width={"120px"}/>
                    </div>
                </div>
                <p className="card-info">{forecast.weather[0].description}</p>
            </section>
            <Modal
                visible={visible}
                title={`Prévisions du ${dayName} ${dayOfMonth} ${monthName} à ${process.env.CITY}`}
                onCancel={handleCancel}
                footer={[]}>
                <Card>
                    <Card.Grid className={"grid"}>
                        <img src={sunrise} height={"50px"} width={"50px"} alt=""/>
                        <div>Lever Soleil</div>
                        <p>{DateHelper.getTime(forecast.sunrise)}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={sunset} height={"50px"} width={"50px"} alt=""/>
                        <div>Coucher soleil</div>
                        <p>{DateHelper.getTime(forecast.sunset)}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={wind} height={"50px"} width={"50px"} alt=""/>
                        <div>Vitesse du vent</div>
                        <p>{`${forecast.speed} m/s`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={windsock} height={"50px"} width={"50px"} alt=""/>
                        <div>Dir. du vent</div>
                        <p>{`${forecast.deg} degrés`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={humidity} height={"50px"} width={"50px"} alt=""/>
                        <div>Humidité</div>
                        <p>{`${forecast.humidity} %`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={cloud} height={"50px"} width={"50px"} alt=""/>
                        <div>Nuages</div>
                        <p>{`${forecast.clouds} %`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={pressure} height={"50px"} width={"50px"} alt=""/>
                        <div>Pression</div>
                        <p>{`${forecast.pressure} hPa`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={hot_temp} height={"50px"} width={"50px"} alt=""/>
                        <div>Temp. Max</div>
                        <p>{`${forecast.temp.max} °C`}</p>
                    </Card.Grid>
                    <Card.Grid className={"grid"}>
                        <img src={cold_temp} height={"50px"} width={"50px"} alt=""/>
                        <div>Tem. Min</div>
                        <p>{`${forecast.temp.min} °C`}</p>
                    </Card.Grid>
                </Card>
            </Modal>
        </>
    )
};

import React from 'react';
import "./inicio.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from "../../dummyData";
import WidgetSm from '../../components/widgetsSm/WidgetSm';
import WidgetLg from '../../components/widgetsLg/WidgetLg';

export default function Inicio() {
  return (
    <div className='inicio'>
        <FeaturedInfo/>
        <Chart data={userData} title="Analisis de visita al club" grid datakey="Numero de visitas"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Ganancia</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>s/ 500</span>
                    <span className='featuredMoneyRate'>-20 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className='featuredSub'>en comparacion con el mes pasado</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Alquiler de lanchas</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>20</span>
                    <span className='featuredMoneyRate'>-10 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className='featuredSub'>en comparacion con el mes pasado</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Costos</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>s/ 3000</span>
                    <span className='featuredMoneyRate'>+1000 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className='featuredSub'>en comparacion con el mes pasado</span>
            </div>
        </div>
    )
}

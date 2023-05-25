import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type}) =>{
    return <button className={ "widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Listado de casas</h3>
        <table className='widgetLgTable'>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>dueño</th>
            <th className='widgetLgTh'>fecha</th>
            <th className='widgetLgTh'>N° de casa</th>
            <th className='widgetLgTh'>estado</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNiEd63SvTXMXe-2Llo9Lcp1mWHtSUJhPg&usqp=CAU" alt="" className='widgetLgImg'/>
              <span className='widgetLgImg'>Susana Carlo</span>
            </td>
            <td className='widgetLgDate'> 2 junio 2023</td>
            <td className='widgetLgAmount'>Casa 1</td>
            <td className='widgetLdstatus'><Button type="Habitado"/></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNiEd63SvTXMXe-2Llo9Lcp1mWHtSUJhPg&usqp=CAU" alt="" className='widgetLgImg'/>
              <span className='widgetLgImg'>Susana Carlo</span>
            </td>
            <td className='widgetLgDate'> 2 junio 2023</td>
            <td className='widgetLgAmount'>casa 2</td>
            <td className='widgetLdstatus'><Button type="Remodelacion"/></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNiEd63SvTXMXe-2Llo9Lcp1mWHtSUJhPg&usqp=CAU" alt="" className='widgetLgImg'/>
              <span className='widgetLgImg'>Susana Carlo</span>
            </td>
            <td className='widgetLgDate'> 2 junio 2023</td>
            <td className='widgetLgAmount'>casa 4</td>
            <td className='widgetLdstatus'><Button type="Habitado"/></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNiEd63SvTXMXe-2Llo9Lcp1mWHtSUJhPg&usqp=CAU" alt="" className='widgetLgImg'/>
              <span className='widgetLgImg'>Susana Carlo</span>
            </td>
            <td className='widgetLgDate'> 2 junio 2023</td>
            <td className='widgetLgAmount'>casa 8</td>
            <td className='widgetLdstatus'><Button type="Remodelacion"/></td>
          </tr>
        </table>
    </div>
  )
}

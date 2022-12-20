import './CardPrincipal.css'
import { FaPlay } from "react-icons/fa";   //importación de librería de iconos 
import { deleteDec, colorDec } from './App' //importacion de las funciones de color 
import Graph from './Graph'   

export default function CardPrincipal({ 
    json: {                 //Creación del json con base en la api traida de internet 
        id, 
        symbol, 
        current_price,
        image,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        price_change_percentage_30d_in_currency,
        price_change_percentage_1y_in_currency }, cur= 'usd'}) {
    
            return (
        <>
            <article className="cripto-first1">
                <div className="cripto-first">
                    <img src={image} alt="Icono de la cripto" />

                    <h2>{symbol} - {current_price} {cur}</h2>  {/* Se tren los elementos almacenados en el json de la api para ver el indicador de moneda y su precio actual */}

                    <h2><FaPlay className={`icon-arrow ${colorDec(price_change_percentage_30d_in_currency)}`}/>{deleteDec(price_change_percentage_30d_in_currency, 2)}%</h2> {/* se traen los valores de la primer moneda  */}
                </div>

                <div className="graphic">
                    <Graph type={0} coin={id} currency={cur}/> {/* utilizando la librería se define el tipo de grafico 0 y s le envian las propiedades de la moneda  */}
                </div>

                <div className="capitalization"> 
                    <h2>Capitalización</h2>
                    {/* Creación de la tabla */}  
                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>1m</th>
                                <th>1y</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            {/* porcentajes de cambio en diferentes rtangos de tiempo utilizando la funcion de color para pintar si esta en negativo o positivo */}
                            
                                <td className={colorDec(price_change_percentage_1h_in_currency)}>{deleteDec(price_change_percentage_1h_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_24h_in_currency)}>{deleteDec(price_change_percentage_24h_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_7d_in_currency)}>{deleteDec(price_change_percentage_7d_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_30d_in_currency)}>{deleteDec(price_change_percentage_30d_in_currency, 2)} %</td>
                                <td className={colorDec(price_change_percentage_1y_in_currency)}>{deleteDec(price_change_percentage_1y_in_currency, 2)} %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    )
}
import './Card.css'
import {colorDec} from './App'
import Graph from './Graph'

export default function Card({price, porcentaje, img, coinId, cur}) {//envio de parametros de la api que se descarga 
    return (
        <div className="card">
            <img src={img} alt="" /> {/* se trae la propiedad del objeto contruido con la apí  */}

            <div className="con-main">
                <div className="con-title">
                    <h2 className={`price ${colorDec(porcentaje)}`}> {price} </h2>              {/* se trae la funcion creada para coleraer el texto en caso tal de que los valores sean negativos a 0 o mayores a 0  */}
                    <h4 className={`porcentaje ${colorDec(porcentaje)}`}>{porcentaje}%</h4>
                </div>
                
                <Graph coin={coinId} currency={cur} color={colorDec(porcentaje)}/>
            </div>
        </div>
    )
}
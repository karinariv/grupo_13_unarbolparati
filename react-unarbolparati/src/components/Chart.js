import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Nombre: 'Jinicuil',
        Region: 'Sur',
        Altura: '15 a 20 m',
        Clima: 'Húmedo',
        Luz: 'pleno sol',
        Fruto: 'comestible',
        Precio: 123
    },
    {
        Nombre: 'Rosa Morada',
        Region: 'Sur',
        Altura: '25 a 30 m',
        Clima: 'Templado',
        Luz: 'pleno sol',
        Fruto: 'no comestible',
        Precio: 134
    },
    {
        Nombre: 'Pino Lacio',
        Region: 'Centro',
        Altura: '20 a 30 m',
        Clima: 'Subtropical',
        Luz: 'media sombra',
        Fruto: 'no comestible',
        Precio: 213
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Región</th>
                                <th>Altura</th>
                                <th>Clima</th>
                                <th>Luz</th>
                                <th>Fruto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Región</th>
                                <th>Altura</th>
                                <th>Clima</th>
                                <th>Luz</th>
                                <th>Fruto</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;
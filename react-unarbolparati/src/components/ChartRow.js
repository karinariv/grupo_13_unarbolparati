import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Nombre}</td>
                    <td>{props.Region}</td>
                    <td>{props.Altura}</td>
                    <td>{props.Clima}</td>
                    <td>{props.Luz}</td>
                    <td>{props.Fruto}</td>
                    <td>{props.Precio}</td>
                    {/* <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td> */}
                </tr>
            )
    }
    
        

export default ChartRow;
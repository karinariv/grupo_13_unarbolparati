import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid bg-css-green2 py-4">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Un árbol para ti - Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
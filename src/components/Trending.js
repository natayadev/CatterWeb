import React from 'react'
import Avatar from '../images/perfil.jpg'

export default function Trending(){
    return (
    <React.Fragment>
				<div className="jumbotron py-4 mt-3">
					<h5>Tendencias para ti</h5>
					<h6 className="card-subtitle text-muted">Tendencia en Argentina</h6>
					<h5 className="card-title text-dark">Michi</h5>
					<h6 className="card-subtitle text-muted">23 mil Catts</h6>
                	<hr className="solid" />
					<h6 className="card-subtitle text-muted">Tendencia en Argentina</h6>
					<h5 className="card-title text-dark">#manithecat</h5>
					<h6 className="card-subtitle text-muted">15 mil Catts</h6>
                	<hr className="solid" />
					<h6 className="card-subtitle text-muted">Tendencia en Argentina</h6>
					<h5 className="card-title text-dark">Cats</h5>
					<h6 className="card-subtitle text-muted">12 mil Catts</h6>
                	<hr className="solid" />
				</div>
				<div className="jumbotron py-4">
					<h5>A quién seguir</h5>
					<div className="card card-body media">
						<img className="d-flex mr-3 round1" alt="" src={Avatar} />
						<h6 className="card-title">dev</h6>
						<h6 className="card-subtitle mb-2 text-muted">@peanut</h6>
						<button type="button" className="btn btn-outline-primary round">Seguir</button>
						<hr className="solid" />
						<img className="d-flex mr-3 round1" alt="" src={Avatar} />
						<h6 className="card-title">supp</h6>
						<h6 className="card-subtitle mb-2 text-muted">@kitten</h6>
						<button type="button" className="btn btn-outline-primary round">Seguir</button>
						<hr className="solid" />
					</div>
				</div>
    </React.Fragment>
    )
}
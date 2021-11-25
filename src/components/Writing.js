import Cattear from '../components/Cattear'
import Avatar from '../images/perfil.jpg'

export default function Writing() {
    return (
        <div className="card-body media">
            <img className="d-flex mr-3 round1" alt="" src={Avatar} />
            <input className="form-control" type="text" placeholder="¿Qué estas pensando?" cols="35" />
            <Cattear/>
        </div>
    );
}
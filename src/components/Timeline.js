import Writing from '../components/Writing'
import Tweet from '../components/Tweet'

export default function Timeline() {
    return (
        <div className="mt-3">
            <h5>Inicio</h5>
            <Writing></Writing>
            <Tweet></Tweet>
        </div>
    );
}
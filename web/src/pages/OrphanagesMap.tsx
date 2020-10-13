import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import {ReactComponent as Logo} from '../images/Local.svg';

import '../styles/pages/orphanages-map.css';

const Landing = () => {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <Logo />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :0</p>
                </header>

                <footer>
                    <strong>Olinda</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>

            <Map 
                center={[-7.9935332,-34.855727]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
             <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </ Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default Landing;
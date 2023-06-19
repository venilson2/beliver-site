import { GetServerSideProps } from 'next';
import EventBox from '../EventBox/EventBox';
import Link from 'next/link';
import TabPanel from '../tabPanel/TabPanel';
import FollowInsta from '../followInsta/FollowInsta';

const Event = () => {
    return (
        <div id="content" className="site-content">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EventBox />
        </div>
        <div className="site-content">
          <div className="entry-content">
            <div className="block-columns text-center">
              <div className="block-column">
                <h4>Data</h4>
                <p className="text-faded">25 de Novembro</p>
              </div>
              <div className="block-column">
                <h4>Horário</h4>
                <p className="text-faded">06:00 Horas PM</p>
              </div>
              <div className="block-column">
                <h4>Endereço</h4>
                <p className="text-faded">Rua Henrique Muzzio, 396<br />Jardim Varginha</p>
              </div>
            </div>
            <h4>Detalhes do Evento:</h4>
            <p>
              Objectively morph e-business synergy through prospective markets. Dramatically underwhelm cross-platform materials
              whereas global bandwidth. Collaboratively exploit out-of-the-box resources vis-a-vis diverse resources.Credibly
              streamline proactive scenarios through scalable channels. Quickly reconceptualize flexible processes. Vivamus cursus
              tempor sem, et pulvinar velit egestas. Nunc eleifend felis porttitor libero volutpat, porta feugiat ex ornare.
              Quisque sit amet lorem. &nbsp;Nunc eleifend felis porttitor libero volutpat, porta feugiat ex ornare. Quisque
              sit amet lorem nulla. Nulla convallis placerat dui et sagittis. Maecenas sagittis sem arcu. Fusce rhoncus elementum rutrum.
              Mauris aliquet sapien et mauris tristique lobortis. Aenean at dictum ligula, id semper velit.
            </p>

            <div className="site-content">
              <div className="text-center">
                <Link href="/event" className="button button-wide button-big button-filled button-primary">Confirmar</Link> 
              </div>    
            </div>
          </div>
          <div className="site-content">
            <TabPanel />
          </div>
            <FollowInsta />
        </div>
      </div>
    );
}

export default Event
import Head from "next/head";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/navbar";
import EventBox from "@/components/cardEvent/EventBox";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | Eventos</title>
        <meta name="Sobre geração samuel" content="Sobre geração samuel" />
      </Head>
      <Navbar />
      <Header title="Eventos" imgUrl="images/sample-540x540-5.jpg" />
      <div id="content" className="site-content">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EventBox />
        </div>
        <div id="content" className="site-content">
          <div className="entry-content">
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
            <br />
            <br />
            <div className="block-columns text-center">
              <div className="block-column">
                <p>Data</p>
                <p className="">25 de Novembro</p>
              </div>
              <div className="block-column">
                <p>Horario</p>
                <p className="">06:00 Horas PM</p>
              </div>
              <div className="block-column">
                <p>Endereço</p>
                <p className="">Rua Henrique Muzzio, 396<br />Jardim Varginha</p>
              </div>
            </div>
            <div className="text-center">
                <Link href="/event" className="button button-primary">Confirmar</Link> 
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
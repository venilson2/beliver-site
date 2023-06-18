import { GetServerSideProps } from 'next';
import CountdownTimer from '../countdownTimer/CountdownTimer';
import Link from 'next/link';

const HopeEnvent = () => {
    const targetDate = new Date('2023-11-25T18:00:00');
    return (
        <>
            <section>
                <div className="featured-media has-overlay">
                    <div className="wrapper" style={{ height: '80vh' }}>
                        <div className="aligncenter">
                            <p className="text-weight-light text-opacity-75 text-center h4">Proximo Evento</p>
                            <p className="text-uppercase text-weight-bold text-opacity-75 text-center h1-display">Believer - A esperança</p>
                            <h1 className="text-weight">
                                <CountdownTimer targetDate={targetDate} countdownNumber="countdownNumberLg" countdownLabel="countdownLabelLg" />
                            </h1>
                        </div>
                        <div style={{ width: '100vw' }} className="text-center">
                            <Link href="/event" className="button button-primary">Saiba Mais!</Link> 
                        </div>
                    </div>
                    <video src="/media/hope.mp4" preload="metadata" muted={true} autoPlay={true} loop={true} width="1320" height="756"></video>
                </div>
            </section>
      </>
    );
}

export default HopeEnvent
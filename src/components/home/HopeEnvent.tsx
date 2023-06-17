import { GetServerSideProps } from 'next';
import CountdownTimer from '../countdownTimer/CountdownTimer';

const HopeEnvent = () => {
    const targetDate = new Date('2023-11-25T18:00:00');
    return (
        <>
            <section>
                <div className="featured-media has-overlay">
                    <div className="wrapper" style={{ height: '80vh' }}>
                        <div className="aligncenter">
                            <p className="text-weight-light text-opacity-75 text-center">Proximo Evento</p>
                            <p className="text-uppercase text-weight-bold text-opacity-75 text-center">Believer - A esperança</p>
                            <h1 className="text-weight"></h1><CountdownTimer targetDate={targetDate} />
                        </div>  
                    </div>
                    <video src="/media/hope.mp4" preload="metadata" muted={true} autoPlay={true} loop={true} width="1320" height="756"></video>
                </div>
            </section>
      </>
    );
}

export default HopeEnvent
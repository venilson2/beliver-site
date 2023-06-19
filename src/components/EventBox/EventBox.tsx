import Link from "next/link";
import CountdownTimer from "../countdownTimer/CountdownTimer";

const EventBox = () => {
    const targetDate = new Date('2023-11-25T18:00:00');
    return (
        <section>
            <div className="featured-media has-overlay eventBox">
                <div className="wrapper eventBox    ">
                    <div className="aligncenter">
                        <p className="text-uppercase text-weight-bold text-opacity-75 text-center h1-display">Believer - A esperança</p>
                        <h1 className="text-weight">
                            <CountdownTimer targetDate={targetDate} countdownNumber="countdownNumberMd" countdownLabel="countdownLabelMd" />
                        </h1>
                    </div>
                </div>
                <video src="/media/hope.mp4" preload="metadata" muted={true} autoPlay={true} loop={true} width="1320" height="756"></video>
            </div>
        </section>
    );
}

export default EventBox
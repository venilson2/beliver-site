import { url } from "inspector"
import SpacerSection from "../spacerSection/SpacerSection";
import AuthorBox from "../authorBox/AuthorBox";

const Content = () => {
    return (
        <>
            <figure className="block-image alignleft shine-on-children-hover">
                <a href="images/believer_leads.jpg" data-fancybox="about-gallery">
                    <picture>
                        <img src="images/believer_leads.jpg" width="200" height="300" loading="lazy" alt="" />
                    </picture>
                    <span className="shine-canvas"></span></a>
            </figure>
            <p>
                Somos um grupo de teatro com um propósito especial: alcançar almas para Jesus e realizar trabalhos sociais. 
                Tudo começou quando Deus plantou a semente no coração de Lucas, inspirando-o a levar o evangelho de Cristo através do teatro.

                Hoje, contamos com três líderes: Larissa, Sara e Manu. Nosso maior desejo é ir além de simplesmente buscar almas,
                mas levá-las a conhecer, viver e sentir verdadeiramente a presença de Cristo. Somos conscientes de que somos apenas enviados, 
                e é Jesus Cristo quem realiza as transformações e mudanças verdadeiras.

                Através da arte teatral, buscamos impactar vidas, tocar corações e transformar comunidades. Queremos ser instrumentos 
                de Cristo para tocar a alma das pessoas, proporcionando momentos de reflexão, inspiração e conexão com o Senhor Jesus. 
                O amor de Deus e a mensagem transformadora de Cristo são os pilares do nosso trabalho.

                Além do teatro, também nos comprometemos em realizar trabalhos sociais, contribuindo para a melhoria das comunidades 
                que nos cercam. Acreditamos que servir ao próximo é uma forma tangível de compartilhar o amor de Deus e ser agentes de 
                transformação na sociedade.
            </p>
            <br />
            <h6></h6>
            <div className="block-episode">
                <div className="episode-player episode-type-video shine-on-hover is-pip-supported" style={{ height: '60vh' }}>
                    <video src="media/believer_video_1.mp4" poster="images/believer_2.jpg" preload="metadata" width="1280" height="720"></video>
                    <a href="media/believer_video_1.mp4" className="media-cover"><span className="media-play-pause"></span></a>
                    <div className="media-controls">
                        <button className="media-play-pause"></button>
                        <span className="media-current-time">00:00</span>
                        <div className="media-time-rail"><span className="media-time-rail-current"></span></div>
                        <span className="media-duration">00:51</span>
                        <button className="media-pip" title="Picture-in-Picture"></button>
                        <button className="media-fullscreen" title="Toggle fullscreen"></button>
                    </div>
                    <span className="shine-canvas"></span></div>
            </div>
            <p>
                <strong>
                    O Believer do ano passado foi uma experiência impactante e transformadora. 
                    Deixou um quero mais para o próximo evento. Fortaleceu a fé e despertou uma paixão ainda maior por Deus. 
                    Marque em sua agenda: dia 25 de novembro teremos o Believer - A Esperança! Não perca!
                </strong>
            </p>
        </>
    );
}


export default Content
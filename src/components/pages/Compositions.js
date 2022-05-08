import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";

function Compositions() {
    return (
        <div className="secondaryWrapper">
            <div className="leftSide">
                <h1 className="neonText">Compositions</h1>
                <h3 className="subtitle2">Recent works</h3>
                <ul className="cv">
                    <li>
                        “Versificator - Render 3” for vocal ensemble (2022) -
                        Commisioned by Vokalensembelet 'Tabula Rasa' - Upcoming
                        premiere at 'Bergen kjøtt' Sept 27, 2022 - Concert
                        hosted by Avgarde Bergen
                    </li>
                    <li>
                        “Elevator Pitch” for trumpet and electronics (2022) -
                        Commisioned by the Trumpet Studio at Grieg Academy
                        Premiered in NyMusikk's Krapylkonserten, May 7, 2022 -
                        trumpet: Kayleigh Neff
                        {/* <a href="#">
                            <p>audio</p>
                        </a> */}
                    </li>
                    <li>
                        “Isovell Che Segila Chentelare” for double choir (2022)
                        - Commisioned by Edvard Grieg Kor - Premiere: Upcoming
                    </li>
                    <li>
                        "ARGO/AGO" immersive sound and visuals (2021) -
                        collaborative work Premiered Sept 16, 2021 - Lithuanian
                        Academy for Music and Theater Vilnius - Lithuania
                    </li>
                    <li>
                        "Deconstructions" for voice, visuals and electronics
                        (2018) - Performed April 18, 2018 - Philip T. Young Hall
                        University of Victoria. Victoria BC - Canada. Voice:
                        Jessica Wagner
                    </li>
                    <li>
                        "Mirrors" (2018) for processed voice (2018) Based on a
                        poem of Luis Ressia. Performed April 12, 2018 - Phillip
                        T. Young Hall - University of Victoria. Victoria BC -
                        Canada.
                    </li>

                    <li>
                        "To make a blindfold / Measure / The size of your head"
                        electroacoustic (2012-2013) - Comissioned by Carmen
                        Caceres (DanceAction, NY) - Performed at former
                        Triskelion Arts Center for WAX Works - October 2013 -
                        Center for Performance Research. Brooklyn, NY - April
                        2014
                    </li>
                    <li>
                        "Cinco Soles" electroacoustic (2014) Choreography &
                        Performance: Carmen Caceres. Performed at Eden's
                        Expressway - New York, NY - October 2014
                    </li>
                    <li>
                        "Trivium - Jazz Cuyano" for double-bass, percussion and
                        piano (2013) Performed June 10, 2013 - Auditorium
                        Escuela de Artes, Universidad Nacional de Córdoba.
                        Córdoba - Argentina
                    </li>
                    <li>
                        "Yzur" for voice and piano (2012) Performed June 10,
                        2013 - Auditorium Escuela de Artes, Universidad Nacional
                        de Córdoba. Córdoba - Argentina
                    </li>
                    <li>
                        "RGB" for string quartet (2012-2013) Performed June 10,
                        2013 - Auditorium Escuela de Artes - Universidad
                        Nacional de Córdoba. Córdoba - Argentina
                    </li>
                </ul>

                <h3 className="neonText2">Catalog of works</h3>
                <ul className="cv">
                    <li>
                        2021 – “Milonga del gesto” for solo guitar - Commisioned
                        by Dániel Péter Biró
                    </li>
                    <li>
                        2020 – “Both ways” for string quartet - Commisioned by
                        the String Studio at Griegakademiet
                    </li>
                    <li>
                        2019 – “Deconstructions” for voice, synthetized voice
                        and visuals
                    </li>
                    <li>2018 – “Mirrors” (electroacoustic)</li>
                    <li>2018 – “Viderunt omnes” (electroacoustic)</li>
                    <li>2017 – “Romance del niño del agua” (choir)</li>
                    <li>
                        2017 – “Sonidos de lo Incierto” (multimedia
                        installation)
                    </li>
                    <li>
                        2016 – “Música para la lectura de tres poemas de Julio
                        Cortázar” (vocal ensamble)
                    </li>
                    <li>2015 – “Semblanza” (mixed media)</li>
                    <li>2015 - "Encroach" (sound installation)</li>
                    <li>2014 – “Retro-alimento” (sound installation)</li>
                    <li>2014 – “Cinco Soles" (mixed media) </li>
                    <li>
                        2013 – Trilogy: “To make a blindfold - Measure - The
                        size of your head” (mixed media)
                    </li>
                    <li>2012 – “RGB” (string quartet)</li>
                    <li>2012 – “Yzur” (voice and piano)</li>
                    <li>2012 – “Evoluciones” (symphonic orchestra)</li>
                    <li>
                        2012 – “Trivium – Jazz cuyano” (piano, double bass and
                        percussion)
                    </li>
                    <li>2011 – “Non-Sancta Romana” (string orchestra) </li>
                    <li>2010 – Quintet for harpsichord and string quartet</li>
                    <li>
                        2006 – “Una plegaria americana” (instrumental ensamble){" "}
                    </li>
                    <li>2005 – “Diego de la gente” (electroacoustic) </li>
                    <li>2005 – “Katrina” (wind quartet)</li>
                    <li>2004 – “Música para cine clase B” (piano and cello)</li>
                </ul>
            </div>
            <div className="rightSide">
                <div className="videos">
                    <YoutubeEmbed embedId="nj7lkkAAGIs" />

                    <YoutubeEmbed embedId="KwPAwxJZcK0" />

                    <YoutubeEmbed embedId="tWAQtFqOht0" />

                    <YoutubeEmbed embedId="yBBQS4i0N1k" />

                    <YoutubeEmbed embedId="XVgRveZZRLc" />

                    <YoutubeEmbed embedId="0Gs0bcSGbH4" />
                </div>
            </div>
        </div>
    );
}

export default Compositions;

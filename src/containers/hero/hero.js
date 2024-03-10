import React from "react";
import './hero.css'
import NavBar from "../../components/navbar/navbar";
import Style from "../../constants/style";
export default function Hero() {
    return (
        <div className="container">
            <div className="left-side">
                <div className="hero-features">
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>headphone type</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>Closed, Dynamic</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>driver unit</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>1.57", dome type (CCAW Voice coli)</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>magnet</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>Neodymium</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>impedance (OHM)</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti nesciunt modi hic tempora libero inventore, eligendi incidunt aperiam sit blanditiis. Facilis magnam itaque asperiores, impedit excepturi ullam architecto commodi!</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>diapharm</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>Aluminium coated LCP</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>frequency response</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>4 Hz - 40,000 Hz</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>frequency response (active operation)</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>4 Hz - 40,000 Hz</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>frequency response (Bluetooth* communication)</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}>20 Hz - 20,000 Hz (44.1 kHz Sampling)/20 Hz - 40,000 Hz (LDAC
                            96 kHz Sampling, 990 kbps)</p></div>
                    <div>
                        <p style={{ ...Style.h3, color: "rgb(61 56 56 / 97%)" }}>sensitivites</p>
                        <p style={{ ...Style.h4, color: "#d3d3d3" }}></p></div>

                </div>
            </div>
            <div className="right-side">
                <NavBar />
                <div className="wrapper">
                    <div className="hero-content">
                        <div style={Style.h2}>
                            Step Into New
                        </div>
                        <div style={Style.h2}>
                            World of
                        </div>
                        <div style={Style.h1}>
                            IMMERSIVE
                        </div>
                        <div style={Style.h1}>
                            SOUND
                        </div>
                        <button style={{ ...Style.primaryButton, color: "#eeeeee", background: "#4b4b4b" }} >EXPLORE NOW</button>
                    </div>
                    <div className="image-wrapper"></div>
                </div>
            </div>

        </div>
    )
}
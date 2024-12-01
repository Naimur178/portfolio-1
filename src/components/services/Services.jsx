import React, { useState } from 'react';
import "./Services.css"

const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section_title"> Services </h2>
            <span className="section_subtitle">
                What I offer
            </span>
            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Web <br />Development</h3>
                    </div>
                    <span className="services_button" onClick={()=>toggleTab(1)}>View More{" "} <i className="uil uil-arrow-right services_button-icon"></i>
                    </span><div className={toggleState === 1 ?"services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=> toggleTab(0)}>
                            </i>
                            <h3 className="services_modal-title">Responsive Web App Development</h3>
                            <p className="services_modal-description">Service with more then 1+ years of experience. Providing quality work to clients and companies. </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Responsive design: </b>
                                    Web developers can create websites that adjust their layout based on the size of the screen, so they look good on any device.
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        Web page development.
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        I create user authentication system.
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        Single Page and multipage Web applicatiion
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        Build authorization and level of access.
                                    </p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Data <br />Analysis</h3>
                    </div>
                    <span className="services_button" onClick={()=>toggleTab(2)}>View More{" "} <i className="uil uil-arrow-right services_button-icon"></i>
                    </span><div className={toggleState === 2 ?"services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}>
                            </i>
                            <h3 className="services_modal-title">Business Data Analysis</h3>
                            <p className="services_modal-description">Service with more then 1.5+ years of experience. Providing quality work to clients and companies. </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon ">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Predictive analysis: </b>
                                    Uses machine learning algorithms and statistics to predict future outcomes, such as sales forecasting and risk assessment
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Data visualization: </b>
                                    Transforms data into a visual format, such as a bar chart, histogram, or pie chart
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Big data analytics: </b>
                                    Analyzes large amounts of data to find patterns and correlations, and make business decisions
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Business intelligence: </b>
                                    Uses sophisticated tools to collect and analyze data from various sources, and includes data mining, reporting, and analysis
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                    <b>Prescriptive analysis: </b>
                                    Uses machine learning and artificial intelligence to predict future outcomes and suggest actions to benefit from them
                                    </p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Machine  <br />Learning</h3>
                    </div>
                    <span className="services_button" onClick={()=>toggleTab(3)}>View More{" "} <i className="uil uil-arrow-right services_button-icon"></i>
                    </span><div className={toggleState === 3 ?"services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}>
                            </i>
                            <h3 className="services_modal-title">Visual Designer</h3>
                            <p className="services_modal-description">Service with more then 3 years of experience. Providing quality work to clients and companies. </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        I Develop the user interface.
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        Web page development.
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        I create user authentication system.
                                    </p>

                                </li>


                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        I position yout company brand.
                                    </p>

                                </li>

                                <li className="services_modal-service ">
                                    <i className="uil uil-check-circle services_modal-icon">

                                    </i>
                                    <p className="services_modal-info">
                                        Build authorization and level of access.
                                    </p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
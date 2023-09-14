import React, { useState } from 'react';
import "./Qualification.css"

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="section qualification">
            <h2 className="section_title"> Qualification </h2>
            <span className="section_subtitle">
                My Personal Journey
            </span>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState ===1 ? "qualification_button qualification_active button--flex": "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}Education
                    </div>


                    <div className={toggleState ===2 ? "qualification_button qualification_active button--flex": "qualification_button button--flex"} onClick={() =>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{" "} Experience
                    </div>
                </div>
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Bachelor
                                </h3>
                                <span className="qualification_subtitle">BSc in Computer Science and Engineering - Rajshahi University of Engineering and Technology, Bangladesh</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    Web Development
                                </h3>
                                <span className="qualification_subtitle">Bangladesh - Programming Hero</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - June 2023
                                </div>
                            </div>

                        </div>


                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Deep Learning
                                </h3>
                                <span className="qualification_subtitle">Online - DeepLearning.AI</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    Data Analysis
                                </h3>
                                <span className="qualification_subtitle">Online - Coursera(Google)</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Web Development
                                </h3>
                                <span className="qualification_subtitle">Bangladesh - Remote</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">
                                    Machine Learning
                                </h3>
                                <span className="qualification_subtitle">Anone - none</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> none - Present
                                </div>
                            </div>

                        </div>


                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Data Analysis
                                </h3>
                                <span className="qualification_subtitle">none - Institute</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> none - none
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
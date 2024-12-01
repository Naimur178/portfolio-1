import React, { useState } from 'react';
import "./Projects.css"

const projects = () => {
    const[toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section_title"> projects </h2>
            <span className="section_subtitle">
                What I have done 
            </span>
            <div className="projects_container container grid">
                <div className="projects_content">
                    <div>
                        <i className="uil uil-web-grid projects_icon"></i>
                        <h3 className="projects_title">Kiddos <br />Summer</h3>
                    </div>
                    
                    <button className='btn' ><a href="https://kiddos-summer.web.app/">Explore</a>
                    </button>
                    
                    
                </div>


                <div className="projects_content">
                    <div>
                        <i className="uil uil-web-grid projects_icon"></i>
                        <h3 className="projects_title">Kids <br />Toys</h3>
                    </div>
                    <button type="button"><a href="https://kids-play-zone.web.app">Explore</a></button>
                   
                    
                </div>

                <div className="projects_content">
                    <div>
                        <i className="uil uil-web-grid projects_icon"></i>
                        <h3 className="projects_title">Chinese <br />Flavores</h3>
                    </div>
                    <button type="button"><a href=" https://the-chinese-flavours.web.app/chefReciepe/124e13b9-2d54-4b2f-a74d-a77b362d6eaa">Explore</a></button>
                   
                    
                </div>
                <div className="projects_content">
                    <div>
                        <i className="uil uil-web-grid projects_icon"></i>
                        <h3 className="projects_title">ASD <br />Detection</h3>
                    </div>
                    <button type="button"><a href=" https://github.com/Naimur178/asd-detect">Explore</a></button>
                   
                    
                </div>
            </div>
        </section>
    );
};

export default projects;
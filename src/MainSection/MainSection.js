import React from 'react';


import './MainSection.scss'


const mainSection = ( props ) => {
    return (
        <div className="main-section text-center">
            <h1 className="">Michelle Huang</h1>
            <h2 className="mb-2">Software Engineer</h2>
            <h3 className="m-4">
                <em>"A ship in port is safe, but that is not what ships are for. Sail out to sea and do new
                    things."</em> - Grace Hopper
            </h3>
            
            
            <div className="social-icons">
                <ul className="list-unstyled text-center">
                    <li>
                        <a className="icon" href="https://github.com/itsmhuang">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="icon" href="https://www.linkedin.com/in/michellehuang8">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="icon" href="https://angel.co/itsmhuang">
                            <i className="fa fa-angellist" aria-hidden="true"></i>
                        </a>
                    </li>
                
                </ul>
            </div>
        
        </div>
    );
    
};

export default mainSection;
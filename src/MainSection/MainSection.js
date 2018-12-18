import React from 'react';


import './MainSection.scss'


const mainSection = ( props ) => {
    return (
        <div className="main-section">
            <h1>Michelle Huang</h1>
            <h2>Software Engineer</h2>
            
            
            <div className="social-icons">
				<ul className="list-unstyled text-center">
					<li>
						<a className="icon" href="https://github.com/itsmhuang">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
					</li>
					<li>
						<a className="icon" href="https://www.linkedin.com/in/michellehuang8" >
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
					</li>
					<li>
						<a className="icon" href="https://twitter.com/itsmhuang">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
					</li>
				</ul>
			</div>
        
        </div>
    );
    
};

export default mainSection;
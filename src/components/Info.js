import React from "react"

function Info() {
    return(
        <div>
            <img src='picture.JPG' className="profile-picture" alt='profile-picture'></img>
            <h2 className="info-header">Paige Lewis</h2>
            <h4 className="info-job-title">Full Stack Developer</h4>
            <p className="info-email">paigeroselewis@gmail.com</p>
            <a href='https://www.linkedin.com/in/paigeroselewis/' target='_blank' rel='noopener noreferrer'>
                <button className="linkedin-button">
                    <img 
                        src='linkedin-logo2.png'
                        alt='linkedin-logo'
                        className="linkedin-logo"
                    />
                </button>
            </a>
            <a href='https://github.com/pxigelewis' target='_blank' rel='noopener noreferrer'>
                <button className="github-button">
                    <img 
                        src='github-logo.png'
                        alt='github-logo'
                        className="github-logo"
                    />
                </button>
            </a>
        </div>
    )
}

export default Info
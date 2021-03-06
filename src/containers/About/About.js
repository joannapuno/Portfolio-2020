import React from 'react';
import classes from './About.css';
import { Element } from 'react-scroll';

import CopyTitle from '../../components/UI/CopyTitle/CopyTitle';
import CopyBody from '../../components/UI/CopyBody/CopyBody';
import ProfilePic from '../../components/ProfilePic/ProfilePic';
import NavArrow from '../../components/UI/NavArrow/NavArrow';

const about = (props) => {
    const arrowStyle = {
        'bottom': '-55px'
    };

    return (
        <Element className={classes.About} id="#about">
            {/* About Image */}
            <ProfilePic width='305px' pageClass='AboutImage' />

            {/* About Copy block */}
            <div className={classes.AboutText}>
                <div>
                    <CopyTitle>who I am</CopyTitle>
                    <CopyBody>I am a UX Engineer. Basically a Front-End developer with an eye for design.
                        <br />
                        <br />
                My passion for adding interactivity and functionality to my designs drove me to development. As a developer with an eye for design, I always have the users and their needs in mind, making the user experience better.
                </CopyBody>
                </div>
                <div>
                    <CopyTitle>..but who am I really!?</CopyTitle>
                    <CopyBody>Well what can I say, I am a geeky gal who loves video games and board games. I enjoy watching movies, going for walks, and crafting. I'll probably be taking pictures of your dog more than you do. Also, I love stationeries!
                </CopyBody>
                </div>
            </div>

            {/* Link */}
            <NavArrow
                anchorPage='#about-work'
                label='what i do'
                style={arrowStyle} />
        </Element>
    );
};

export default about;

import React from 'react';
import classes from './UnderConstruction.css';
import UnderConstructionImg from '../../assets/images/under-construction.png';

const underConstruction = (props) => (
    <div className={classes.UnderConstruction}>
        <div className={classes.Content}>
            <div className={classes.ImageContainer}>
                <img width={"100%"} src={UnderConstructionImg} alt={"Under Construction"}></img>
            </div>
            <div className={classes.Message}>
                Thanks for coming over, but I'm still doing some renovations over here. Come back some other time!
            </div>
        </div>
    </div>
);

export default underConstruction;
import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../hoc/Aux1'
import UpgradeChoice from '../../containers/UpgradeChoice/UpgradeChoice';

const modal = ( props ) => (
    <Aux>
        <Backdrop upgrading={props.upgrading} clicked={props.clicked} />
        <div
            className={classes.Modal}
        style={{
            transform:props.upgrading ? 'translateY(0)' :'translateY(-100vh)',
            opacity: props.upgrading ? '1': '0'
        }}>
           <UpgradeChoice startingPrice={props.startingPrice}/>
        </div>
</Aux>
);

export default modal;
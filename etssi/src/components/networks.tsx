import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp, IconName } from '@fortawesome/fontawesome-svg-core';
import links from '../res/networks.json';
import '../css/networks.css';

export default function Networks(props: { size: SizeProp }) {
    return (
        <>
            {Object.entries(links).map(([network, link]) => 
                <div className='network' key={network}>
                    <a href={link}>
                        <FontAwesomeIcon icon={['fab', network as IconName]} size={props.size}/>
                    </a>
                </div>
            )}
        </>
    )
}

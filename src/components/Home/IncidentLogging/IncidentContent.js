import React, {useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { Datalist } from '../../../constants/static';
import IncidentCard from './IncidentCard';
import ActionCard from "../../common/ActionCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import './style.scss';

const MenuItem = ({text, selected}) => {
    return (
        <div key={text} style={{height: 'calc( 100vh - 185px )', padding: '10px'}}>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
        </div>
    )
};

const IncidentContent = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;
    return (
        <div className='incident-multi-panel'>
            <div className='incident-content'>
                <IncidentCard title="Actions">
                    <div style={{
                        padding: `0 ${chevronWidth}px`,
                        height: 'calc( 100vh - 185px )'
                    }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={1}
                            gutter={20}
                            leftChevron={<FontAwesomeIcon className="arrow arrow-prev" icon={faArrowLeft}/>}
                            rightChevron={<FontAwesomeIcon className="arrow arrow-next" icon={faArrowRight}/>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            {
                                Datalist.map(el => (
                                    <MenuItem text={el.name} key={el.name} selected={activeItemIndex}/>
                                ))
                            }
                        </ItemsCarousel>
                    </div>
                </IncidentCard>
                <IncidentCard title="Updates"/>
                <IncidentCard title="Announcement"/>
            </div>
        </div>
    )
};

export default IncidentContent

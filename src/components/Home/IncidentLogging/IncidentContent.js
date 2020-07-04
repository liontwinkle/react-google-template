import React, {useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {Datalist} from '../../../constants/static';
import IncidentCard from './IncidentCard';
import ActionCard from "../../common/ActionCard";

import './style.scss';

const MenuItem = ({text, selected}) => {
    return (
        <div key={text} className="action-carousel-item">
            <IncidentCard title={text}>
                <ActionCard type={text} index={1} />
                <ActionCard type={text} index={2} />
                <ActionCard type={text} index={3} />
                <ActionCard type={text} index={4} />
            </IncidentCard>
        </div>
    )
};

const IncidentContent = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;
    return (
        <div className='chat-content-body'>
            <div style={{
                padding: `0 ${chevronWidth}px`,
                height: '100%',
                minWidth: '1500px',
            }}>
                <ItemsCarousel
                    infiniteLoop={false}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={chevronWidth}
                    disableSwipe={false}
                    alwaysShowChevrons={false}
                    numberOfCards={4}
                    slidesToScroll={4}
                    outsideChevron={true}
                    showSlither={false}
                    firstAndLastGutter={false}
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    leftChevron={<FontAwesomeIcon className="arrow arrow-prev" icon={faArrowLeft}/>}
                    rightChevron={<FontAwesomeIcon className="arrow arrow-next" icon={faArrowRight}/>}
                >
                    {
                        Datalist.map(el => (
                            <MenuItem text={el.name} key={el.name} selected={activeItemIndex}/>
                        ))
                    }
                </ItemsCarousel>
            </div>
        </div>
    )
};

export default IncidentContent

import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Datalist } from '../../../constants/static';
import IncidentCard from './IncidentCard';
import ActionCard from '../../common/ActionCard';

import './style.scss';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ text }) => (
  <div key={text} className="action-carousel-item">
    <IncidentCard title={text}>
      <ActionCard type={text} index={1} />
      <ActionCard type={text} index={2} />
      <ActionCard type={text} index={3} />
      <ActionCard type={text} index={4} />
    </IncidentCard>
  </div>
);

// Breakpoints to limit carousel columns dependend of frame width
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1000, itemsToShow: 3 },
  { width: 1300, itemsToShow: 4 },
  { width: 1600, itemsToShow: 5 },
  { width: 1900, itemsToShow: 6 },
];

const IncidentContent = () => {
  const [activeItemIndex] = useState(0);
  let CarouselElement = null;
  return (
    <div className="chat-content-body">
      <div style={{
        height: '100%',
      }}
      >
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          pagination={false}
          easing="cubic-bezier(.54,.04,.18,.98)"
          transitionMs={500}
          ref={(carousel) => { CarouselElement = carousel; }}
        >
          {
            Datalist.map((el) => (
              <MenuItem text={el.name} key={el.name} selected={activeItemIndex} />
            ))
          }
        </Carousel>
      </div>
      <FontAwesomeIcon className="arrow arrow-prev" icon={faArrowLeft} onClick={() => CarouselElement.slidePrev()} />
      <FontAwesomeIcon className="arrow arrow-next" icon={faArrowRight} onClick={() => CarouselElement.slideNext()} />
    </div>
  );
};

export default IncidentContent;

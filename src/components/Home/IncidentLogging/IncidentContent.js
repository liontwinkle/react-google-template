import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { Datalist } from '../../../constants/static';
import IncidentCard from './IncidentCard';
import ActionCard from '../../common/ActionCard';
import IncidentDetails from './IncidentDetails';

import './style.scss';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ text, handleClick, CarouselElementIndex }) => (
  <div key={text} className="action-carousel-item">
    <IncidentCard title={text}>
      <ActionCard type={text} index={1} handleClick={handleClick} CEIndex={CarouselElementIndex} />
      <ActionCard type={text} index={2} handleClick={handleClick} CEIndex={CarouselElementIndex} />
      <ActionCard type={text} index={3} handleClick={handleClick} CEIndex={CarouselElementIndex} />
      <ActionCard type={text} index={4} handleClick={handleClick} CEIndex={CarouselElementIndex} />
    </IncidentCard>
  </div>
);

// Breakpoints to limit carousel columns dependend of frame width
const defaultBreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1000, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
  { width: 1800, itemsToShow: 5 },
  { width: 2200, itemsToShow: 6 },
];
const defaultParentDivClass = 'chat-content-body';

class IncidentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakPoints: defaultBreakPoints,
      parentDivClass: defaultParentDivClass,
    };
    this.CarouselElement = React.createRef();
  }

  // Open and close Action card details
  incidentDetails = (cardIndex, elementIndex) => {
    console.log('Card Num: ', cardIndex); // fixme
    console.log('Column Num: ', elementIndex); // fixme

    if (elementIndex != null) {
      const newBreakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 0 },
      ];
      const newParentDivClass = 'chat-content-body incident-opened';
      this.setState({
        breakPoints: newBreakPoints,
        parentDivClass: newParentDivClass,
      }, function () {
        this.CarouselElement.goTo(Number(elementIndex));
      });
    } else {
      this.setState({
        breakPoints: defaultBreakPoints,
        parentDivClass: defaultParentDivClass,
      });
    }
  };

  moveCarousel = (direction) => {
    this.incidentDetails(null, null); // Close Action details at first
    if (direction === 'prev') {
      this.CarouselElement.slidePrev();
    } else if (direction === 'next') {
      this.CarouselElement.slideNext();
    }
  };

  render() {
    return (
      <div className={this.state.parentDivClass}>
        <div className="carousel">
          <Carousel
            breakPoints={this.state.breakPoints}
            showArrows={false}
            pagination={false}
            easing="cubic-bezier(.54,.04,.18,.98)"
            transitionMs={500}
            ref={(carousel) => { this.CarouselElement = carousel; }}
          >
            {
              Datalist.map((el, index) => (
                <MenuItem text={el.name} key={el.name} handleClick={this.incidentDetails} CarouselElementIndex={index} />
              ))
            }
          </Carousel>
        </div>
        <div className="incident-details">
          <IncidentDetails handleClick={this.incidentDetails} />
        </div>
        <FontAwesomeIcon className="arrow arrow-prev" icon={faArrowLeft} onClick={() => this.moveCarousel('prev')} />
        <FontAwesomeIcon className="arrow arrow-next" icon={faArrowRight} onClick={() => this.moveCarousel('next')} />

      </div>
    );
  }
}

export default IncidentContent;

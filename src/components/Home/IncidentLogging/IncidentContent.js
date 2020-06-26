import React, {useState} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import DataList from '../../../constants/static';
import IncidentCard from './IncidentCard';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import ActionCard from "../../common/ActionCard";

import './style.scss';

const MenuItem = ({text, selected}) => {
    return (
        <>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
        </>
    )
};

export const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el

        return <MenuItem text={name} key={name} selected={selected}/>
    })

const Arrow = ({text, className}) => {
    return <div className={className}>{text}</div>
}

const IncidentContent = () => {
    const [selected, setSelected] = useState('')

    const menuItems = Menu(DataList, selected)
    const ArrowLeft = Arrow({text: <FontAwesomeIcon icon={faArrowLeft}/>, className: 'arrow-prev'})
    const ArrowRight = Arrow({text: <FontAwesomeIcon icon={faArrowRight}/>, className: 'arrow-next'})

    const onSelect = key => {
        setSelected(key)
    }

    return (
        <div className='incident-multi-panel'>
            <div className='incident-content'>
                <IncidentCard title="Actions">
                    <ScrollMenu
                        data={menuItems}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={onSelect}
                        transition={2}
                    />
                </IncidentCard>
                <IncidentCard title="Updates"/>
                <IncidentCard title="Announcement"/>
            </div>

        </div>
    )
}

export default IncidentContent

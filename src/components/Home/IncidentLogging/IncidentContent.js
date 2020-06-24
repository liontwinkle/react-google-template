import React, { useState } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import DataList from '../../../constants/static';

import './style.scss';

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
}

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el

    return <MenuItem text={name} key={name} selected={selected} />
  })

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>
}

const IncidentContent = () => {
  const [selected, setSelected] = useState('')

  const menuItems = Menu(DataList, selected)
  const ArrowLeft = Arrow({ text: <div>prev</div>, className: 'arrow-prev' })
  const ArrowRight = Arrow({ text: <div>next</div>, className: 'arrow-next' })

  const onSelect = key => {
    setSelected(key)
  }

  return (
    <div className='incident-multi-panel'>
      <ScrollMenu
        data={menuItems}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        transition={1}
      />
    </div>
  )
}

export default IncidentContent

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import './styles.css'
import OutlinedCard from '../Card'

let list = [
  { name: 'item1' },
  { name: 'item2______________' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7______________' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' },
  { name: 'item14______________' },
  { name: 'item15' },
  { name: 'item16' },
  { name: 'item17' },
  { name: 'item18' },
  { name: 'item19' },
  { name: 'item20' },
  { name: 'item21' },
  { name: 'item22______________' },
  { name: 'item23' },
  { name: 'item24' },
  { name: 'item25' },
]

// eslint-disable-next-line react/prop-types
const MenuItem = ({ text, selected }) => {
  return <OutlinedCard className={`menu-item ${selected ? 'active' : ''}`} />
}

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el
    const onClick = () => console.log('original onClick ', name)
    return (
      <MenuItem text={name} key={name} selected={selected} onClick={onClick} />
    )
  })

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>
}
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' })
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })

class App extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: 'item1',
    scrollToSelected: false,
    translate: undefined,
    transition: 0.4,
    wheel: true,
    showList: true,
    inertiascrolling: false,
    slowdownFactor: 0.25,
  }

  constructor(props) {
    super(props)
    this.menu = null
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected)
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState
    const { alignCenter: alignCenterNew } = this.state
    if (alignCenter !== alignCenterNew && this.menu) {
      this.menu.setInitial()
      this.menu.forceUpdate()
      this.forceUpdate()
    }
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`)
    this.setState({ translate })
  }

  onFirstItemVisible = () => {
    console.log('first item is visible')
  }

  onLastItemVisible = () => {
    console.log('last item is visible')

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }))
    list = list.concat(newItems)
    this.menuItems = Menu(list, list.slice(-1)[0].name)
    this.setState({
      itemsCount: list.length,
      selected: this.state.selected,
    })
  }

  onSelect = (key) => {
    console.log(`onSelect: ${key}`)
    this.setState({ selected: key })
  }

  setItemsCount = (ev) => {
    const { itemsCount = list.length, selected } = this.state
    const val = +ev.target.value
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length
    const itemsCountChanged = itemsCount !== itemsCountNew

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected)
      this.setState({
        itemsCount: itemsCountNew,
      })
    }
  }

  setSlowdownFactor = (ev) => {
    this.setState({ slowdownFactor: ev.target.value })
  }

  setSelected = (ev) => {
    const { value } = ev.target
    this.setState({ selected: String(value) })
  }

  toggle = () => {
    this.setState({ showList: !this.state.showList })
  }

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      selected,
      translate,
      transition,
      wheel,
      showList,
      scrollToSelected,
      inertiascrolling,
      slowdownFactor,
    } = this.state

    const menu = this.menuItems

    return (
      <div className="App">
        {showList && menu && (
          <ScrollMenu
            alignCenter={alignCenter}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            clickWhenDrag={clickWhenDrag}
            data={menu}
            dragging={dragging}
            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            inertiaScrolling={inertiascrolling}
            inertiaScrollingSlowdown={slowdownFactor}
            onFirstItemVisible={this.onFirstItemVisible}
            onLastItemVisible={this.onLastItemVisible}
            onSelect={this.onSelect}
            onUpdate={this.onUpdate}
            ref={(el) => (this.menu = el)}
            rtl={false}
            scrollBy={0}
            scrollToSelected={scrollToSelected}
            selected={selected}
            transition={+transition}
            translate={translate}
            useButtonRole={true}
            wheel={wheel}
          />
        )}
      </div>
    )
  }
}

export default App

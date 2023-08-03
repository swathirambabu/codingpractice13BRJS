// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTab(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tab-list">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

// Write your code here
import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {imageUrl, appName} = appsDetails

  return (
    <li className="app-list">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem

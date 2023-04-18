import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  console.log(isStarred)

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          data-testid="star"
          className="star-button"
          onClick={onClickStar}
          type="button"
        >
          <img src={starImg} alt="star" />
        </button>
      </div>

      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem

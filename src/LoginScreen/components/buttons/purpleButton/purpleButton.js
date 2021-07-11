import './purpleButton.css'

const PurpleButton = (text, onClick) => {
    return (
        <button onClick={onClick} className="purple-button">{text}</button>
    )
}

export default PurpleButton
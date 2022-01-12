import './FooterText.css'

const FooterText = (props) => {
    return (
        <div className="FooterText">
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{props.date.toString()}</div>

        </div>
    )
}
export default FooterText;
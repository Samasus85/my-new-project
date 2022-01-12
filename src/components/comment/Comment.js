import Avatar from '../avatar/Avatar';
import FooterText from '../footer/FooterText';
import UserInfo from '../userInfo/UserInfo';
import './Comment.css';

const Comment = (props) => {
    console.log(props)
    return (
        < div className='Comment' >
            <UserInfo author={props.author} />
            <FooterText text={props.text} date={props.date} />
        </div >
    );
}
export default Comment;
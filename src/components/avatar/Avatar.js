import './Avatar.css'
const Avatar = () => {
    return (
        <div>
            <img className="Avatar" src="{props.author.avatarUrl}" alt="{props.author-name}" />
        </div>
    )
}
export default Avatar;
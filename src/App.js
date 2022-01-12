import './App.css';
// import { img } from '../public/avatar'
import Comment from './components/comment/Comment';
import Card from './ui/Cards/Card';

const commentData = {
  date: new Date(),
  text: 'Learn React is awesome!',
  author: {
    name: 'Kitty',
    avatarUrl: '../public/avatar.jfif',
  },
};

function App() {
  return (
    <div>
      <Card className="App">
        <Comment author={commentData.author} date={commentData.date} text={commentData.text} />
        <Comment author={commentData.author} date={commentData.date} text={commentData.text} />

      </Card>

    </div>
  );
}

export default App;

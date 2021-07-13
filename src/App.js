import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from'./components/ChatFeed';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return(
    <ChatEngine
        height="100vh"
        projectID="17157132-df56-46c1-b0cc-819694e91ebf"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
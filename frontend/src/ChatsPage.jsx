import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('f7666af7-52a8-4b00-940e-2e2b43f4d1a4', props.user.username, props.user.secret)
  return <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
  </div>
};
export default ChatsPage;
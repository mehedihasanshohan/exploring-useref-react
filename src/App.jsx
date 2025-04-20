import './App.css'
import CatFriends from './components/CatFriends'
import Form from './components/Form'
import VideoPlayer from './components/VideoPlayer'

function App() {

  return (
   <>
    <h2 className='text-green-600 text-4xl font-extrabold text-center'>tour with UseRef</h2>
    <Form></Form>
    <CatFriends></CatFriends>
    <VideoPlayer></VideoPlayer>
   </>
  )
}

export default App

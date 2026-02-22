import { useState } from 'react'
import './App.css'
import LeftDrawer from './LeftDrawer/LeftDrawer'
import Banner from './Banner/Banner'
import MainViewDiv from './MainViewDiv/MainViewDiv'

function App() {
  const [MainView, setMainView] = useState('')

  return (
      <div>
        <LeftDrawer setMainView={setMainView} />
        <Banner MainView={MainView} />
        <MainViewDiv MainView={MainView} />
      </div>
  )
}

export default App

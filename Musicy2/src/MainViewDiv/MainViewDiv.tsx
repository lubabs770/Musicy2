import './MainViewDiv.css'
import OnEmpty from './onEmpty'
import Home from './onHome'
import Artists from './onArtists'
import Scrobbly from './onScrobbly'
import Preferences from './onPreferences'
 

function MainViewDiv({ MainView }) {

if (MainView === 'Home'){return(<div><Home /></div>)}
if (MainView === 'Artists'){return(<div><Artists /></div>)}
if (MainView === 'Scrobbly'){return(<div><Scrobbly /></div>)}
if (MainView === 'Preferences'){return(<div><Preferences /></div>)}
 else return (<div><OnEmpty /></div>)

};


export default MainViewDiv

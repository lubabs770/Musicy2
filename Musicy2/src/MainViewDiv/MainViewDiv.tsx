import './MainViewDiv.css'
import OnEmpty from './onEmpty'
import Home from './Home'
import Artists from './Artists'
import Scrobbly from './Scrobbly'
import Preferences from './Preferences'
 

function MainViewDiv({ MainView }) {

if (MainView === 'home'){return(<div><Home /></div>)}
if (MainView === 'Artists'){return(<div><Artists /></div>)}
if (MainView === 'Scrobbly'){return(<div><Scrobbly /></div>)}
if (MainView === 'Preferences'){return(<div><Preferences /></div>)}
 else return (<div><OnEmpty /></div>)

};


export default MainViewDiv

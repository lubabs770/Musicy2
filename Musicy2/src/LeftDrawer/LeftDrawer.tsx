import { useState } from 'react'
import './LeftDrawer.css'

function LeftDrawer({ setMainView }) {



return (
    <div>
        <ul>
            <li><button className="leftdrawerbutton" onClick={() => setMainView('Home')}>Home</button></li>
            <li><button className="leftdrawerbutton" onClick={() => setMainView('Artists')}>Artists</button></li>
            <li><button className="leftdrawerbutton" onClick={() => setMainView('Scrobbly')}>Scrobbly</button></li>
            <li><button className="leftdrawerbutton" onClick={() => setMainView('Preferences')}>Preferences</button></li>
        </ul>
    </div>
)
};

export default LeftDrawer

import { useState } from 'react'
import './LeftDrawer.css'

function LeftDrawer({ setMainView }) {



return (
    <div>
        <ul>
            <li><button onClick={() => setMainView('Home')}>Home</button></li>
            <li><button onClick={() => setMainView('Artists')}>Artists</button></li>
            <li><button onClick={() => setMainView('Scrobbly')}>Scrobbly</button></li>
            <li><button onClick={() => setMainView('Preferences')}>Preferences</button></li>
        </ul>
    </div>
)
};

export default LeftDrawer
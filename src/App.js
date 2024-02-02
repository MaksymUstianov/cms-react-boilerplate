import React from 'react';
import './App.scss';
import SpinningLogo from './components/SpinningLogo';
import Card from './components/Card';
import reactLogo from './images/logo.svg';
import sprocketLogo from './images/sprocket.svg';

function App({moduleData}) {
    // eslint-disable-next-line no-console
    console.log(
        'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
        moduleData,
    );
    return (
        <div className="cms-react-boilerplate__container">
            <div className="spinning-logo__container">
                <SpinningLogo src={reactLogo} alt="react logo"/>
                <SpinningLogo
                    src={sprocketLogo}
                    alt="sprocket logo"
                    isSprocket={true}
                />
            </div>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            {moduleData.event_group.length > 0 && moduleData.event_group.map((item) => {
                const timestamp = item.event_start;
                const date = new Date(timestamp);
                const options = { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
                const readableDateTime = date.toLocaleString('en-US', options);

                return <div className="jake-dl__item">
                    <dt className="jake-dl__item-title">{item.event_name}</dt>
                    <dd className="jake-dl__item-desc">{item.event_description}</dd>
                    <dd className="jake-dl__item-desc">{readableDateTime}</dd>
                    <img src={`${item.event_image.src}`} alt={'event-image'}/>
                </div>
            })}
            <Card initialClickCount={moduleData.initial_count}/>
        </div>
    );
}

export default App;

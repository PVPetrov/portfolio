import React from 'react';
import Page from '../components/Page';

import './Home.sass';

const Home = () => {
  return (
    <Page>
      <div className="home">
        <h1>
          <code>> Welcome!</code>
        </h1>
        <h1>
          <code>
            > I am <span className="red">Petar</span>,
          </code>
        </h1>
        <h1>
          <code>
            > I <span className="red">love</span> writing{" "}
            <span className="red">code</span>
          </code>
        </h1>
        <h1>
          <code>
            <span className="red">&#38;&#38;</span> I am looking for new{" "}
            <span className="red">challanges!</span>
          </code>
        </h1>
      </div>
    </Page>
  );
}

export default Home;

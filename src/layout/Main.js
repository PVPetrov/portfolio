import React from 'react';
import './Main.sass';

const Main = ({ navigation = null, main = null, footer = null }) => {
  return (
    <div className="app-container">
      <header className="app-header">
        {navigation}
      </header>
      <main className="app-main">
        {main}
      </main>
      <footer className="app-footer">
        {footer}
      </footer>
    </div>
  );
}

export default Main;

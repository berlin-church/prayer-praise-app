import * as React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './styles.css';

class Sidebar extends React.PureComponent<{}, {}> {

  render() {
    return (
      <div className={styles.sidebar}>
        <ul className={styles.sidelinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prayer">1</Link>
          </li>
          <li>
            <Link to="/praise">2</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default Sidebar;

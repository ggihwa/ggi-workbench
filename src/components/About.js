import React, {Component} from 'react';
import tra from '../l10n';

class About extends Component {
  render() {
    return (
      <div>
        {tra.get('topBar.loginButton.logout')}
      </div>
    );
  }
}

export default About;

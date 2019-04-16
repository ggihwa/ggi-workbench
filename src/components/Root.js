import React, {Component} from 'react';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 1,
    };
  }

  componentDidMount() {
    const url =
      'https://api.store.leagueoflegends.co.kr/catalog/KR/v1/items?language=ko_KR&inventorytype=CHAMPION_SKIN&itemid=39003';

    fetch(url)
      .then(data => {return data.json()})
      .then(data => console.log(data));

    // this.setState({
    //   temp: 1,
    // });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.temp < 2) {
      this.setState({temp: 1});
    }
  }

  render() {
    return <div>Root{this.state.temp}</div>;
  }
}

export default Root;

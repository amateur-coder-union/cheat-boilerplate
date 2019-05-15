import React, { useState } from 'react';
import { Button, Notify } from 'zent';

import { notification } from '../../utils';

import './index.scss';

function InitButton() {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const clickFunc = async () => {
    try {
      setLoading(true);
      const result = await window._init();
      Notify.success(result);
      if (result.includes('link')) setDisable(true);
    } catch (error) {
      notification(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button onClick={clickFunc} loading={loading} disabled={disable}>
      初始化
    </Button>
  );
}

function ButtonItem(props) {
  const { name, onClick } = props;
  const [loading, setLoading] = useState(false);
  const clickFunc = async () => {
    try {
      setLoading(true);
      const result = await onClick();
      return result;
    } catch (error) {
      notification(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button onClick={clickFunc} loading={loading}>
      {name}
    </Button>
  );
}

class Home extends React.PureComponent {
  fight = null;

  onJmpTst = () => {
    const { history } = this.props;
    history && history.push('/page2');
  };

  onClickAdvanture = async () => {
    if (this.fight == null) this.fight = await window._fight_start();
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <InitButton />
        <ButtonItem name={'打怪'} onClick={this.onClickAdvanture} />
      </div>
    );
  }
}

export default Home;

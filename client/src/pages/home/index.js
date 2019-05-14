import React, { useState } from 'react';
import { Button, Notify, Input, Checkbox } from 'zent';

import './index.scss';

function notification(title) {
  new Notification(title);
}

function Content() {
  const [tickets, setTickets] = useState(0);
  const [increase, setIncrease] = useState(false);
  return (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
        <span className={'label'}>tickets：</span>
        <Input
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className={'input-warpper'}
        />
        <Button onClick={() => notification(`开始开车，tickets: ${tickets}`)}>
          开车
        </Button>
      </div>
      <Checkbox
        style={{ marginLeft: 70 }}
        checked={increase}
        onChange={(e) => setIncrease(e.target.checked)}
      >
        开启增幅器
      </Checkbox>
    </React.Fragment>
  );
}

class Home extends React.PureComponent {
  control = null;

  onJmpTst = () => {
    const { history } = this.props;
    history && history.push('/page2');
  };

  testLink = async () => {
    Notify.success(await window._control('123'));
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Content />
      </div>
    );
  }
}

export default Home;

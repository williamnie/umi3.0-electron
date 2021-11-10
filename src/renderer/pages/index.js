import React from 'react';
import { throttle } from 'lodash-es';
import { Card, Typography, Toast, Button } from '@douyinfe/semi-ui';

const Index = () => {
  const { Text } = Typography;


  const opts = {
    content: 'Hi, Bytedance dance dance',
    duration: 3,
  };

  const handleClose = () => {
    throttled.cancel();
  };
  const throttleOpts = {
    content: 'Hi, Bytedance dance dance',
    duration: 10,
    onClose: handleClose,
  };
  const throttled = throttle(() => Toast.info(throttleOpts), 10000, { trailing: false });
  
  return (
    <div>
      <h2>Semi Design</h2>
      <Card
        title='Semi Design'
        style={{ maxWidth: 360 }}
        headerExtraContent={
          <Text link>
            更多
          </Text>
        }
      >
        Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
      </Card>

      <div>
        <Button onClick={() => Toast.info(opts)}>Display Toast</Button>
        <br />
        <br />
        <Button onClick={throttled}>Throttled Toast</Button>
      </div>
    </div>

  );
}

export default Index
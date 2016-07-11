import React from 'react';
import Button from '../index';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .addWithInfo(
    'default',
    'A button',
    () => (
      <Button onClick={action('onClick')} label="Button" />
    )
);

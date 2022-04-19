import React from 'react';

import OverView from '~/views/natures/OverView';
import { render, screen } from '~/views/test-utils';

describe('OverView tests', () => {
  describe('Initial render', () => {
    it('page title', () => {
      render(<OverView />);

      expect(screen.getByText('OverView')).toBeTruthy();
    });
  });
});

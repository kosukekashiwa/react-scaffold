import React from 'react';
import { render, screen } from '~/views/test-utils';
import OverView from '~/views/natures/OverView';

describe('OverView tests', () => {
  describe('Initial render', () => {
    it('page title', () => {
      render(<OverView />);

      expect(screen.getByText('OverView')).toBeTruthy();
    });
  });
});

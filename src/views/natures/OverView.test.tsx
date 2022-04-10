import React from 'react';
import { render, screen } from '../test-utils';
import OverView from './OverView';

describe('OverView tests', () => {
  describe('Initial render', () => {
    it('page title', () => {
      render(<OverView />);

      expect(screen.getByText('OverView')).toBeTruthy();
    });
  });
});

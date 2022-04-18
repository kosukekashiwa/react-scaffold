import React from 'react';
import { render, fireEvent } from '~/views/test-utils';
import Button from '~/views/components/actions/Button';

describe('Button tests', () => {
  describe('initisal rendering tests', () => {
    it('childrenで受け取った文字列を表示', () => {
      const handler = jest.fn();

      const result = render(
        <Button variant="contained" color="primary" onClick={handler}>
          Test
        </Button>,
      );

      expect(result.getByText('Test')).toBeTruthy();
    });
  });

  describe('action tests', () => {
    it('Buttonをクリックするとpropsで設定したイベントハンドラが呼ばれる', () => {
      const handler = jest.fn();

      const result = render(
        <Button variant="contained" color="primary" onClick={handler}>
          Test
        </Button>,
      );
      fireEvent.click(result.getByText('Test'));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).not.toHaveBeenCalledTimes(2);
    });

    it('Buttonを2回クリックするとpropsで設定したイベントハンドラが2回呼ばれる', () => {
      const handler = jest.fn();

      const result = render(
        <Button variant="contained" color="primary" onClick={handler}>
          Test
        </Button>,
      );
      fireEvent.click(result.getByText('Test'));
      fireEvent.click(result.getByText('Test'));

      expect(handler).toHaveBeenCalledTimes(2);
    });
  });
});

import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Keyboard } from 'src/component/container/Keyboard';
import { row1, row2, row3, row4, row5, row6 } from 'src/const/rows';

describe('Keyboard component Row1', () => {
  it.each(row1)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    // keydown イベントをシミュレート
    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    // keyup イベントをシミュレート
    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component Row2', () => {
  it.each(row2)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component Row3', () => {
  it.each(row3)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component Row4', () => {
  it.each(row4)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component Row5', () => {
  it.each(row5)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component Row6', () => {
  it.each(row6)('updates the key state on keydown and keyup events', (key) => {
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });

    const keyElement = container.querySelector(`[data-key-code="${key.code}"]`);
    expect(keyElement).not.toBeNull();
    
    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('#e5e7eb');
      expect(keyStyles.getPropertyValue('--scale')).toBe('0.95');
    }

    fireEvent.keyUp(window, { code: key.code });

    if (keyElement) {
      const keyStyles = getComputedStyle(keyElement);
      expect(keyStyles.getPropertyValue('--bg-color')).toBe('transparent');
      expect(keyStyles.getPropertyValue('--scale')).toBe('1');
    }
  });
});

describe('Keyboard component ShiftKey', () => {
  it('updates the key state on keydown and keyup events', () => {
    render(<Keyboard />);
    // Shiftキーの押下をシミュレート
    fireEvent.keyDown(window, { code: 'ShiftLeft' });

    // 例: '1'キーのテキストが'!'に変わることを確認
    expect(screen.getByText('!')).toBeInTheDocument();

    // Shiftキーの放出をシミュレート
    fireEvent.keyUp(window, { code: 'ShiftLeft' });

    // Shiftキーが放された後、テキストが元に戻ることを確認
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
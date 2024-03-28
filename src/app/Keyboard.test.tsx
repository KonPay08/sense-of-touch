import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import { Keyboard } from 'src/app/Keyboard';
import { row1, row2, row3, row4, row5, row6 } from 'src/rows';


describe('Keyboard component Row1', () => {
  it.each(row1)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    // keydown イベントをシミュレート
    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    // keyup イベントをシミュレート
    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component Row2', () => {
  it.each(row2)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component Row3', () => {
  it.each(row3)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component Row4', () => {
  it.each(row4)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component Row5', () => {
  it.each(row5)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component Row6', () => {
  it.each(row6)('updates the key state on keydown and keyup events', (key) => {
    
    const { container } = render(<Keyboard />);

    fireEvent.keyDown(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(1);

    fireEvent.keyUp(window, { code: key.code });
    expect(container.getElementsByClassName('bg-gray-300 scale-95').length).toEqual(0);
  });
});

describe('Keyboard component ShiftKey', () => {
  it('updates the key state on keydown and keyup events', () => {
    
    render(<Keyboard />);
    // Shiftキーの押下をシミュレート
    fireEvent.keyDown(window, { code: 'ShiftLeft' });

    // 例: 'a'キーのテキストが大文字の'A'に変わることを確認
    expect(screen.getByText('!')).toBeInTheDocument();

    // Shiftキーの放出をシミュレート
    fireEvent.keyUp(window, { code: 'ShiftLeft' });

    // Shiftキーが放された後、テキストが元に戻ることを確認
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

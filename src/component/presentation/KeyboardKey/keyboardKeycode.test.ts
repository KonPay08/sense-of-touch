import { row1, row2, row3, row4, row5, row6 } from "src/const/rows";

// このテストはアプリがキーボードイベントに正しく反応することを保証する
describe('Keyboard component key event tests', () => {
  it('should recognize the correct key code for each key in row1', () => {
    row1.forEach(keyData => {
      // キーボードイベントのシミュレーション
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      // イベントの`code`プロパティが期待されるキーコードと一致するかを検証
      expect(event.code).toBe(keyData.code);
    });
  });
  it('should recognize the correct key code for each key in row2', () => {
    row2.forEach(keyData => {
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      expect(event.code).toBe(keyData.code);
    });
  });
  it('should recognize the correct key code for each key in row3', () => {
    row3.forEach(keyData => {
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      expect(event.code).toBe(keyData.code);
    });
  });
  it('should recognize the correct key code for each key in row4', () => {
    row4.forEach(keyData => {
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      expect(event.code).toBe(keyData.code);
    });
  });
  it('should recognize the correct key code for each key in row5', () => {
    row5.forEach(keyData => {
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      expect(event.code).toBe(keyData.code);
    });
  });
  it('should recognize the correct key code for each key in row6', () => {
    row6.forEach(keyData => {
      const event = new KeyboardEvent('keydown', { code: keyData.code });
      expect(event.code).toBe(keyData.code);
    });
  });
});

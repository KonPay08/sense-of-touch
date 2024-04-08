import { app, BrowserWindow } from "electron";
import * as path from "path";
import config from "config";

const WINDOW_WIDTH = 820;
const WINDOW_HEIGHT = 375;
const ENV_NAME = config.get<string>("ENV_NAME");
const CLIENT_URL = config.get<string>("CLIENT_URL");

const createWindow = () => {
  const win = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    webPreferences: {
      preload: path.join(__dirname, 'dist', 'preload.js'),
    },
  });

  // for development
  if(ENV_NAME === "development") {
    win.loadURL(CLIENT_URL);
  }

  // TODO: for production

};

(async() => {
  await app.whenReady();
  createWindow();

  // MacOS限定
  // ウィンドウが閉じられてもアプリケーションは終了しなのでこの処理が必要
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
})();

 // MacOS以外の場合
 // ウィンドウが全てクローズしたらアプリケーションを終了する
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
import { app, BrowserWindow } from 'electron'
import * as path from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

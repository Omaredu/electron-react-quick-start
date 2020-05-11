'use strict'
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev ? true : false 
        }
    })

    //win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)

    win.loadURL(isDev ? `http://localhost:3000/')}` : `file://${path.join(__dirname, '../build/index.html')}`)
}

app.allowRendererProcessReuse = true

app.whenReady().then(createWindow)
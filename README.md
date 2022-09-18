# web_audio_api_study

### Install the project
Will install the http-server
```bash
npm install
```

then to start the project 
```bash
npm start
```

### Notes
I tried to export the
```js
const audioCtx = new AudioContext();
```
in order to use one `AudioContext()` in multiple files so that every example from the book to be in a different file while using on `AudioContext()`.
To do that, you must export as modules and also put the `type = "module"` on every script input file on index.html,
but without a server it causes the error of cors policy. Using the `http-server` solves the problem and then you can export and import modules. Also you must put the `"type": "module",` in the `package.json`

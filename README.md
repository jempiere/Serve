# Serve
## Welcome to Serve!
---

Hi! Welcome to `Serve`, my Express Server Template bundle.

If you, like me, are ***sick and tired*** of dealing with writing an Express server every time you want to host your code (Damn CORS errors!), then you are **NOT ALONE**. With this template, you can simply drop your files into `rsc` (there are some starter files there for you) and get started!

## What is Serve?
---

`Serve` is a simple webserver setup. You run `node index.mjs` and you'll have a parent server running @ localhost::3000, and at the click of a button a child server @ localhost:2500!

## Dependencies
---

Besides vanilla Node.js with ES6 syntax, `Serve` also depends on the node modules`express`, `compression`, and `socket.io`. You can install those with:

`npm i express compression socket.io`. You **cannot** simply use `npm install` because `Serve` makes use of ES6 dynamic imports.

## Getting Started
---

Getting started with `Serve` is super easy! Just note a few things:

* By default, `Serve` host's the parent server on port `3000` of it's parent machine. If for whatever reason you want to change this, it's a manual process as of right now. A simple `TOML` config file is in the works! Feel free to look through the code.
* In the `rsc` directory, there are a few default files. All of the code in these files -- the `<script>` and `<button>` tags in `index.html`, the `var io` in `script.mjs`, and the `button#kill` rules in `style.css` are all crucial to be able to shut down the child server. If you wish to do so with the command line instead, you may run this command to kill the child process:
```zsh
function kill_port(){
  kill -9 $(lsof -t -i:$1)
}

# USAGE:
# $ kill_port 2500
# > *kills processes on port 2500*
```
* This function is a `zsh` function, but it *should* be posix so feel free to run it in other places as well (`fish`,`bash`,`sh`, etc)

# Blockchain CTF Template: solve all your problems with TypeScript and Ethereum

### Installation

```shell
yarn install
```

Do you see a big diff in git when cloning on Linux? Set `git config --global core.autocrlf true`.

### Solidity Compilation

Using hardhat:

```shell
yarn run compile
```

Using forge:

```shell
forge build
```

### Using python

My preferred installation of python is to use pyenv. Then use mkvenv script to set your venv in your folder.

### Run against CTF RPC

First, make sure your `.env` file is created and is filled with relevant info. Refer to `.env.template`.

```shell
yarn run ctf
```

### Run against local network

You could set up a docker but I found deploying the setup contracts myself to be easiest.

```shell
yarn run local
```

Have fun hacking!

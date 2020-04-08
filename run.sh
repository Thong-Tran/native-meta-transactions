#!/bin/bash
docker run -ti --rm --name clevis -p 3000:3000 -p 8545:8545 -p 9999:9999 -v ${PWD}:/dapp austingriffith/clevis

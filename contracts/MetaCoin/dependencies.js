const fs = require('fs');

const depends = [
  '@openzeppelin/contracts/GSN/Context.sol',
  '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol',
  '@openzeppelin/contracts/math/SafeMath.sol',
  '@openzeppelin/contracts/token/ERC20/ERC20.sol',
  '@openzeppelin/contracts/token/ERC20/IERC20.sol',
  '@openzeppelin/contracts/access/roles/MinterRole.sol',
  '@openzeppelin/contracts/access/Roles.sol',
  '@openzeppelin/contracts/ownership/Ownable.sol',
]

let dependContents = {}

depends.forEach(element => {
  dependContents[element] = { content: fs.readFileSync(`node_modules/${element}`, 'utf8') }
});

module.exports = dependContents
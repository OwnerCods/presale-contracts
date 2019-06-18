module.exports = {
    norpc: true,
    testCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle test --network coverage',
    compileCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle compile --network coverage',
    skipFiles: [
        'misc',
        'openzeppelin-solidity',
        'Controlled.sol',
        'MiniMeToken.sol',
        'TokenController.sol'
    ]
}
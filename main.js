const ethers = require('ethers')
var colors = require('colors/safe');

const main = () => {

  const data = process.argv[2]
  let start = 0
  let end = 2+2*4
  const fourBytes = data.slice(start, end)
  start = end + 2*12
  end = end + 64
  const recipient = data.slice(start, end)
  start = end + 3 * 64
  end = start + 3 * 64
  const transferdata = data.slice(start, end)
  start = 0
  end = 8
  const transferFourBytes = transferdata.slice(start, end)
  start = end + 2*12
  end = end + 64
  const transferRecipient = transferdata.slice(start, end)
  start = end
  end = end + 64
  const transferAmount = transferdata.slice(start, end)
  console.log(`
Submit Tx signature:   ${fourBytes} ${fourBytes ==='0xc6427474' ? colors.green('OK') : colors.red('!!! NOT OK !!!')}
Token Contract:        0x${recipient} ${recipient ==='c719d010b63e5bbf2c0551872cd5316ed26acd83' ? colors.green('OK') : colors.red('!!! NOT OK !!!')}
Transfer signature:    0x${transferFourBytes} ${transferFourBytes ==='a9059cbb' ? colors.green('OK') : colors.red('!!! NOT OK !!!')}
TransferRecipient:     0x${transferRecipient} ${colors.yellow('<<< CHECK THIS')}
TransferAmount:        0x${transferAmount.replace(/^0+/,'')} ${colors.yellow('<<< CHECK THIS')}
TransferAmount (Dec.): ${ethers.utils.formatEther(ethers.BigNumber.from(`0x${transferAmount}`))} ${colors.yellow('<<< CHECK THIS')}
`)
}

main()

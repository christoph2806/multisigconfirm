# Multisig Confirm ###

Check Multisig transaction for Gnosis wallets (old codebase)

## Usage

1. Open Transaction in etherscan
2. Switch display of "data" field to "original"
3. Copy hex string to clipboard
4. Paste data after ```node main```

```
$ node main <data>
```

5. Run script

## Output
### Successful:
```
$ node main 0xc6427474000000000000000000000000c719d010b63e5bbf2c0551872cd5316ed26acd83000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044a9059cbb00000000000000000000000003cbc6930ffd2a1c32a90848edb37c5e171c14cb0000000000000000000000000000000000000000000004a89f54ef0121c0000000000000000000000000000000000000000000000000000000000000

Submit Tx signature:   0xc6427474 OK
Token Contract:        0xc719d010b63e5bbf2c0551872cd5316ed26acd83 OK
Transfer signature:    0xa9059cbb OK
TransferRecipient:     0x03cbc6930ffd2a1c32a90848edb37c5e171c14cb <<< CHECK THIS
TransferAmount:        0x4a89f54ef0121c00000 <<< CHECK THIS
TransferAmount (Dec.): 22000.0 <<< CHECK THIS
```

You always need to check TransferRecipient and TransferAmount.
### Failed:
```
$ node main 0x6427474000000000000000000000000c719d010b63e5bbf2c0551872cd5316ed26acd83000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044a9059cbb00000000000000000000000003cbc6930ffd2a1c32a90848edb37c5e171c14cb0000000000000000000000000000000000000000000004a89f54ef0121c0000000000000000000000000000000000000000000000000000000000000

Fourbytes:             0x64274740 !!! NOT OK !!!
Recipient:             0x719d010b63e5bbf2c0551872cd5316ed26acd830 !!! NOT OK !!!
TransferFourBytes:     0x9059cbb0 !!! NOT OK !!!
TransferRecipient:     0x3cbc6930ffd2a1c32a90848edb37c5e171c14cb0 <<< CHECK THIS
TransferAmount:        0x4a89f54ef0121c000000 <<< CHECK THIS
TransferAmount (Dec.): 352000.0 <<< CHECK THIS

```

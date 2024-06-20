**Brief**
We have a deployed contract. 

Contract address: EQBjZf-UZaz6YQTkHJ3EBxJpgh6GROxoecRm3vVNcncwHNy9

It is verified: 

Verifier_link: https://verifier.ton.org/EQBjZf-UZaz6YQTkHJ3EBxJpgh6GROxoecRm3vVNcncwHNy9

The Verifier_link contains the contract code (counter.tact) 

The code contains a getter function for counter:
```
get fun counter(): Int {
    return self.counter
}
```

Can you write in callGetter.js the code needed to call counter, and to send 'increment' message to the contract.
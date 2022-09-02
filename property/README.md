This project was bootstrapped with [Gifflar](https://github.com/GifflarJS-Framework/core)

# Gifflar Demo Property

This project is a demo example of using gifflar. Imagine a system that allows properties management through blockchain.
In this system, the manager can create a new management to a property and also to keep managing the property.

The management creation can be the property data, as `property address`, `current owner`, `built date`. But we can also
create management controls, like if this property is `rentable`, if is `available to sell`, or any other control type.

The question is: We could just create a smart contract pattern that fits to every property. So whenever a property needs
to be managed by the system, the system just deploys the same pattern to the blockchain and is all good. Why can`t we
do this?

The answer: Yes, we could do this. But, if one day we need to add a new variable or function to this pattern because
there are some properties that has a different process, so we need to update the smart contract pattern. In teory,
we could just update the pattern or create different patterns to every different process. But here we go, this process
requires always a developer that understand the smart contract language sintax, which is not so simple, and also
updating the pattern or creating new patterns to then integrate to the property system is not so fast.

With the Gifflar, we can create our own smart contract creation rules for property management, so the own system can
be prepared for these updates and it can create a new smart contract based on the new property configuration added. Of
course, it might be some day that we need to add a rule that we didn`t predict. So in this case, the developer
will add this new rule to the system using Gifflar, which decreases the smart contract development complexity. Once he
added this rule, the system will be able to address any property that matches the same rule.

## Getting started

### Versions

- Node: v14.19.1
- Gifflar: v1.0.0

### Instalation

`npm install` or `yarn install`

### Running

`npm start` or `yarn start`

The system will send the property configs created in `src/index.ts` to gifflar, and write the contracts code to
`src/contracts/MyContracts.sol`.

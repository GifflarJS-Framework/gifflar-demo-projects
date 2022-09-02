This project was bootstrapped with [Gifflar](https://github.com/GifflarJS-Framework/core)

# Gifflar Demo IoT

This project is a demo example of using Gifflar. It is also inspired by the project IoTCocoa
a gourmet cocoa monitoring system. Imagine a system that monitors the cocoa fermentation.
This system receives data from IoT devices that are collecting data from this fermentation.

The idea is that each iot device can have a smart contract related to it and where the system
can save all the collectible data from this device. This process allows the system to track this
data through the blockchain and see all the history fermentation data of some cocoa almonds package
or in a chocollate bar.

This system must also be able to receive unknown devices category configuration, register them and generate
a new smart contract with the customized data for this category of device. So, instead of depending on a developer each time a new device comes, the system can use Gifflar as engine to generate customized smart
contracts for each new device type.

## Getting started

### Versions

- Node: v14.19.1
- Gifflar: v1.0.0

### Instalation

`npm install` or `yarn install`

### Running

`npm start` or `yarn start`

The system will send the sensor config created in `src/index.ts` to gifflar, and write the contracts code to
`src/contracts` folder.

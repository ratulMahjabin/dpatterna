import {
  orderHandler,
  commandOnLight,
} from 'pages/hello-command/command-provider'

import {
  ICommand,
  RemoteControllerInvoker,
  LightReceiver,
  LightOnCommand,
  RedLightOnCommand,
  RedLightReceiver,
  LightOffCommand,
  RedLightIncreaseLuminosityCommand,
  RedLightDecreaseLuminosityCommand,
} from 'patterns/command/command-light'

describe('Command light', () => {
  test('Light on', () => {
    let expectation = orderHandler('on')
    let reality = commandOnLight(new LightOnCommand(new LightReceiver()))

    expect(expectation).toEqual(reality)
  })

  test('Light off', () => {
    let expectation = orderHandler('off')
    let reality = commandOnLight(new LightOffCommand(new LightReceiver()))

    expect(expectation).toEqual(reality)
  })

  test('Red light on', () => {
    let expectation = orderHandler('red')
    let reality = commandOnLight(new RedLightOnCommand(new RedLightReceiver()))

    expect(expectation).toEqual(reality)
  })

  test('Red light increase', () => {
    let expectation = 'red1'

    let reality = commandOnLight(
      new RedLightIncreaseLuminosityCommand(new RedLightReceiver())
    )

    expect(expectation).toEqual(reality)
  })

  test('Red light increase', () => {
    let expectation = 'red2'

    let reality = commandOnLight(
      new RedLightIncreaseLuminosityCommand(new RedLightReceiver())
    )

    expect(expectation).toEqual(reality)
  })

  test('Red light increase', () => {
    let expectation = 'red3'

    let reality = commandOnLight(
      new RedLightIncreaseLuminosityCommand(new RedLightReceiver())
    )

    expect(expectation).toEqual(reality)
  })

  test('Red light decrease', () => {
    let expectation = 'red0'
    let reality = commandOnLight(
      new RedLightDecreaseLuminosityCommand(new RedLightReceiver())
    )

    expect(expectation).toEqual(reality)
  })
})

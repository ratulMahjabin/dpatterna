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

let redOn: boolean = false
let allow: boolean = false
let currentState: string

export function commandOnLight(command: ICommand): string {
  const remoteController = new RemoteControllerInvoker()
  remoteController.setCommand(command)

  return remoteController.executeCommand()
}

export function orderHandler(command: string) {
  switch (command) {
    case 'on':
      allow = false
      currentState = commandOnLight(new LightOnCommand(new LightReceiver()))
      return currentState
      break

    case 'off':
      redOn = false
      allow = false
      currentState = commandOnLight(new LightOffCommand(new LightReceiver()))
      return currentState
      break

    case 'red':
      redOn = true
      allow = true
      currentState = commandOnLight(
        new RedLightOnCommand(new RedLightReceiver())
      )
      return currentState
      break
    case 'increase':
      if (redOn && allow) {
        currentState = commandOnLight(
          new RedLightIncreaseLuminosityCommand(new RedLightReceiver())
        )

        return currentState
      } else {
        return currentState
      }
    case 'decrease':
      if (redOn && allow) {
        currentState = commandOnLight(
          new RedLightDecreaseLuminosityCommand(new RedLightReceiver())
        )

        return currentState
      } else {
        return currentState
      }

      break

    default:
    //code block
  }
}

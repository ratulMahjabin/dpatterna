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
let currentState: string

export function commandOnLight(command: ICommand): string {
  const remoteController = new RemoteControllerInvoker()
  remoteController.setCommand(command)

  return remoteController.executeCommand()
}

export function orderHandler(command: string) {
  switch (command) {
    case 'on':
      currentState = commandOnLight(new LightOnCommand(new LightReceiver()))
      return currentState
      break

    case 'off':
      redOn = false

      currentState = commandOnLight(new LightOffCommand(new LightReceiver()))
      return currentState
      break

    case 'red':
      redOn = true

      currentState = commandOnLight(
        new RedLightOnCommand(new RedLightReceiver())
      )
      return currentState
      break
    case 'increase':
      if (redOn) {
        currentState = commandOnLight(
          new RedLightIncreaseLuminosityCommand(new RedLightReceiver())
        )

        return currentState
      } else {
        return currentState
      }
    case 'decrease':
      if (redOn) {
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

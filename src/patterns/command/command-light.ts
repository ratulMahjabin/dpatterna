// global
var value: number = 0 // to keep track the value of luminosity

// code start

// Command Interface. by implementing this interface we will create new concrete classes
export interface ICommand {
  execute(): string
}

// receiver

// normal light receiver
export class LightReceiver {
  public on(): string {
    return 'on'
  }

  public off(): string {
    return 'off'
  }
}

// redlight receiver
export class RedLightReceiver {
  public on(): string {
    return `red${value}`
  }

  public off(): string {
    return 'off'
  }

  //this is responsible for increasing luminosity
  public increaseLuminosity(): string {
    if (value < 3) {
      value++
    }
    return `red${value}`
  }

  //this is responsible for decreasing luminosity
  public decreaseLuminosity(): string {
    if (value > 0) {
      value--
    }
    return `red${value}`
  }
}

// concrete classes of ICommand
export class LightOnCommand implements ICommand {
  private _light: LightReceiver //an instance of light receiver

  constructor(_light: LightReceiver) {
    this._light = _light
  }

  execute(): string {
    return this._light.on()
  }
}

export class LightOffCommand implements ICommand {
  private _light: LightReceiver

  constructor(_light: LightReceiver) {
    this._light = _light
  }

  execute(): string {
    return this._light.off()
  }
}

export class RedLightOnCommand implements ICommand {
  redLight: RedLightReceiver //an instance of red light receiver

  constructor(light: RedLightReceiver) {
    this.redLight = light
  }

  execute(): string {
    return this.redLight.on()
  }
}

export class RedLightOffCommand implements ICommand {
  redLight: RedLightReceiver

  constructor(light: RedLightReceiver) {
    this.redLight = light
  }

  execute(): string {
    return this.redLight.off()
  }
}

export class RedLightIncreaseLuminosityCommand implements ICommand {
  redLight: RedLightReceiver

  constructor(light: RedLightReceiver) {
    this.redLight = light
  }

  execute(): string {
    return this.redLight.increaseLuminosity()
  }
}

export class RedLightDecreaseLuminosityCommand implements ICommand {
  redLight: RedLightReceiver

  constructor(light: RedLightReceiver) {
    this.redLight = light
  }

  execute(): string {
    return this.redLight.decreaseLuminosity()
  }
}

// invoker class
export class RemoteControllerInvoker {
  onCommand!: ICommand

  setCommand(onCommand: ICommand) {
    this.onCommand = onCommand
  }

  executeCommand() {
    return this.onCommand.execute()
  }
}

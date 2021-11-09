export enum Severity {
  Error = 'error',
  Warning = 'warning',
  Log = 'log',
  Info = 'info',
  Debug = 'debug',
}

class Logger {
  logToConsole: boolean;
  externalLoggingCallbacks: ((
    log: unknown[],
    severity: Severity
  ) => void)[] = [];

  constructor(logToConsole: boolean) {
    this.logToConsole = logToConsole;
  }

  log(...args: unknown[]) {
    if (this.logToConsole) {
      console.log(...args);
    }
    this.callExternalLoggingCallbacks(args, Severity.Info);
  }

  error(...args: unknown[]) {
    if (this.logToConsole) {
      console.error(...args);
    }
    this.callExternalLoggingCallbacks(args, Severity.Error);
  }

  warn(...args: unknown[]) {
    if (this.logToConsole) {
      console.warn(...args);
    }
    this.callExternalLoggingCallbacks(args, Severity.Warning);
  }

  addExternalLoggingCallback(
    action: (log: unknown[], severity: Severity) => void
  ) {
    this.externalLoggingCallbacks.push(action);
  }

  private callExternalLoggingCallbacks(log: unknown[], severity: Severity) {
    this.externalLoggingCallbacks.forEach((callback) =>
      callback(log, severity)
    );
  }
}

export default Logger;

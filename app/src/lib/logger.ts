export enum Severity {
  Error = 'error',
  Warning = 'warning',
  Log = 'log',
  Info = 'info',
}

class Logger {
  externalLoggingCallbacks: ((
    log: unknown[],
    severity: Severity
  ) => void)[] = [];

  log(...args: unknown[]) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
    this.callExternalLoggingCallbacks(args, Severity.Info);
  }

  error(...args: unknown[]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
    this.callExternalLoggingCallbacks(args, Severity.Error);
  }

  warn(...args: unknown[]) {
    if (process.env.NODE_ENV !== 'production') {
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

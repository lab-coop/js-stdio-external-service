# lab-stdio
External service to use stdin, stdout, stderr, and console

The service is registerable to a dependency injection container
and also all necessary Gherkin steps are provided for behaviour testing.

## Usage
Inject the service to your internal or external services using the [lab-di](ttps://github.com/lab-coop/lab-di)
```javascript
function yourService(stdio) {
  stdio.console.debug('message')
}
```
### Implementations
You can choose in your config service on the implementations like:
```javscript
 {
   stdio: 'memory'
 }
```
#### Memory
It does not write or read anything from the real buffers

### Console
#### debug(message: string): void
Logs it's message to the standard out
##### Related Steps
```gherkin
When debug message sent to console: "apple"
Then it should write to standard out:
"""
apple

"""
```

## Install


## Contributing
Read the contributing [guidelines](https://github.com/lab-coop/dev_guidelines)

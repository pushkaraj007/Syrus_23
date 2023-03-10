import React from 'react'
const annyang = require('annyang');
export default function Voice() {
    function voiceOn() {
        console.log('voice on')
        if (annyang) {
            // Let's define a command.
            const commands = {
              'welcome': () => { alert('Hello world!'); console.log('Hello world!')},
              'go to home': () => { window.location.href = '/'; }
            };
          
            // Add our commands to annyang
            annyang.addCommands(commands);
          
            // Start listening.
            annyang.start();
          }
        }
  return (
    <div>
       <button onClick={voiceOn}>
        Click here
    </button>
    </div>
  )
}

import React from 'react'
const annyang = require('annyang');
export default function Voice() {
  function voiceOn() {
    console.log('voice on')
    if (annyang) {
      const commands = {
        'welcome': () => { alert('Hello world!'); console.log('Hello world!') },
        'go to home': () => { window.location.href = '/'; },
        'go to my classes': () => { window.location.href = '/classes'; }
      };

      annyang.addCommands(commands);

      annyang.start();
    }
  }
  return (
    <div>
      <button onClick={voiceOn} >
        Click here
      </button>
    </div>
  )
}

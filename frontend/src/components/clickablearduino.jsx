import React from 'react';

const ClickableArduino = ({ width = 285.2, height = 209, style, onStartDrag, ...props }) => {
  const handleClick = (part) => (e) => {
    e.stopPropagation();
    alert(`${part} clicked!`);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 285.2 209"
      width={width}
      height={height}
      style={style}
      pointerEvents="visiblePainted"
      {...props}
    >
      <defs>
        <style>{`
          .st0{font-size:2.8px}.st0,.st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9,.st10,.st11,.st12{fill:#fff}.st0,.st1,.st2,.st4,.st13,.st14,.st5,.st15,.st16,.st6,.st7,.st17,.st8,.st9,.st18,.st10,.st19,.st20,.st21,.st11,.st12{isolation:isolate}.st0,.st1,.st5,.st6,.st7,.st9,.st12{font-family:ArialMT,Arial}.st1{font-size:4.7px}.st22{fill:#80795b}.st23{fill:#d1c690}.st24{fill:#5e5b43}.st2{opacity:.6}.st25{stroke-width:.9px}.st25,.st26,.st27,.st28,.st20,.st29{fill:none}.st25,.st27,.st28,.st29{stroke-miterlimit:5}.st25,.st28{stroke:#fff}.st30{fill-opacity:.3}.st30,.st31{fill:#3d3d3d}.st32{fill:#494949}.st33{fill:lime}.st33,.st34{fill-opacity:.4}.st35{fill:#22b573;fill-opacity:.7}.st36{fill:#b8af82}.st37{fill:#303030}.st38{fill:#0f7391}.st4{opacity:.3}.st13{stroke:#565656}.st13,.st14{opacity:.2}.st13,.st20{stroke-miterlimit:12.5;stroke-width:.3px}.st39,.st21{fill:#f2f2f2}.st40{fill:#404040}.st5{font-size:5.8px}.st41{fill:#1f1f1f}.st16,.st11{opacity:.1}.st6{font-size:7.7px}.st42{fill:#373737}.st7{font-size:5.2px}.st17{opacity:0}.st43{fill:#8c8663}.st8,.st19,.st20,.st21{opacity:.5}.st34{fill:#ff0}.st27{stroke-width:1px}.st27,.st29{stroke:#9a916c}.st9{font-size:4.2px}.st44{fill:#6d6d6d}.st45{fill:#333}.st46{fill:#474747}.st47{fill:#8d8455}.st48{fill:#595959}.st49{fill:#1a1a1a}.st50{fill:#9a916c}.st51{fill:#999}.st18,.st10{opacity:.2}.st52{fill:#232323}.st53{fill:#852725}.st54{fill:#641d1c}.st55,.st19{fill:#ccc}.st56{fill:#b3b3b3}.st28{stroke-linecap:round;stroke-width:1.1px}.st57{fill:#2a2a29}.st58{fill:gray}.st59{fill:#8d8c8c}.st60{fill:#9d956c}.st20{stroke:#000}.st61{fill:#0f0f0f;fill-opacity:.4}.st29{stroke-width:1.1px}.st62{fill:#e6e6e6}.st12{font-size:4.6px}
        `}</style>
      </defs>

      <g id="breadboardbreadboard">
        <g id="icon">
          {/* Main Arduino Board - Draggable */}
          <path 
            id="_x30_.1.0.0" 
            className="st38" 
            d="M260.8,10l5.4,5.4v40.5l9,9v116.1l-9,9v5.4c0,2-1.6,3.5-3.5,3.5H35.8c-2,0-3.5-1.6-3.5-3.5h0V13.5c0-2,1.6-3.5,3.5-3.5h225.1M260.5,73c0,3.1,2.5,5.7,5.7,5.7,3.1,0,5.7-2.5,5.7-5.7h0c0-3.2-2.5-5.7-5.7-5.7-3.1,0-5.7,2.5-5.7,5.7h0s0,0,0,0ZM260.5,172c0,3.1,2.5,5.7,5.7,5.7,3.1,0,5.7-2.5,5.7-5.7h0c0-3.2-2.5-5.7-5.7-5.7-3.1,0-5.7,2.5-5.7,5.7h0s0,0,0,0ZM80.5,19c0,3.1,2.5,5.7,5.7,5.7,3.1,0,5.7-2.5,5.7-5.7h0c0-3.2-2.5-5.7-5.7-5.7-3.1,0-5.7,2.5-5.7,5.7h0ZM76,190c0,3.1,2.5,5.7,5.7,5.7s5.7-2.5,5.7-5.7h0c0-3.1-2.5-5.7-5.7-5.7s-5.7,2.5-5.7,5.7h0ZM210.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM219.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM228.7,190c0,.8.7,1.5,1.5,1.5s1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM237.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM246.7,190c0,.8.7,1.5,1.5,1.5s1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM255.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM256,91c0,.9.8,1.7,1.7,1.7s1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7s-1.7.8-1.7,1.7h0ZM265,91c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM256,100c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM265,100c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM256,109c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.7-1.7,1.7h0ZM265,109c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.7-1.7,1.7h0ZM104.3,30.7c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM104.3,39.7c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM95.3,30.7c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM95.3,39.7c0,.9.8,1.7,1.7,1.7.9,0,1.7-.8,1.7-1.7h0c0-.9-.8-1.7-1.7-1.7-.9,0-1.7.8-1.7,1.7h0ZM86.3,30.7c0,.9.8,1.7,1.7,1.7s1.7-.8,1.7-1.7-.8-1.7-1.7-1.7-1.7.8-1.7,1.7ZM86.3,39.7c0,.9.8,1.7,1.7,1.7s1.7-.8,1.7-1.7-.8-1.7-1.7-1.7-1.7.8-1.7,1.7ZM178.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5,1.5h0ZM169.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM160.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM151.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM142.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5,0,0,0,0,0,0ZM133.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM124.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5,0,0,0,0,0,0ZM115.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM106.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5,0,0,0,0,0,0h0ZM97.3,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM255.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM246.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM237.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM228.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM219.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5,1.5h0ZM210.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM201.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0s0,0,0,0ZM192.7,19c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM138.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM129.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM147.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM156.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM165.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM174.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM183.7,190c0,.8.7,1.5,1.5,1.5s1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0ZM192.7,190c0,.8.7,1.5,1.5,1.5.8,0,1.5-.7,1.5-1.5h0c0-.8-.7-1.5-1.5-1.5-.8,0-1.5.7-1.5,1.5h0Z"
            style={{ cursor: 'grab' }}
            onMouseDown={onStartDrag}
            onClick={handleClick('Arduino Board')}
          />

          {/* Pin Labels - Clickable */}
          <text className="st1" transform="translate(136.8 31.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 13')}>
            <tspan x="0" y="0">13</tspan>
          </text>
          <text className="st1" transform="translate(145.8 31.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 12')}>
            <tspan x="0" y="0">12</tspan>
          </text>
          <text className="st1" transform="translate(154.8 31.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 11')}>
            <tspan x="0" y="0">11</tspan>
          </text>
          <text className="st1" transform="translate(163.8 31.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 10')}>
            <tspan x="0" y="0">10</tspan>
          </text>
          <text className="st1" transform="translate(172.8 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 9')}>
            <tspan x="0" y="0">9</tspan>
          </text>
          <text className="st1" transform="translate(181.8 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 8')}>
            <tspan x="0" y="0">8</tspan>
          </text>
          <text className="st1" transform="translate(196.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 7')}>
            <tspan x="0" y="0">7</tspan>
          </text>
          <text className="st1" transform="translate(205.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 6')}>
            <tspan x="0" y="0">6</tspan>
          </text>
          <text className="st1" transform="translate(214.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 5')}>
            <tspan x="0" y="0">5</tspan>
          </text>
          <text className="st1" transform="translate(223.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 4')}>
            <tspan x="0" y="0">4</tspan>
          </text>
          <text className="st1" transform="translate(232.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 3')}>
            <tspan x="0" y="0">3</tspan>
          </text>
          <text className="st1" transform="translate(241.2 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 2')}>
            <tspan x="0" y="0">2</tspan>
          </text>
          <text className="st1" transform="translate(250.4 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 1')}>
            <tspan x="0" y="0">1</tspan>
          </text>
          <text className="st1" transform="translate(259.4 28.4) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 0')}>
            <tspan x="0" y="0">0</tspan>
          </text>

          {/* Power Section Labels */}
          <text className="st9" transform="translate(169 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('5V Pin')}>
            <tspan x="0" y="0">5V</tspan>
          </text>
          <text className="st9" transform="translate(213.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A0')}>
            <tspan x="0" y="0">A0</tspan>
          </text>
          <text className="st9" transform="translate(160 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('3V3 Pin')}>
            <tspan x="0" y="0">3V3</tspan>
          </text>
          <text className="st9" transform="translate(222.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A1')}>
            <tspan x="0" y="0">A1</tspan>
          </text>
          <text className="st9" transform="translate(231.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A2')}>
            <tspan x="0" y="0">A2</tspan>
          </text>
          <text className="st9" transform="translate(240.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A3')}>
            <tspan x="0" y="0">A3</tspan>
          </text>
          <text className="st9" transform="translate(249.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A4')}>
            <tspan x="0" y="0">A4</tspan>
          </text>
          <text className="st9" transform="translate(258.8 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Analog Pin A5')}>
            <tspan x="0" y="0">A5</tspan>
          </text>
          <text className="st9" transform="translate(150.1 183.3) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Reset Pin')}>
            <tspan x="0" y="0">RESET</tspan>
          </text>
          <text className="st9" transform="translate(142.5 183.3) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('IOREF Pin')}>
            <tspan x="0" y="0">IOREF</tspan>
          </text>
          <text className="st9" transform="translate(196 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('VIN Pin')}>
            <tspan x="0" y="0">VIN</tspan>
          </text>
          <text className="st9" transform="translate(178 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('GND Pin')}>
            <tspan x="0" y="0">GND</tspan>
          </text>
          <text className="st9" transform="translate(186.7 183.7) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('GND Pin 2')}>
            <tspan x="0" y="0">GND</tspan>
          </text>

          {/* Component Labels */}
          <text className="st5" transform="translate(120.2 55.2)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Built-in LED')}>
            <tspan x="0" y="0">L</tspan>
          </text>
          <text className="st5" transform="translate(248.2 71.7)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Power LED')}>
            <tspan x="0" y="0">ON</tspan>
          </text>
          <text className="st5" transform="translate(115.5 71.6)">
            <tspan x="0" y="0">TX</tspan>
          </text>
          <text className="st5" transform="translate(115.6 80.2)">
            <tspan x="0" y="0">RX</tspan>
          </text>
          
          {/* Arduino Branding */}
          <text className="st6" transform="translate(146 79)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('Arduino Logo')}>
            <tspan x="0" y="0">Arduino</tspan>
          </text>
          <text className="st0" transform="translate(183.5 74.5)">
            <tspan x="0" y="0">TM</tspan>
          </text>

          {/* Section Labels */}
          <text className="st12" transform="translate(229.3 173.5)">
            <tspan x="0" y="0">ANALOG IN</tspan>
          </text>
          <text className="st12" transform="translate(182.2 173.5)">
            <tspan x="0" y="0">POWER</tspan>
          </text>
          <text className="st12" transform="translate(191.2 44.1)">
            <tspan x="0" y="0">DIGITAL (PWM=</tspan>
          </text>
          <text className="st12" transform="translate(237.3 44.1)">
            <tspan x="0" y="0">)</tspan>
          </text>

          {/* ICSP Headers */}
          <text className="st7" transform="translate(252 113.9) rotate(-90)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Header')}>
            <tspan x="0" y="0">ICSP</tspan>
          </text>
          <text className="st7" transform="translate(84 50.1)" 
            style={{ cursor: 'pointer' }} onClick={handleClick('ICSP2 Header')}>
            <tspan x="0" y="0">ICSP2</tspan>
          </text>
        </g>
      </g>

      {/* USB Connector - Clickable */}
      <rect id="_x30_.1.0.6" className="st45" x="94" y="67.3" width="17.7" height="17.7" 
        style={{ cursor: 'pointer' }} onClick={handleClick('USB Connector')}/>

      {/* Microcontroller - Clickable */}
      <rect id="_x30_.1.0.8" className="st45" x="130.8" y="131" width="131.4" height="19.8" 
        style={{ cursor: 'pointer' }} onClick={handleClick('Microcontroller')}/>

      {/* Pin Connectors - Clickable */}
      <circle id="connector0pin" className="st27" cx="212.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A0 Connector')}/>
      <path id="_x30_.1.0.10" className="st50" d="M210.2,185.4h4v9.3h-4v-9.3M210.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>
      
      <circle id="connector1pin" className="st27" cx="221.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A1 Connector')}/>
      <path id="_x30_.1.0.12" className="st50" d="M219.2,185.4h4v9.3h-4v-9.3M219.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>
      
      <circle id="connector2pin" className="st27" cx="230.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A2 Connector')}/>
      <path id="_x30_.1.0.14" className="st50" d="M228.2,185.4h4v9.3h-4v-9.3M228.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>
      
      <circle id="connector3pin" className="st27" cx="239.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A3 Connector')}/>
      <path id="_x30_.1.0.16" className="st50" d="M237.2,185.4h4v9.3h-4v-9.3M237.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>
      
      <circle id="connector4pin" className="st27" cx="248.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A4 Connector')}/>
      <path id="_x30_.1.0.18" className="st50" d="M246.2,185.4h4v9.3h-4v-9.3M246.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>
      
      <circle id="connector5pin" className="st27" cx="257.2" cy="190" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('A5 Connector')}/>
      <path id="_x30_.1.0.20" className="st50" d="M255.2,185.4h4v9.3h-4v-9.3M255.2,190c0,1.1.9,2,2,2s2-.9,2-2h0c0-1.1-.9-2-2-2s-2,.9-2,2Z"/>

      {/* ICSP Pin Connectors */}
      <circle id="connector39pin" className="st29" cx="257.7" cy="91" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 1')}/>
      <circle id="connector40pin" className="st29" cx="266.7" cy="91" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 2')}/>
      <circle id="connector41pin" className="st29" cx="257.7" cy="100" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 3')}/>
      <circle id="connector42pin" className="st29" cx="266.7" cy="100" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 4')}/>
      <circle id="connector43pin" className="st29" cx="257.7" cy="109" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 5')}/>
      <circle id="connector44pin" className="st29" cx="266.7" cy="109" r="2.2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('ICSP Pin 6')}/>

      {/* Digital Pin Connectors */}
      <circle id="connector51pin" className="st27" cx="179.8" cy="19" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 13 Connector')}/>
      <path id="_x30_.1.0.34" className="st50" d="M177.8,14.4h4v9.3h-4v-9.3M177.8,19c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2Z"/>
      
      <circle id="connector52pin" className="st27" cx="170.8" cy="19" r="2" 
        style={{ cursor: 'pointer' }} onClick={handleClick('Digital Pin 12 Connector')}/>
      <path id="_x30_.1.0.36" className="st50" d="M168.8,14.4h4v9.3h-4v-9.3M168.8,19c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2Z"/>

      {/* Power Jack */}
      <g style={{ cursor: 'pointer' }} onClick={handleClick('Power Jack')}>
        <path className="st3" d="M167.1,56.3c1.1-1.2,1.9-2.2,2.9-3.1,3.7-3.3,7.9-4.6,12.7-2.5,4.5,1.9,7,6.6,6,11.4-.9,4.4-5.2,7.8-9.8,8-4.3.1-7.6-1.8-10.3-4.9-.4-.5-.8-1-1.3-1.6-.4.4-.7.8-.9,1.1-2.9,3.6-6.5,5.7-11.3,5.4-4.7-.3-9.1-4.7-9.4-9.4-.4-6,4.2-10.9,10.5-11,4.2,0,7.5,2.1,10.1,5.4.3.4.6.7.9,1.2Z"/>
        <path className="st38" d="M156.7,53.1c-4.4,0-7.6,2.8-7.9,6.4-.3,3.2,2.2,6.4,5.7,7.2,3.5.7,6.2-.7,8.3-3.2,3.2-3.8,3.1-3.2,0-7-1.7-2.1-4-3.3-6.2-3.4Z"/>
        <path className="st38" d="M178.4,53c-.5,0-.9,0-1.3,0-3.7.7-6,3.2-7.8,6.4-.1.2-.1.7,0,.9,1.6,2.7,3.5,5.1,6.7,6.1,3,1,5.7.2,7.8-2.2,1.9-2.1,2.3-4.6,1.1-7.1-1.3-2.7-3.7-3.9-6.5-4.1h0Z"/>
      </g>

      {/* PWM Indicators */}
      <path className="st3" d="M249.9,32.5h-2.4c-.2,0-.3,0-.4-.2,0-.1,0-.3,0-.4l1.2-1.8c.2-.2.5-.2.7,0l1.2,1.7c0,0,.1.2.1.3,0,.2-.2.4-.4.4Z"/>
      <path className="st3" d="M256.5,29.8h2.4c.2,0,.3,0,.4.2,0,.1,0,.3,0,.4l-1.2,1.8c-.2.2-.5.2-.7,0l-1.2-1.7c0,0-.1-.2-.1-.3,0-.2.2-.4.4-.4h0Z"/>

      {/* Pin Header Visual Elements */}
      <rect className="st40" x="207.7" y="185.5" width="54" height="9"/>
      <rect className="st40" x="189.7" y="14.5" width="72" height="9"/>
      <rect className="st40" x="127.7" y="185.5" width="72" height="9"/>

      {/* Lines */}
      <line className="st28" x1="125.7" y1="46.4" x2="259.4" y2="46.4"/>
      <line className="st28" x1="209.8" y1="167.8" x2="259.4" y2="167.8"/>
      <line className="st28" x1="153.7" y1="167.8" x2="198.6" y2="167.8"/>
    </svg>
  );
};

export default ClickableArduino;

import React, { useState } from 'react';
import { TimePicker } from 'antd';

function TimePickerFile() {
 

  return (
    <div className="row">
      <div className='col' style={{color: "white"}}>
        <h3>Time Picker Example</h3>
        <TimePicker/>
      </div>

    </div>
  )
}

export default TimePickerFile
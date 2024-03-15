import React from 'react'
import withToggle from './withToggle'


const ViewEditToggleExample = ({ toggle, toggleStatus, title }) => (
  <div>
    { toggleStatus 
      ? <input type="text" value={title} />
      : <p>{ title }</p>
    }
    <button onClick={toggle}>
      { toggleStatus ? 'Cancel' : 'Edit' }
    </button>
  </div>
)

export default withToggle(ViewEditToggleExample)
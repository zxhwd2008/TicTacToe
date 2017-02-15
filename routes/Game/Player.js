import React from 'react'

export const Player = (props) =>
  <div className="form-group">
    <label htmlFor={props.componentID}>{props.label}</label>
    <input
      type="text"
      id={props.componentID}
      className="form-control"
      placeholder={props.placeholder}
      onChange={(e) => { props.onChange(e.target.value) }}
    />
  </div>

Player.propTypes = {
  label: React.PropTypes.string,
  componentID: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

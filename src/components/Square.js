import React from 'react'

const Square = ({colorValue, setColorValue}) => {
  return (
    <><section
          className="square"
          style={{ backgroundColor: colorValue }}
        >
          <p>{colorValue ? colorValue : "Empty Value"}</p>

      </section>

      <form onSubmit={(e) => e.preventDefault()}>
              <label>Add color name:</label>
              <input
                  autoFocus
                  type="text"
                  placeholder="Add color name"
                  required
                  value={colorValue}
                  onChange={(e) => setColorValue(e.target.value)} />
        </form></>
  )
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square
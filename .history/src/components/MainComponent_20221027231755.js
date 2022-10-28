import React from 'react'

export default function MainComponent() {
  return (
    <div>
      <span>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
      </span>
    </div>
  );
}

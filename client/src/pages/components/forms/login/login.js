import React from 'react';

function login() {
  render(
    <div>
        <div><TextInput icon="email" label="Email" email validate label="Email" error="The email you entered is not associated with a Dat-A-Pet account"/></div>
        <div><TextInput icon="lock_outline" password label="Password" password validate label="Password" error="Wrong password, please try again."/></div>
        <Button type="submit" waves="light">
            Login
            <Icon right>
            send
            </Icon>
        </Button>
    </div>
  )
}
export default login
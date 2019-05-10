import React from 'react';

function signUp() {
  render(
    <div>
      <div><TextInput firstname icon="account_circle" label="First Name" placeholder="First Name"/></div>
      <div><TextInput lastname icon="account_circle" label="Last Name" placeholder="Last Name"/></div>
      <div><TextInput icon="email" label="Email" email validate label="Email" placeholder="Email" /></div>
      <div><TextInput password icon="lock_open" label="Password" /></div>
      <div><TextInput icon="phone" label="Pnome Number" data-length={10} /></div>
        <Button type="submit" waves="light">
          Sign Up
          <Icon right>
          send
          </Icon>
        </Button>
    </div>
  )
}
export default signUp









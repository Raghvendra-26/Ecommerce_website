import React from 'react'
import './signIN_signUP.scss'
import SignIN from '../../components/signIn/SignIN'
import SignUp from '../../components/sign-up/SignUp'

function signIN_signUP() {
  return (
    <div className='signin-signup'>
        <SignIN />
        <SignUp />
    </div>
  )
}

export default signIN_signUP
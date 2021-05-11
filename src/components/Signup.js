import React, { useState, useEffect } from 'react';
import '../styles/All.css'

function Signup () {
    return (
            <div class="div-block-6">
                <div class="div-block-7">
                <h1 class="heading-3">Welcome to punch-in!</h1>
                <h3 class="heading-3">Sign Up Below!</h3>
                <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" class="form">
                    <div><label for="name-2" class="field-label">First Name:</label><input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2" /></div>
                    <div><label for="name" class="field-label">Last Name:</label><input type="text" class="w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name" /></div>
                    <div><label for="name-3" class="field-label">Email Address:</label><input type="text" class="w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3"/></div>
                    <div><label for="name-4" class="field-label">Password:</label><input type="text" class="w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4"/></div>
                    <div><label for="name-5" class="field-label">Confirm Password:</label><input type="text" class="w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5"/></div>
                    <input type="submit" value="Sign Up" data-wait="Please wait..." class="submit-button w-button"/>
                    </form>
                    <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Signup
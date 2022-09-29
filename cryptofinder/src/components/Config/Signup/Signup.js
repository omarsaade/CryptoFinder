import React from 'react'
import classes from './Signup.module.css'
function Signup() {
    return (
        <div className={classes.signupBox}>
            <form className={classes.form}>
                <div className={classes.container}>
                    <h1>Sign Up</h1>
                    <p className={classes.notes}>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" className={classes.text} placeholder="Enter Email" name="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input className={classes.password} placeholder="Enter Password" name="psw" required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input className={classes.password} type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    <input type="checkbox" name="remember" className={classes.checkbox} />
                    <label htmlFor='remember'>{`Remember me`}</label>
                    <p className={classes.note}>I certify that I am 18 years of age or older, I agree to the User Agreement, and I have read the <a href="#" className={classes.agree}>{`Privacy Policy.`}</a>.</p>

                    <div className="clearfix">
                        <button type="button" className={classes.cancelbtn}>Cancel</button>
                        <button type="submit" className={classes.signupbtn}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;
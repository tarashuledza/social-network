import React from "react";
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={values => {
                console.log(values)
            }}
        >
            {({handleSubmit}) => (
                <form onSubmit={ handleSubmit }>
                    <div>
                        <Field component={"input"} name={"login"} placeholder={"Login"}/>
                    </div>
                    <div>
                        <Field component={"input"} name={"password"} placeholder={"Password"}/>
                    </div>
                    <div>
                        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                    </div>
                    <div>
                        <button>Log in</button>
                    </div>
                </form>
            )}
        </Form>
    )}
const Login = () => {
  return (<>
          <h1>Login</h1>
          <LoginForm />
      </>
  )
}
export default Login;
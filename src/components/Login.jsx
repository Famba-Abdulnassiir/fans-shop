import { useEffect } from "react";
import { TextInput, Checkbox, Button, Group, Box, Image } from '@mantine/core';
import { useForm } from "@mantine/form";
import { useNavigate, Link } from "react-router-dom";


function Login() {
    const loginurl = 'http://localhost:1337/api/auth/local'
    const githuburl = 'http://localhost:1337/api/connect/github'


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,

        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const { email, password } = form.values;
        fetch(loginurl, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                identifier: values.email,
                password: values.password
            })
        }).then(response => {
            if (response.ok) {
                navigate('/dashboard');
            } else {
                throw new Error('Login Failed. Check your Username or Password');
            }
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <>
            <Box maw={300} mx="auto" className="mt-16">
                <Image maw={240} mx="auto" radius="md" src="./src/assets/Fans prac logo.png" alt="Random image" />
                <form onSubmit={form.onSubmit(handleSubmit)}>

                    <label className="text-white hover:underline">
                        Email<i className="fa-light fa-asterisk text-red-600"></i>
                    </label>
                    <TextInput
                    className="mb-4"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <label className="text-white hover:underline">
                        Password<i className="fa-light fa-asterisk text-red-600"></i>
                    </label>
                    <TextInput
                        type="password"
                        placeholder="Enter Password"
                        {...form.getInputProps('password')}
                    />

                    <Checkbox className="text-white text-xl"
                        mt="md"
                        label="I agree to sell my privacy"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />
                    <br />
                    <label className="text-white hover:underline text-xl">
                        <Link to={'/signup'}>Not a user ? Create account</Link>
                    </label>

                    <Group position="center" mt="md">
                        <Button type="submit" className="bg-black mb-3 w-30">Submit</Button>
                   </Group>
                </form>
                {/* <button ></button> */}
                <Group position="center" >
                <Button type="submit" className="bg-black" ><Link to={githuburl}>Signin with Github</Link><i className="fa-brands fa-github fa-xl ml-2"></i></Button>
                </Group>
            </Box>



        </>

    )
}

export default Login;
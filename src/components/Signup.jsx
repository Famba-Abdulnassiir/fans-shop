import { useEffect } from "react";
import { TextInput, Button, Group, Box, Image } from '@mantine/core';
import { useForm } from "@mantine/form";
import { useNavigate, Link } from "react-router-dom";


function Signup() {
    const signupurl = 'http://localhost:1337/api/auth/local/register';

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            username: ''

        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const { email, password, username } = form.values;
        fetch(signupurl, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
            })
        }).then(response => {
            if (response.ok) {
                navigate('/dashboard');
            } else {
                throw new Error('Please Ensure all the Fields are entered Correctly');
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
                        User Name<i className="fa-light fa-asterisk text-red-600"></i>
                    </label>
                    <TextInput className="mb-4"
                        placeholder="Enter Desired user name"
                        {...form.getInputProps('username')}
                    />

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
                    <br />
                    <label className="text-white hover:underline text-xl">
                        <Link to={'/'}>Already a user ? Login</Link>
                    </label>

                    <Group position="center" mt="md">
                        <Button type="submit" className="bg-black mb-3 w-30">Submit</Button>
                    </Group>
                </form>
            </Box>



        </>

    )
}

export default Signup;
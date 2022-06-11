import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextInput, Button, Container, PasswordInput, Grid, Image, Space, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Logo from "../general/logo";
import { useViewportSize } from "@mantine/hooks";
import axios from "axios";
import "../../css/signin.css";

export default function Signin() {
  const { height, width } = useViewportSize();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const handleLogin = (values) => {
    axios.post('http://localhost/Server/controllers/login.php', values).then((response) => {
      if (response === 'success') {
        console.log("login successful");
      } else {
        console.log("login failed");
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <Grid>
      {width > 768 ? <Grid.Col xl={8} lg={8} md={7} sm={6}>
        <Image src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          height="100vh"
          style={{ marginBottom: "-10px" }}
          fit="cover"
        />
      </Grid.Col> : null}
      <Grid.Col xl={4} lg={4} md={5} sm={6} xs={12} style={{ display: "flex" }}>
        <Container mx="auto" className="form-signin-container">
          <Logo classname="form-company-logo" />
          <Text style={width > 768 ? { fontSize: 34 } : { fontSize: 24 }} weight={500}>Đăng nhập</Text>
          <Space h="md" />
          <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
            <TextInput
              label="Tài khoản"
              placeholder="username"
              {...form.getInputProps('username')}
              className="form-username-input"
            />
            <Space h="md" />
            <PasswordInput
              label="Mật khẩu"
              placeholder="password"
              {...form.getInputProps('password')}
              className="form-password-input"
            />
            <Space h="md" />
            <Button type="submit" color="dark" className="form-signin-submit-btn">ĐĂNG NHẬP</Button>
            <Space h="sm" />
            <Text color="gray">Chưa có tài khoản ? Đăng kí ngay <Link to="/signup">tại đây</Link></Text>
          </form>
        </Container>
      </Grid.Col>

    </Grid >
  );
}
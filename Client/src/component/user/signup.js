import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextInput, Button, Container, PasswordInput, Grid, Image, Space, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Logo from "../general/logo";
import { useViewportSize } from "@mantine/hooks";
import "../../css/signin.css";

export default function Signup() {
  const { height, width } = useViewportSize();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      repassword: '',
      phonenum: ''
    },
  });

  return (
    <Grid>
      <Grid.Col xl={4} lg={4} md={5} sm={6} xs={12} style={{ display: "flex" }}>
        <Container mx="auto" className="form-signin-container">
          <Logo classname="form-company-logo" />
          <Text style={width > 768 ? { fontSize: 34 } : { fontSize: 24 }} weight={500}>Đăng kí</Text>
          <Space h="md" />
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
              onPaste={(e) => {
                e.preventDefault()
                return false;
              }} onCopy={(e) => {
                e.preventDefault()
                return false;
              }}
            />
            <Space h="md" />
            <PasswordInput
              label="Nhập lại mật khẩu"
              placeholder="password"
              {...form.getInputProps('repassword')}
              className="form-password-input"
              onPaste={(e) => {
                e.preventDefault()
                return false;
              }} onCopy={(e) => {
                e.preventDefault()
                return false;
              }}
            />
            <Space h="md" />
            <TextInput
              label="Số điện thoại"
              placeholder="phone number"
              {...form.getInputProps('phonenum')}
              className="form-username-input"
            />
            <Space h="md" />
            <Button type="submit" color="dark" className="form-signin-submit-btn">ĐĂNG KÍ</Button>
            <Space h="sm" />
            <Text color="gray">Đã có tài khoản ? Đăng nhập ngay <Link to="/signin">tại đây</Link></Text>
          </form>
        </Container>
      </Grid.Col>
      {width > 768 ? <Grid.Col xl={8} lg={8} md={7} sm={6}>
        <Image src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"
          height="100vh"
          style={{ marginBottom: "-10px" }}
          fit="cover"
        />
      </Grid.Col> : null}
    </Grid >
  );
}
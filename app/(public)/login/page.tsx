"use client";

import { useState } from "react";

import Input from "@/components/Input";
import Button from "@/components/Button";
import useUserService from "@/services/useUserService";

function Login() {
  const userService = useUserService();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    userService.login(formData.username, formData.password);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="h-8" src="https://app.curbee.com/public/images/logo-primary.svg" alt="Carbee logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" method="post" onSubmit={handleSubmit} autoComplete="off">
                <Input
                  id="username"
                  type="email"
                  label="Your email:"
                  required={true}
                  placeholder="name@company.com"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <Input
                  id="password"
                  type="password"
                  label="Password:"
                  required={true}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <Button type="submit">
                  Sign in
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login;

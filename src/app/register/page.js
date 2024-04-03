'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");
            
        } catch (error) {
            console.log("Signup failed", error.message);
        }
    }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to create account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                required 
            />
          </div>
          <Button type="submit" onClick={onSignup} className="w-full">
            Register
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Have an account already?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

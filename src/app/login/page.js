'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            router.push("/");
            
        } catch (error) {
            console.log("Login failed", error.message);
            
        }finally {
            setLoading(false);
        }
    }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
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
            <Input id="password" type="password" required
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
             />
          </div>
          <Button type="submit" onClick={onLogin} className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Create account
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

'use client'

import { useState, type JSX, type SVGProps } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function SignInModal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button className="text-md rounded-[12px]" onClick={() => setOpen(true)}>
        Sign in
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-md rounded-[12px]" variant="outline">
            Open Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="flex max-w-2xl p-0">
          <div className="flex flex-1 items-center justify-center bg-gray-200">
            <div className="text-9xl font-bold text-gray-400">G</div>
          </div>
          <div className="flex-1 p-8">
            <DialogHeader className="flex items-center justify-between">
              <DialogTitle>Sign in to Goznuk</DialogTitle>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                <DoorClosedIcon className="h-6 w-6" />
              </Button>
            </DialogHeader>
            <DialogDescription className="space-y-4">
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="Password" />
              <Button className="flex w-full items-center justify-center space-x-2 bg-black text-white">
                Sign In
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center space-x-2"
                >
                  <ChromeIcon className="h-5 w-5" />
                  <span>Sign in with Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center space-x-2"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span>Sign in with Github</span>
                </Button>
              </div>
              <p className="text-center">
                Don’t have an account?{' '}
                <a href="#" className="text-blue-500">
                  Sign Up
                </a>
              </p>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}

function DoorClosedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

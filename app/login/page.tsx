import { AuthHeader } from '@/components/auth-header'
import { LoginForm } from '@/components/login-form'
import { Navbar } from '@/components/navbar'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <AuthHeader />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your TechHub account to continue shopping
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

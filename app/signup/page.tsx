import { AuthHeader } from '@/components/auth-header'
import { SignupForm } from '@/components/signup-form'


export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
     
      <AuthHeader />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Join TechHub</h1>
            <p className="text-muted-foreground">
              Create your account to start buying or selling laptops
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

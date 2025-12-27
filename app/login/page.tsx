import { AuthHeader } from '@/components/auth-header'
import { LoginForm } from '@/components/login-form'


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      <AuthHeader />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <div className="flex bg-transparent rounded-lg overflow-hidden">
            {/* Left: laptop image (60%) */}
            <div className="hidden lg:block lg:w-3/5 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&auto=format&fit=crop')", minHeight: '560px' }}>
              <div className="w-full h-full bg-black/25" />
            </div>

            {/* Right: sign-in form (40%) */}
            <div className="w-full lg:w-2/5 flex items-center justify-end">
              <div className="w-full max-w-md p-8 bg-white rounded-lg lg:rounded-l-none shadow-2xl border border-gray-200">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
                  <p className="text-muted-foreground">Sign in to your TechHub account to continue shopping</p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

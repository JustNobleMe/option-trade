import LoginForm from '@/components/auth/login-form';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage; 
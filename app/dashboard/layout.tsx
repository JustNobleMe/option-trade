import { AuthProvider } from '@/lib/context/auth-context';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock user role - in real app, this would come from auth
  const userRole = 'admin'; // or 'admin'

  return (
    <AuthProvider userRole={userRole}>
      {children}
    </AuthProvider>
  );
} 
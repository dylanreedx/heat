import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import {cn} from '@/lib/utils';
import {ThemeProvider} from '@/components/theme-provider';
import {ModeToggle} from '@/components/mode-toggle';
import FloatingNav from '@/components/ui/floating-nav';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Heat - Personalized heatmaps for your habits',
  description:
    'Heat is a personal heatmap generator that helps you visualize your habits and routines.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            'min-h-screen bg-backgrond font-sans antialiased relative',
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <nav className='w-full flex justify-between p-4'>
              <ModeToggle />
              <div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </nav>
            {children}
            <FloatingNav />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

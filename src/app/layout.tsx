import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

export const metadata: Metadata = {
    title: 'Todo List',
    description: 'this todo list will change everything',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={GeistSans.className}>{children}</body>
        </html>
    )
}

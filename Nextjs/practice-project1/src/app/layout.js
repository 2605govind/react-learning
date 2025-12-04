import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata = {
  title: "Travel Guild Website",
  description: "Best travel guidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body
        className={`${poppins.className}`}
      >
        
        {children}
      </body>
    </html>
  );
}

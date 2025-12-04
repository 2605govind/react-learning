export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={` antialiased`}
      >
        <h2>About Layout</h2>
        {children}

      </body>
    </html>
  );
}

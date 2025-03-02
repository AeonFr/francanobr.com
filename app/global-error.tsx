"use client";

import ErrorPage from "../components/ErrorPage";
import "./globals.css";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <ErrorPage status={500} />
      </body>
    </html>
  );
}

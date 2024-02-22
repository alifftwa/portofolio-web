import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <main>
        <div className="container mx-auto">
          <div className="xl:px-32 md:px-9 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
}

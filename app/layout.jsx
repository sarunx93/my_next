import "@styles/globals.css";
import { Children } from "react";
import Nav from "@components/Nav"
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;

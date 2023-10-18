"use client";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [newTabHref, setNewTabHref] = useState("/");

  return (
    <nav>
      <div>
        Current tab link:
        <Link className="main" href="/">
          Main
        </Link>
        <Link className="cat" href="cat">
          Cat
        </Link>
        <Link className="dog" href="dog">
          Dog
        </Link>
      </div>
      <div>
        New tab link:
        <Link
          className="main"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main
        </Link>
        <Link
          className="cat"
          href="cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cat
        </Link>
        <Link
          className="dog"
          href="dog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

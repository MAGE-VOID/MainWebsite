// theme.config.js

import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/Logos/Logo_white90.png"
        alt="Logo"
        width={130}
        height={130}
        priority
      />
      <span
        style={{ fontSize: "1.5em", fontWeight: "bold", color: "#FFF" }}
      ></span>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
  },
  project: {
    link: "https://github.com/MAGE-VOID",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/MAGE-VOID",
  footer: {
    text: `© ${new Date().getFullYear()} Investors Logics. All rights reserved.`,
  },
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
};

export default config;

import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        CopyrightÂ© {new Date().getFullYear()} Alex Muscina All Rights Reserved{" "}
      </p>
    </div>
  );
}

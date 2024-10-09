"use client";

import { useCallback } from "react";
import { useLoader } from "react18-loaders";
import styles from "./button.module.css";

/** Button to show global loader for 3 sec. */
export default function MyButton(): JSX.Element {
  const { setLoading } = useLoader();
  const handleClick = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [setLoading]);

  return (
    <button type="button" onClick={handleClick} className={styles.btn}>
      Show Global Loader for 3 sec
    </button>
  );
}

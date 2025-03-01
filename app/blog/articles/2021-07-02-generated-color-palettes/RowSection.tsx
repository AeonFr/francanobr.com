import styles from "./RowSection.module.css"

export const Row = ({ tag = "div", ...props }) => {
  const Tag = tag as "div";
  return <Tag className={styles.row} {...props} />;
};

export const Col = ({ tag = "div", ...props }) => {
  const Tag = tag as "div";
  return <Tag className={styles.column} {...props} />;
};

export const Spacer = () => <div style={{ marginTop: "4rem" }} />;

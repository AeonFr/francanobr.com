import styles from "./text.module.css"

export const Headline = ({ tag = "h1", ...props }) => {
  const Tag = tag;

  return <Tag className={styles.headline} {...props} />;
};

export const SmallText = (props) => {
  return <div className={styles.smallText} {...props} />;
};

export const BigText = (props) => {
  return <div className={styles.bigText} {...props} />;
};

import styles from "./Container.module.scss";

const Container = ({ children, classNames = "" }) => {
  return <div className={`${styles.container} ${classNames}`}>{children}</div>;
};

export default Container;

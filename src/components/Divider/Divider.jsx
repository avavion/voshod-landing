import style from "./Divider.module.scss";

const Divider = ({
  classNames = "divider",
  onClickHandler = () => {},
  onMouseMoveHandler = () => {},
  children,
}) => {
  return (
    <div
      className={`${style.divider} ${classNames}`}
      onClick={onClickHandler.bind(this)}
      onMouseMove={onMouseMoveHandler.bind(this)}
    >
      {children}
    </div>
  );
};

export default Divider;

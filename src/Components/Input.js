import Styles from "../styles/Subscribe.module.css";

const InputTag = (props) => {
  return <input className={Styles.input} placeholder={props.placeholder} />;
};
export default InputTag;

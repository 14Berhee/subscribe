import styles from "../styles/Subscribe.module.css";
import SubButt from "../Components/SubButton";
import InputTag from "../Components/Input";

let datas = ["First name", "Last name", "Email"];

const Subscribe = () => {
  return (
    <div className={styles.Subscribe}>
      <div>
        <h1>Subscribe</h1>
        <p>Sign up with your email address to receive news and updates</p>

        {datas.map((data, index) => {
          return <InputTag key={index} placeholder={data} />;
        })}
        <SubButt></SubButt>
      </div>
    </div>
  );
};

export default Subscribe;

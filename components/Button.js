import styles from '../styles/Button.module.css';

export default function Button(props) {
    let visibility = {
      display: "inline-block"
    }
    if (!props.visible) visibility.display = "none";
    return (
        <a href={props.link}>
          <button id={props.id} className={styles.button} style={visibility} onClick={props.click}>
            {props.text}
          </button>
        </a>
    )
}
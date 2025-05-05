import styles from "./index.module.scss";

type Props = {
  close: () => void;
  title: string;
  children: React.ReactNode;
};

const Index = ({ close, title, children }: Props) => {
  return (
    <>
      <div className={styles.overlay} onClick={close}></div>
      <div className={styles.wrapper}>
        <div className={styles.modal_header}>
          <button onClick={close} className={styles.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
              strokeWidth="2"
            >
              {" "}
              <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path>{" "}
            </svg>
          </button>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </>
  );
};

export default Index;

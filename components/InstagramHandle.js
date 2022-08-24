import Image from "next/image";

import styles from "../styles/instagramHandle.module.css";

import instagramLogo from "../public/instagram.png";

const InstagramHandle = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.instagramLogo}>
        <Image src={instagramLogo} />
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.instagram.com/${props.handle}/`}
      >
        @{props.handle}
      </a>
    </div>
  );
};

export default InstagramHandle;

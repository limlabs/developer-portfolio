import styles from './backdrop.module.css'

export const Backdrop = () => {
  return (
    <div
      className={`fixed left-0 top-0 z-0 flex h-screen w-screen overflow-hidden opacity-0 dark:opacity-100`}
    >
      <div className={`${styles.breatheAnimation} ${styles.circleLeft}`} />
      <div className={`${styles.breatheAnimation} ${styles.circleRight}`} />
    </div>
  )
}

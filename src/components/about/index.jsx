import React from 'react'

import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <h1>About Us</h1>
        <p>Hello, I&apos;m the <strong>about</strong> module</p>
        <p>I&apos;m from https://mfe-next-js-about.vercel.app/</p>
      </section>
    </div>
  )
}

export default About

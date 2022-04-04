import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className='container'>
        <Link href="/">
          <a>
            <Image
              src="/images/f1logo-pixelart.png"
              alt="F1 Logo"
              width={100}
              height={30}
            />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <div className={styles.aboutLink}>
              <Image
                src="/images/checkered-flag-icon.png"
                alt="flag"
                width={20}
                height={20}
              />
              <span>About</span>
            </div>
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar

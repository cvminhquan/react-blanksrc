import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import styles from './MouseFollower.module.scss'

const MouseFollower = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setPosition({ left: e.clientX, top: e.clientY });
    });
  }, []);

  return (
    <Suspense fallback={null}>
      <div className={styles['mouse-follower']} style={{ left: position.left, top: position.top }}>
        <div className={styles.dot}></div>
      </div>
    </Suspense>
  );
};

export default MouseFollower;
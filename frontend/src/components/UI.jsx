import { useEffect, useRef, useState } from 'react'

export function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </header>
  )
}

export function Reveal({ as: Element = 'div', className = '', children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <Element ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</Element>
}

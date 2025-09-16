'use client'
import { useEffect } from 'react'

export default function ZoomImages() {
  useEffect(() => {
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position:fixed; inset:0; display:none; align-items:center; justify-content:center;
      background:rgba(0,0,0,.85); z-index:9999; padding:20px;
    `
    const img = document.createElement('img')
    img.style.cssText = 'max-width:90%; max-height:90%; object-fit:contain'
    overlay.appendChild(img)
    overlay.addEventListener('click', () => (overlay.style.display = 'none'))
    document.body.appendChild(overlay)

    const onClick = (e: Event) => {
      const target = e.currentTarget as HTMLImageElement
      img.src = target.src
      overlay.style.display = 'flex'
    }

    const attach = () => {
      const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img[data-zoomable]'))
      imgs.forEach((el) => el.addEventListener('click', onClick))
    }

    attach()

    // MutationObserver to catch images added later (optional)
    const mo = new MutationObserver(() => attach())
    mo.observe(document.body, { subtree: true, childList: true })

    return () => {
      mo.disconnect()
      document.querySelectorAll('img[data-zoomable]').forEach((el) => el.removeEventListener('click', onClick))
      overlay.remove()
    }
  }, [])

  return null
}

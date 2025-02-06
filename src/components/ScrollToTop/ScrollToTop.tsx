import { useEffect, useId } from "react"
import "./ScrollToTop.scss"

export const ScrollToTop = () => {
    const idButton = useId()

    const showScrollBtn = () => {
        const scrollButton = document.getElementById(idButton)
        if (window.scrollY >= 800) {
            scrollButton?.classList.add("show-scroll-btn")
        } else {
            scrollButton?.classList.remove("show-scroll-btn")
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto asegura un desplazamiento suave
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", showScrollBtn)

        return () => {
            window.removeEventListener("scroll", showScrollBtn)
        }
    }, [])

    return (
        <button 
            className="scroll-top" 
            id={idButton}
            onClick={scrollTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path><path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path></svg>
        </button>
    )
}

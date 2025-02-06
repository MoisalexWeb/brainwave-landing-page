import { useState, useEffect } from "react"

export const useNavbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const toggleMenu = () => setIsOpenMenu(!isOpenMenu)
    const closeMenu = () => setIsOpenMenu(false)

    const handleResize = () => {
        if (isOpenMenu === false) return
        if (window.innerWidth >= 1024) closeMenu()
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return {
        isOpenMenu,
        toggleMenu,
        closeMenu
    }
}

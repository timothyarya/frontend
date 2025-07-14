
import { useTheme } from "next-themes"

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <>
            <button onClick={toggleTheme}>Theme</button>
        </>
    )
}

export default ThemeToggler
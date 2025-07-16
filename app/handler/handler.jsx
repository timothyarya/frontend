export const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const files = event.dataTransfer.files
    return files
}


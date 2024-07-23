function getFullYear() {
    const year = new Date().getFullYear()
    return year
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School'
    }
    return 'Holberton School main dashboard'
}

export {getFullYear, getFooterCopy}

function getTheme(fallback: string) {
  const theme = localStorage.getItem('theme') || fallback || 'light'
}

function setTheme(newTheme: string) {
  document.dispatchEvent(new CustomEvent('set-theme', { detail: newTheme })) // or pass `null` to clear the saved setting
}

export { getTheme, setTheme }
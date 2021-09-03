const isInViewport = (section) => {
  const element = document.getElementById(section)
  const rect = element.getBoundingClientRect()
  return rect.top < 64
}

export default isInViewport

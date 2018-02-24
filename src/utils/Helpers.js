export function formatTimestamp() {
  const date = new Date()
  return date.toDateString()
}

export function randomPostId() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random()
}

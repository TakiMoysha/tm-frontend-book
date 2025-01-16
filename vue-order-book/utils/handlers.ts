export const defineButtomHandler = (event: MouseEvent, callback: () => void) => {
  event.preventDefault()
  event.stopPropagation()
  await callback();
}

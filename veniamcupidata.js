function stopPropagation(event) {
  event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
}

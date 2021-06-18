const displayDate = (date) => {
  return new Intl.DateTimeFormat('eng-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

const $date = document.querySelector('.date')

const updated = displayDate($date.textContent)

$date.textContent = updated

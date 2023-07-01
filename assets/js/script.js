const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const items = document.querySelectorAll('.countdown__item-number')

const futureDate = new Date(2024, 0, 0, 0)
const futureTime = futureDate.getTime()

function countdown() {
  const today = new Date().getTime()
  const t = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / oneSecond)
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }

    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdownInterval)
  }
}

let countdownInterval = setInterval(countdown, 1000)
countdown()

class CountdownTimer {
  #remainingTime;
  #timerId = null;
  #isRunning = false;

  constructor(duration, container) {
    this.#remainingTime = duration;
    this.container = container;

    this.timerElement = document.createElement('div');
    this.timerElement.classList.add('timer');

    this.timeDisplay = document.createElement('span');
    this.timeDisplay.textContent = this.formatTime(this.#remainingTime);

    const controls = document.createElement('div');
    controls.classList.add('controls');

    this.startButton = document.createElement('button');
    this.startButton.textContent = 'Start';
    this.startButton.classList.add('start');
    this.startButton.addEventListener('click', this.start);

    this.stopButton = document.createElement('button');
    this.stopButton.textContent = 'Stop';
    this.stopButton.classList.add('stop');
    this.stopButton.addEventListener('click', this.stop);

    this.removeButton = document.createElement('button');
    this.removeButton.textContent = 'Remove';
    this.removeButton.classList.add('remove');
    this.removeButton.addEventListener('click', this.remove);

    controls.append(this.startButton, this.stopButton, this.removeButton);

    this.timerElement.appendChild(this.timeDisplay);
    this.timerElement.appendChild(controls);
    this.container.appendChild(this.timerElement);
  }

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  start = () => {
    if (this.#isRunning) return;
    this.#isRunning = true;
    this.#timerId = setInterval(() => {
      if (this.#remainingTime > 0) {
        this.#remainingTime -= 1;
        this.timeDisplay.textContent = this.formatTime(this.#remainingTime);
      } else {
        this.stop();
        this.timeDisplay.textContent = 'Time is up!';
      }
    }, 1000);
  };

  stop = () => {
    if (!this.#isRunning) return;
    clearInterval(this.#timerId);
    this.#isRunning = false;
  };

  remove = () => {
    clearInterval(this.#timerId);
    this.timerElement.remove();
  };
}

class TimerFactory {
  static createTimer(duration, parentElement) {
    if (isNaN(duration) || duration <= 0) {
      alert('Please enter a valid number of seconds!');
      return null;
    }

    const container = document.createElement('div');
    container.classList.add('timer-container');
    parentElement.appendChild(container);

    return new CountdownTimer(duration, container);
  }
}

const timerInput = document.getElementById('timerInput');
const startTimerButton = document.getElementById('startTimer');
const timerContainer = document.getElementById('timerContainer');

startTimerButton.addEventListener('click', () => {
  const duration = parseInt(timerInput.value, 10);
  TimerFactory.createTimer(duration, timerContainer);
});
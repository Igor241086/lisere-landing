class CountdownTimer {
    constructor(duration, container) {
      this.duration = duration;
      this.remainingTime = duration;
      this.timerId = null;
      this.isRunning = false;
      this.container = container;
  
      this.timerElement = document.createElement('div');
      this.timerElement.classList.add('timer');
  
      this.timeDisplay = document.createElement('span');
      this.timeDisplay.textContent = this.formatTime(this.remainingTime);
  
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
  
      controls.appendChild(this.startButton);
      controls.appendChild(this.stopButton);
  
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
      if (this.isRunning) return;
      this.isRunning = true;
      this.timerId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime -= 1;
          this.timeDisplay.textContent = this.formatTime(this.remainingTime);
        } else {
          this.stop();
          this.timeDisplay.textContent = 'Time is up!';
        }
      }, 1000);
    };
  
    stop = () => {
      if (!this.isRunning) return;
      clearInterval(this.timerId);
      this.isRunning = false;
    };
  }
  
  const timerInput = document.getElementById('timerInput');
  const startTimerButton = document.getElementById('startTimer');
  const timerContainer = document.getElementById('timerContainer');
  
  startTimerButton.addEventListener('click', () => {
    const duration = parseInt(timerInput.value, 10);
    if (!isNaN(duration) && duration > 0) {
      new CountdownTimer(duration, timerContainer);
    } else {
      alert('Please enter the correct number of seconds!');
    }
  });
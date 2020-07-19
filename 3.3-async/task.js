'use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Отсутствует id.');
    } else if (this.alarmCollection.find(alarm => alarm.id === id)) {
      // throw new Error('Будильник с таким id уже существет.');
      console.error('Будильник с таким id уже существет.');
    } else {
      this.alarmCollection.unshift({id, time, callback});
    }
  }

  removeClock(id) {
    let foundAlarmIndex = this.alarmCollection.findIndex(alarm => alarm.id === id);
    if (foundAlarmIndex === -1) {
      return false;
    } else {
      this.alarmCollection.splice(foundAlarmIndex, 1);
      return true;
    }
  }

  getCurrentFormattedTime(addMinutes = 0) { // addMinutes для удобной реализации Test case
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes() + addMinutes;
    
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    
    return `${hours}:${minutes}`;
  }

  checkClock(alarm) {
    if (alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        for (let alarm of this.alarmCollection) {
          this.checkClock(alarm);
        }
      }, 15000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Будильников: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(alarm => console.log(`id: ${alarm.id}; время: ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

// Test case

const alarms = new AlarmClock;
alarms.addClock(alarms.getCurrentFormattedTime(), () => console.log('Время вставать!'), 1);
alarms.addClock(alarms.getCurrentFormattedTime(1), () => {
  console.log('Снова время вставать!');
  alarms.removeClock(2);
}, 2);
alarms.addClock(alarms.getCurrentFormattedTime(2), () => {
  console.log('Последний будильник!');
  alarms.stop;
  alarms.clearAlarms();
  alarms.printAlarms();
}, 3);
alarms.printAlarms();
alarms.start();
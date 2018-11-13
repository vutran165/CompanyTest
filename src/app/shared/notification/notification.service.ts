import { Injectable } from '@angular/core';
import { PushNotification } from './push-notification';
import { Observable } from 'rxjs';

@Injectable()

export class NotificationService {

  public permission: Permission;

  constructor() {

  }

  public isSupported(): boolean {
    return 'Notification' in window;
  }

  requestPermission(): void {
    const self = this;
    if ('Notification' in window) {
      Notification.requestPermission(function (status) {
        return self.permission = status;
      });
    }
  }

  create(title: string, options?: PushNotification): any {
    const self = this;
    return new Observable(function (o) {
      if (!('Notification' in window)) {
        // do something
        o.complete();
      }

      if (self.permission !== 'granted') {
        // do something
        o.complete();
      }

      const _notify = new Notification(title, options);
      _notify.onshow = function (e) {
        return o.next({
          notification: _notify,
          event: e
        });
      };

      _notify.onclick = function (e) {
        return o.next({
          notification: _notify,
          event: e
        });
      };

      _notify.onerror = function (e) {
        return o.error({
          notification: _notify,
          event: e
        });
      };

      _notify.onclose = function () {
        return o.complete();
      };

    });
  }

  generateNotification(source: Array<any>): void {
    const self = this;
    source.forEach((item) => {
      const otions = {
        body: item.alertContent,
        icon: ''
      };
      const notify = self.create(item.title, otions).subcribe();
    });
  }
}

export declare type Permission = 'denied' | 'granted' | 'default';

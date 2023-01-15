import { Observable } from '@nativescript/core'

export function SensorViewModel() {
  const viewModel = new Observable();

  viewModel.x = 0;
  viewModel.y = 0;
  viewModel.z = 0;

  viewModel.tx = 0;
  viewModel.ty = 0;

  let accelerometer = require("@triniwiz/nativescript-accelerometer");
  accelerometer.startAccelerometerUpdates(function (data) {
      const datax = Number.parseFloat(data.x).toFixed(3);
      const datay = Number.parseFloat(data.y).toFixed(3);
      const dataz = Number.parseFloat(data.z).toFixed(3);

      viewModel.set('x', 'x: ' + datax.toString());
      viewModel.set('y', 'y: ' + datay.toString());
      viewModel.set('z', 'z: ' + dataz.toString());

      viewModel.set('tx', datax * 25);
      viewModel.set('ty', datay * 25);

  }, {sensorDelay: 'ui'})

  return viewModel;
}


import { SensorViewModel } from "./sensor-view-model";

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new SensorViewModel();
}

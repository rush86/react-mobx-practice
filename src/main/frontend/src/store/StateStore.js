import {observable, action} from "mobx";

class StateStore {
  @observable expanded = false;

  @action toggleDrawer = () => {
    this.expanded = !this.expanded;
  };
}

export default new StateStore();
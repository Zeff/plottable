///<reference path="testReference.ts" />

module Mocks {
  export class FixedSizeComponent extends Plottable.Component {
    public fsWidth: number;
    public fsHeight: number;

    constructor(width = 0, height = 0) {
      super();
      this.fsWidth = width;
      this.fsHeight = height;
      this._fixedWidthFlag = true;
      this._fixedHeightFlag = true;
    }

    public requestedSpace(availableWidth: number, availableHeight: number): Plottable._SpaceRequest {
      return {
        minWidth: this.fsWidth,
        minHeight: this.fsHeight
      };
    }
  }
}

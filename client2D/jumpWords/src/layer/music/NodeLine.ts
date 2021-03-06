/**
 created by liujiang
 time 2019/2/11 11:07
 所有的 线条  需要 倾斜  目前完全复制  url: http://www.iqiyi.com/w_19rtyuwugp.html
 全屏考虑
 */
module game {
    export class NodeLine extends eui.Component {

        lintArr: Array<egret.Shape> = []

        constructor() {
            super()
        }

        childrenCreated() {
            let x = -0
            let w = 30
            let h = 300
            let y = h
            let gap = 5
            let skewX = 20
            for (let i = 0; i < 1; i++) {
                let line = this.createdLine(x + (w + gap) * i, y, w, h)
                line.skewX = skewX
                line.anchorOffsetY = h
                line.filters = [gt.getLineFilter()]
                this.addChild(line)
                this.lintArr.push(line)
            }
        }

        createdLine(x: number, y: number, w: number, h: number): egret.Shape {
            let line = new egret.Shape();
            line.graphics.beginFill
            line.graphics.beginFill(App.lineColor, App.lineAlpha);
            line.graphics.drawRoundRect(x, y, w, h, 10, 10);
            line.graphics.endFill();
            return line
        }

    }
}

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
             let y =h

            let gap = 5
            let skewX = 20
            for (let i = 0;i<35;i++){
                let line = this.createdLine(x +( w + gap)*i ,y,w,h)
                line.skewX = skewX



                line.anchorOffsetY = h

                this.addChild(line)
                this.lintArr.push(line)
                if(i == 10){
                    window["lline"] = line
                }
            }

            egret.setInterval(()=>{
             let d :egret.Shape =   window["lline"]
                d.scaleY = Math.abs(Math.random()*2)
            },this,100)

        }

        createdLine(x:number,y:number,w:number,h:number):egret.Shape {
            let line = new egret.Shape();
            line.graphics.beginFill
            line.graphics.beginFill(App.lineColor, App.lineAlpha);
            line.graphics.drawRect(x, y, w, h);
            line.graphics.endFill();
            return line
        }







    }
}

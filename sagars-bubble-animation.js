var sagarsBubble = (function () {
    var myStyleSheetElem;
    var bodyHeight;
    var bodyWidth;
    return {
        init: function () {
            //get body
            bodyHeight = document.body.clientHeight;
            bodyWidth = document.body.clientWidth;
            console.log(bodyHeight);
            console.log(bodyWidth);
            //generate keyframe
            myStyleSheetElem = document.createElement("style");
            document.head.appendChild(myStyleSheetElem);
            this.addCSSRule(myStyleSheetElem.sheet, '@keyframes move', "100% {transform: translate3d(0, 0, -1000px);", 0);

            //create container
            var container = document.createElement('div');
            var style = 'transform-style: preserve-3d;width: 100%;height: 100%;perspective: 600px;z-index:-1;margin-left:20%;';
            container.setAttribute('class', 'sagarsContainer');
            this.addCSSRule(myStyleSheetElem.sheet, '.sagarsContainer', style, 0);
            for (var i = 0; i < 200; i++) {
                var bb = this.createBubble();
                container.appendChild(bb);
            }
            document.body.appendChild(container);
        },
        createBubble: function () {
            // create bubble
            var _bubble = document.createElement('div');
            var dotHeightWidth = Math.floor((Math.random() * 30) + 2),
                translateX = Math.floor(Math.random() * bodyWidth),
                translateY = Math.floor(Math.random() * bodyHeight),
                translateZ = Math.floor((Math.random() * (bodyWidth-dotHeightWidth))),
                animationDelay = Math.round((Math.random() * 10) * 100) / 100;

            var style = 'animation: move 3s infinite;background:' + this.getRandomColor() + ';transform: translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px);animation-delay: -' + animationDelay + 's;width: ' + dotHeightWidth + 'px;height: ' + dotHeightWidth + 'px;position: absolute;opacity: .7;border-radius:50%;';
            var className = "Sagar_" + translateX + translateY;
            this.addCSSRule(myStyleSheetElem.sheet, '.' + className, style, 0);
            _bubble.setAttribute('class', className);

            return _bubble;
        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        addCSSRule(sheet, selector, rules, index) {
            if ("insertRule" in sheet) {
                sheet.insertRule(selector + "{" + rules + "}", index);
            } else if ("addRule" in sheet) {
                sheet.addRule(selector, rules, index);
            }
        }
    }
})();


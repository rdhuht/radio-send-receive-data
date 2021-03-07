// 接收端代码
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
radio.setGroup(72)
basic.forever(function () {
	
})

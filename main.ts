input.onButtonPressed(Button.A, function () {
    basic.showNumber(초기_우수량)
    basic.pause(200)
    basic.clearScreen()
})
let 초기_우수량 = 0
OLED.init(128, 64)
초기_우수량 = 0
let 오류저장 = 0
basic.pause(100)
servos.P1.setAngle(0)
servos.P2.setAngle(0)
basic.forever(function () {
    초기_우수량 = Environment.ReadWaterLevel(AnalogPin.P4)
})
basic.forever(function () {
    if (0 == 0) {
        OLED.writeStringNewLine("Starting to collect dirty rainwater")
        basic.pause(200)
        if (오류저장 == 0 && 초기_우수량 >= 60) {
            OLED.writeStringNewLine("Trash dirty rainwater which it collected")
            basic.pause(1000)
            servos.P1.setAngle(135)
            servos.P2.setAngle(135)
            basic.pause(5000)
            OLED.writeStringNewLine("completed removing dirty rainwater. Collecting new rainwater...")
            basic.pause(5000)
            servos.P1.setAngle(0)
            servos.P2.setAngle(0)
            오류저장 = 1
            basic.pause(5000)
        }
    }
})
basic.forever(function () {
    if (오류저장 == 1 && 초기_우수량 >= 90) {
        OLED.writeStringNewLine("Completed removing clean rainwater")
    }
})

const canvas = wx.createCanvas()

touchX = 0
touchY = 0

const context = canvas.getContext('2d') // 创建一个 2d context

const enemyImage = wx.createImage()
const enemyImgX = canvas.width / 2 - 60
let enemyImgY = 0
enemyImage.onload = function () {
  context.drawImage(image, imgX, imgY)
}
enemyImage.src = 'images/enemy.png'

setInterval(function () {
  context.clearRect(enemyImgX, enemyImgY, 120, 79);
  context.drawImage(enemyImage, enemyImgX, ++enemyImgY)
  if (touchX >= enemyImgX - 186 && touchX <= enemyImgX + 120 && touchY >= enemyImgY - 130 && touchY <= enemyImgY + 79) { // 飞机与矩形发生碰撞
    wx.showModal({
      title: '提示',
      content: '发生碰撞，游戏结束！'
    })
  }
  if (enemyImgY >= canvas.height) {
    rectY = 0
  }
}, 16)

const image = wx.createImage()
const imgX = canvas.width / 2 - 93
let imgY = 500
image.onload = function () {
  context.drawImage(image, imgX, imgY)
}
image.src = 'images/hero.png'

// 存储当前飞机左上角坐标
let touchX = imgX
let touchY = imgY

wx.onTouchMove(function (res) {
  context.clearRect(touchX, touchY, 186, 130); // 清除画布上原有的飞机
  touchX = res.changedTouches[0].clientX - 96 // 重新判断当前触摸点x坐标  左上角x坐标
  touchY = res.changedTouches[0].clientY - 65 // 重新判断当前触摸点x坐标  左上角y坐标
  context.drawImage(image, touchX, touchY);
  if (touchX >= enemyImgX - 186 && touchX <= enemyImgX + 100 && touchY >= enemyImgY - 130 && touchY <= enemyImgY + 100) { // 飞机与矩形发生碰撞
    wx.showModal({
      title: '提示',
      content: '发生碰撞，游戏结束！'
    })
  }
})


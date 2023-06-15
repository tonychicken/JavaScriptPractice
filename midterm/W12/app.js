// 假設按鈕應該添加到名為 buttonContainer 的容器中
const buttonContainer = document.querySelector('.button-container');

const btnname=["1_synchronous","2_asnychronous_JavaScript5","3_demo_cb_example","4_promise","5_cb_Promise","6_promise_async_await","7_async_tutorials"]
// 創建七個按鈕
for (let i = 1; i <= 7; i++) {
  const button = document.createElement('button');
  button.textContent = `${btnname[i-1]}`;
  button.classList.add(`menu-btn`);
  buttonContainer.appendChild(button);
}


// 監聽所有具有 menu-btn 類別的按鈕的點擊事件
const menuButtons = document.querySelectorAll('.menu-btn');
menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent.substring(0, 1))
    ShowDemo(String(Number(button.textContent.substring(0, 1))-1));
  });
});



const ShowDemo = ((week) => {
    const content = document.querySelector('#contentZEO');
  
    switch (week) {
      case '0':
        content.innerHTML = `<iframe src="./1_synchronous/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '1':
        content.innerHTML = `<iframe src="./2_asnychronous_JavaScript5/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '2':
        content.innerHTML = `<iframe src="./3_demo_cb_example/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '3':
        content.innerHTML = `<iframe src="./4_promise/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '4':
        content.innerHTML = `<iframe src="./5_cb_Promise/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '5':
        content.innerHTML = `<iframe src="./6_promise_async_await/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      case '6':
        content.innerHTML = `<iframe src="./7_async_tutorials/index.html" style="width: 100%; height: 800px;" ></iframe>`;
        break;
      default:
        content.innerHTML = `<h2>No content available for this week yet.</h2>`;
    }
  
  })

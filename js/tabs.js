


const tabBtn = document.querySelectorAll(".tab");
const tabHidden = document.querySelectorAll(".tab__content");

tabBtn.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		
		if (!currentBtn.classList.contains("active")) {
			tabBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabHidden.forEach(function (item) {
        item.classList.remove("show");
      });
		}

		currentBtn.classList.add("active");
		currentTab.classList.add("show")
	})
})


// const tabBtns = document.querySelectorAll(".tab");
// const tabContents = document.querySelectorAll("[data-tab]");

// tabBtns.forEach(function (tabBtn) {
//   tabBtn.addEventListener("click", function () {
//     const tabId = tabBtn.getAttribute("data-tab");

//     tabBtns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });

//     tabContents.forEach(function (content) {
//       if (content.getAttribute("data-tab") === tabId) {
//         content.classList.add("active")
//       } else {
//         content.classList.remove("show")
//       }
//     });

//     tabBtn.classList.add("active");
//   });
// });

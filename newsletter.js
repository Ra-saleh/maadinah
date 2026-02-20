const subscribeBtn = document.getElementById("subscribeBtn");
const toast = document.getElementById("toast");

subscribeBtn.addEventListener("click", () => {
  toast.textContent = "تم الاشتراك بنجاح. شكراً لاهتمامك بأخبار المدينة المنورة.";
});

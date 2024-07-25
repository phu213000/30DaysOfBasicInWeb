const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="AI Technology" />
  `;

  title.innerHTML = "AI Technology";
  excerpt.innerHTML =
    "Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta sống và làm việc. Từ các trợ lý ảo như Siri và Alexa đến các hệ thống tự động hóa sản xuất, AI đang mở ra những cơ hội mới và đầy thách thức. Bài viết này sẽ khám phá các ứng dụng và tiềm năng của AI trong tương lai gần.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Ảnh tác giả" />';
  name.innerHTML = "Phu Ho";
  date.innerHTML = "June 25, 2024";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
